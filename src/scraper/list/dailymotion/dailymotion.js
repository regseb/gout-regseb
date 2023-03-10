/**
 * @module
 */

const API_URL = "https://api.dailymotion.com";

export default class Dailymotion {
    #user;

    #complements;

    constructor({ user, complements }) {
        this.#user = user;
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url =
            `${API_URL}/user/${this.#user}/videos` +
            "?fields=created_time,description,id,thumbnail_url,title,url" +
            `&limit=${max}`;
        const response = await fetch(url);
        const json = await response.json();

        return json.list
            .map((item) => ({
                date: item.created_time * 1000,
                desc: item.description,
                guid: item.id,
                img: item.thumbnail_url,
                link: item.url,
                title: item.title,
            }))
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
