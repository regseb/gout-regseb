/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const MalikiScraper = class {
    #password;

    constructor({ password }) {
        this.#password = password ?? true;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://maliki.com/strips/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const selector = ".archiveStrips--content > * > .row a";
        return Array.from(doc.querySelectorAll(selector), (a) => ({
            date: new Date(a.querySelector("time").dateTime).getTime(),
            guid: a.href,
            img: a.querySelector("img").src,
            link: a.href,
            title: a.querySelector("h3").textContent,
        }))
            .filter(
                (i) => this.#password || !i.title.startsWith("Protégé\u00A0: "),
            )
            .slice(0, max);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, MalikiScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
