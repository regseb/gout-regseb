/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const CommitStripScraper = class {
    // eslint-disable-next-line class-methods-use-this
    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://www.commitstrip.com/fr/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll(".excerpts a"))
            .slice(0, max)
            .map((a) => {
                const link = a.href;
                const parts = link.split("/");
                return {
                    date: new Date(parts[3], parts[4], parts[5]).getTime(),
                    guid: link,
                    img: a.querySelector("img").src,
                    link,
                    title: a.querySelector("strong").textContent,
                };
            });
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, CommitStripScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
