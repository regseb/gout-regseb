/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

const GAME_URL = "https://isthereanydeal.com/game";

export default class IsThereAnyDealScraper {
    #game;

    #stores;

    #complements;

    constructor({ game, stores, complements }) {
        this.#game = game;
        this.#stores = stores ?? [];
        this.#complements = complements;
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
            }))
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
