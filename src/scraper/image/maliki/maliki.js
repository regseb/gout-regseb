/**
 * @module
 */

export default class {

    #complements;

    constructor({ complements }) {
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://maliki.com/strips/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const selector = ".archiveStrips--content > * > .row a";
        return Array.from(doc.querySelectorAll(selector))
                    .map((a) => ({
            date:  new Date(a.querySelector("time").dateTime),
            guid:  a.href,
            img:   a.querySelector("img").src,
            link:  a.href,
            title: a.querySelector("h3").textContent,
        })).filter((i) => !i.title.startsWith("Protégé&nbsp;: "))
           .slice(0, max)
           .map((i) => ({ ...this.#complements, ...i }));
    }
}
