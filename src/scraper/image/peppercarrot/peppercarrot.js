/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const PepperCarrotScraper = class {
    #lang;

    constructor({ lang }) {
        this.#lang = lang ?? "fr";
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(
            `https://www.peppercarrot.com/${this.#lang}/webcomics/index.html`,
        );
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll("figure > a"))
            .slice(0, max)
            .map((a) => ({
                guid: a.href,
                img: a.querySelector("img").src,
                link: a.href,
                title: a.querySelector("img").title,
            }));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, PepperCarrotScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
