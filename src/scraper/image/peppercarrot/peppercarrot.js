/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import TransformsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/transforms/transforms.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const PepperCarrotScraper = class {
    #lang;

    constructor({ lang = "fr" }) {
        this.#lang = lang;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(
            `https://www.peppercarrot.com/${this.#lang}/webcomics` +
                "/peppercarrot.html",
        );
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll("figure > a"))
            .slice(0, max)
            .map((a) => ({
                guid: a.href,
                img: a.querySelector("img").src,
                link: a.href,
                title: a
                    .querySelector("img")
                    .title.replace(" (cliquez pour ouvrir l'épisode)", ""),
            }));
    }
};

export default chain(
    TransformsScraper,
    FilterScraper,
    ComplementsScraper,
    PepperCarrotScraper,
    {
        dispatch: ({ transforms, filter, complements, ...others }) => [
            { transforms },
            { filter },
            { complements },
            others,
        ],
    },
);
