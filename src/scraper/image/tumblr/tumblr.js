/**
 * @module
 */

const API_URL = "https://api.tumblr.com/v2";

const TOKEN = "aIcXSOoTtqrzR8L8YEIOmBeW94c3FmbSNSWAUbxsny9KKx5VFh";

export default class Tumblr {
    #user;

    #complements;

    constructor({ user, complements }) {
        this.#user = user;
        this.#complements = complements;
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
                icon: import.meta.resolve("./img/tumblr.svg"),
                img: post.content[0].media[0].url,
                link: post.post_url,
                title: post.summary,
            }))
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
