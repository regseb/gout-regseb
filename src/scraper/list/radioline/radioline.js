/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const DATE_REGEXP = new RegExp(
    String.raw`(?<year>\d{4})(?<month>\d{2})(?<day>\d{2})` +
        String.raw`(?<hours>\d{2})(?<minutes>\d{2})(?<seconds>\d{2})-[^-]+$`,
    "u",
);

const RadiolineScraper = class {
    #podcast;

    constructor({ podcast }) {
        this.#podcast = podcast;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url = `https://fr-fr.radioline.co/${this.#podcast}`;
        const response = await fetch(url);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Promise.all(
            Array.from(doc.querySelectorAll("#chapters li"))
                .slice(0, max)
                .map(async (li) => {
                    const link = li.querySelector("h2 a").getAttribute("href");
                    const img = li.querySelector("img").src;
                    const title = li.querySelector("h2 a").textContent;

                    const result = DATE_REGEXP.exec(link);
                    const date = new Date(
                        Number(result.groups.year),
                        Number(result.groups.month) - 1,
                        Number(result.groups.day),
                        Number(result.groups.hours),
                        Number(result.groups.minutes),
                        Number(result.groups.seconds),
                    ).getTime();

                    const suburl =
                        "https://fr-fr.radioline.co/Pillow/" +
                        link.slice(1).replaceAll("-", "_") +
                        "/play";
                    const subresponse = await fetch(suburl);
                    const subjson = await subresponse.json();
                    return {
                        audio: subjson.body.content.streams[0].url,
                        date,
                        guid: link,
                        img,
                        link: url + link,
                        title,
                    };
                }),
        );
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, RadiolineScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
