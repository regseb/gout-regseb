/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import TransformsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/transforms/transforms.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const ArticleAuHasardScraper = class {
    #lang;

    constructor({ lang }) {
        this.#lang = lang ?? "fr";
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url =
            `https://${this.#lang}.wikipedia.org/w/api.php` +
            "?action=query&list=random&rnnamespace=0&format=json" +
            `&rnlimit=${max}`;
        const response = await fetch(url);
        const json = await response.json();
        return json.query.random.map((random) => ({
            color: "#607d8b",
            guid: random.id,
            icon: "https://cdn.simpleicons.org/wikipedia/fff",
            link: `https://${this.#lang}.wikipedia.org/wiki/${random.title}`,
            title: random.title,
        }));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(
    TransformsScraper,
    FilterScraper,
    ComplementsScraper,
    ArticleAuHasardScraper,
    {
        dispatch: ({ transforms, filter, complements, ...others }) => [
            { transforms },
            { filter },
            { complements },
            others,
        ],
    },
);
