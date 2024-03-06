/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const GeekAndPokeScraper = class {
    // eslint-disable-next-line class-methods-use-this
    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(
            "https://feeds.feedburner.com/GeekAndPoke",
        );
        const text = await response.text();
        const xml = new DOMParser().parseFromString(text, "application/xml");

        // eslint-disable-next-line array-func/from-map
        return Array.from(xml.querySelectorAll("item"), (item) => ({
            description: item.querySelector("description").textContent,
            guid: item.querySelector("guid").textContent,
            link: item.querySelector("link").textContent,
            pubDate: item.querySelector("pubDate").textContent,
            title: item.querySelector("title").textContent,
        }))
            .map((item) => {
                const doc = new DOMParser().parseFromString(
                    item.description,
                    "text/html",
                );

                return {
                    date: new Date(item.pubDate).getTime(),
                    guid: item.guid,
                    img:
                        doc.querySelector("img").dataset.image + "?format=300w",
                    link: item.link,
                    title: item.title,
                };
            })
            .sort((i1, i2) => i2.date - i1.date)
            .slice(0, max);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, GeekAndPokeScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
