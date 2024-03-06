/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const XkcdScraper = class {
    // eslint-disable-next-line class-methods-use-this
    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://xkcd.com/rss.xml");
        const text = await response.text();
        const xml = new DOMParser().parseFromString(text, "application/xml");

        return Array.from(xml.querySelectorAll("item"))
            .slice(0, max)
            .map((item) => {
                const description =
                    item.querySelector("description").textContent;
                const doc = new DOMParser().parseFromString(
                    description,
                    "text/html",
                );
                return {
                    date: new Date(
                        item.querySelector("pubDate").textContent,
                    ).getTime(),
                    guid: item.querySelector("guid").textContent,
                    img: doc.querySelector("img").src,
                    link: item.querySelector("link").textContent,
                    title: item.querySelector("title").textContent,
                };
            });
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, XkcdScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
