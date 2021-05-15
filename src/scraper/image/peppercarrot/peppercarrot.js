/**
 * @module
 */

export const Scraper = class {

    constructor({ lang = "fr", complements }) {
        this._lang = lang;
        this._complements = complements;
    }

    async extract(max) {
        const response = await fetch("https://www.peppercarrot.com" +
                                     `/${this._lang}/`);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll(".homecontent figure > a"))
                    .slice(0, max)
                    .map((a) => ({
            guid:  a.href,
            img:   a.querySelector("img").src,
            link:  a.href,
            title: a.title,
        })).map((i) => ({ ...this._complements, ...i }));
    }
};
