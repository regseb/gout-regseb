/**
 * @module
 */

export default class UrtikanScraper {
    #complements;

    constructor({ complements }) {
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://www.urtikan.net/dessin-du-jour/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll("#posts-dessin li img"))
            .slice(0, max)
            .map((img) => ({
                guid: img.src,
                img: img.src,
                link: img.parentElement.href,
                title: img.alt,
            }))
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
