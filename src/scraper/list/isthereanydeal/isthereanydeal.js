/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const GAME_URL = "https://isthereanydeal.com/game";

const IsThereAnyDealScraper = class {
    #game;

    #stores;

    constructor({ game, stores }) {
        this.#game = game;
        this.#stores = stores ?? [];
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(`${GAME_URL}/${this.#game}/info/`);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const title = doc.querySelector("#gameTitle").textContent;
        // eslint-disable-next-line array-func/from-map
        return Array.from(
            doc.querySelectorAll(".priceTable__shop"),
            (td) => td.parentNode,
        )
            .map((tr) => ({
                store: tr.querySelector("a").textContent.trim(),
                link: tr.querySelector("a").href,
                cut: tr.querySelector(".priceTable__cut").textContent,
                price: tr.querySelector(".priceTable__new").textContent,
            }))
            .filter(
                (i) =>
                    "0%" !== i.cut &&
                    (0 === this.#stores.length ||
                        this.#stores.includes(i.store)),
            )
            .filter((item, _index, items) => {
                return !items.some(
                    (i) =>
                        item.price === i.price &&
                        this.#stores.indexOf(item.store) >
                            this.#stores.indexOf(i.store),
                );
            })
            .slice(0, max)
            .map((item) => ({
                guid: item.link,
                link: item.link,
                title: `${title} : ${item.price} (${item.cut})`,
            }));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, IsThereAnyDealScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
