/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const LoadingArtistScraper = class {
    // eslint-disable-next-line class-methods-use-this
    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://loadingartist.com/index.xml");
        const text = await response.text();
        const xml = new DOMParser().parseFromString(text, "application/xml");

        return Array.from(xml.querySelectorAll("item"))
            .filter((i) => "comic" === i.querySelector("category").textContent)
            .map((item) => ({
                guid: item.querySelector("guid").textContent,
                link: item.querySelector("link").textContent,
                pubDate: item.querySelector("pubDate").textContent,
                title: item.querySelector("title").textContent,
            }))
            .map((item) => ({
                date: new Date(item.pubDate).getTime(),
                guid: item.guid,
                img: `${item.link}thumb.png`,
                link: item.link,
                title: item.title,
            }))
            .sort((i1, i2) => i2.date - i1.date)
            .slice(0, max);
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, LoadingArtistScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
