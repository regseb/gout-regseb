/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const API_URL = "https://api.tumblr.com/v2";

const TOKEN = "aIcXSOoTtqrzR8L8YEIOmBeW94c3FmbSNSWAUbxsny9KKx5VFh";

const TumblrScraper = class {
    #user;

    constructor({ user }) {
        this.#user = user;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(`${API_URL}/blog/${this.#user}/posts`, {
            headers: { Authorization: `Bearer ${TOKEN}` },
        });
        const json = await response.json();

        return json.response.posts
            .filter((p) => "image" === p.content[0]?.type)
            .slice(0, max)
            .map((post) => ({
                date: post.timestamp * 1000,
                guid: post.short_url,
                img: post.content[0].media[0].url,
                link: post.post_url,
                title: post.summary,
            }));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, TumblrScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
