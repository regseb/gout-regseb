/**
 * @module
 */

export default class ArticleAuHasard {
    #lang;

    #complements;

    constructor({ lang, complements }) {
        this.#lang = lang ?? "fr";
        this.#complements = {
            color: "#607d8b",
            icon: import.meta.resolve("./img/articleauhasard.svg"),
            ...complements,
        };
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const url =
            `https://${this.#lang}.wikipedia.org/w/api.php` +
            "?action=query&list=random&rnnamespace=0&format=json" +
            `&rnlimit=${max}`;
        const response = await fetch(url);
        const json = await response.json();
        return json.query.random
            .map((random) => ({
                guid: random.id,
                link: `https://${this.#lang}.wikipedia.org/wiki/${
                    random.title
                }`,
                title: random.title,
            }))
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
