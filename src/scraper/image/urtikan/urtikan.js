/**
 * @module
 */

export default class {

    constructor({ complements }) {
        this._complements = complements;
    }

    async extract(max) {
        const response = await fetch("http://www.urtikan.net/dessin-du-jour/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll("#posts-dessin li img"))
                    .slice(0, max)
                    .map((img) => ({
            guid:  img.src,
            img:   img.src,
            link:  img.parentElement.href,
            title: img.alt,
        })).map((i) => ({ ...this._complements, ...i }));
    }
}
