/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import TransformsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/transforms/transforms.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const MalikiScraper = class {
    #password;

    constructor({ password = true }) {
        this.#password = password;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://maliki.com/strips/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const selector = ".archiveStrips--content > * > .row a";
        return Array.from(doc.querySelectorAll(selector), (a) => ({
            date: Temporal.PlainDate.from(
                a.querySelector("time").dateTime,
            ).toZonedDateTime(Temporal.Now.timeZoneId()).epochMilliseconds,
            guid: a.href,
            img: a.querySelector("img").src,
            link: a.href,
            title: a.querySelector("h3").textContent,
        }))
            .filter(
                (i) => this.#password || !i.title.startsWith("Protégé\u{A0}: "),
            )
            .slice(0, max);
    }
};

export default chain(
    TransformsScraper,
    FilterScraper,
    ComplementsScraper,
    MalikiScraper,
    {
        dispatch: ({ transforms, filter, complements, ...others }) => [
            { transforms },
            { filter },
            { complements },
            others,
        ],
    },
);
