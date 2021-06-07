/**
 * @module
 */

const BASE_URI = import.meta.url.slice(0, import.meta.url.lastIndexOf("/"));

export default class {

    constructor({ lang, complements }) {
        this._lang = lang ?? "fr";
        this._complements = {
            color: "#607d8b",
            icon:  `${BASE_URI}/img/articleauhasard.svg`,
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
}
