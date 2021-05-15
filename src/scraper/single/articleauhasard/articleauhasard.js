/**
 * @module
 */

const BASE_URL = import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1);

export const Scraper = class {
    constructor({ lang = "fr", complements }) {
        this._lang = lang;
        this._complements = {
            color: "#607d8b",
            icon:  BASE_URL + "img/articleauhasard.svg",
            ...complements,
        };
    }

    async extract(size = 1) {
        const url = `https://${this._lang}.wikipedia.org/w/api.php` +
                    "?action=query&list=random&rnnamespace=0&format=json" +
                    `&rnlimit=${size}`;
        const response = await fetch(url);
        const json = await response.json();
        return json.query.random.map((random) => ({
            guid:  random.id,
            link:  `https://${this._lang}.wikipedia.org/wiki/` + random.title,
            title: random.title,
        })).map((i) => ({ ...this._complements, ...i }));
    }
};
