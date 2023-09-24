/**
 * @module
 */

export default class CommitStripScraper {
    #complements;

    constructor({ complements }) {
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://www.commitstrip.com/fr/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(doc.querySelectorAll(".excerpts a"))
            .slice(0, max)
            .map((a) => {
                const link = a.href;
                const parts = link.split("/");
                return {
                    date: new Date(parts[3], parts[4], parts[5]).getTime(),
                    guid: link,
                    img: a.querySelector("img").src,
                    link,
                    title: a.querySelector("strong").textContent,
                };
            })
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
