/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const API_URL = "https://api.dailymotion.com";

const DailymotionScraper = class {
    #user;

    constructor({ user }) {
        this.#user = user;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url =
            `${API_URL}/user/${this.#user}/videos` +
            "?fields=created_time,description,id,thumbnail_url,title,url" +
            `&limit=${max}`;
        const response = await fetch(url);
        const json = await response.json();

        return json.list.map((item) => ({
            date: item.created_time * 1000,
            desc: item.description,
            guid: item.id,
            img: item.thumbnail_url,
            link: item.url,
            title: item.title,
        }));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, DailymotionScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
