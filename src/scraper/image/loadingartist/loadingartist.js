/**
 * @module
 */

const BASE_URI = "https://loadingartist.com";

export default class {

    constructor({ complements }) {
        this._complements = complements;
    }

    async extract(max) {
        const response = await fetch(`${BASE_URI}/archives/`);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const url = BASE_URI + doc.querySelector(".archive-thumbs a")
                                  .getAttribute("href");
        const subresponse = await fetch(url);
        const subtext = await subresponse.text();
        const subdoc = new DOMParser().parseFromString(subtext, "text/html");

        return Array.from(subdoc.querySelectorAll(".archive-thumbs a"))
                    .slice(-max)
                    .map((a) => ({
            guid:  BASE_URI + a.getAttribute("href"),
            img:   BASE_URI + a.querySelector("img").getAttribute("src"),
            link:  BASE_URI + a.getAttribute("href"),
            title: a.querySelector("img").title,
        })).reverse().map((i) => ({ ...this._complements, ...i }));
    }
}
