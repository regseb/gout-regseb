/**
 * @module
 */

export default class {

    #lang;

    #complements;

    constructor({ lang, complements }) {
        this.#lang = lang ?? "fr";
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://www.peppercarrot.com" +
                                     `/${this.#lang}/webcomics/index.html`);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll("figure > a"))
                    .slice(0, max)
                    .map((a) => ({
            guid:  a.href,
            img:   a.querySelector("img").src,
            link:  a.href,
            title: a.querySelector("img").title,
        })).map((i) => ({ ...this.#complements, ...i }));
    }
}
