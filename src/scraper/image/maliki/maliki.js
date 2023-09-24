/**
 * @module
 */

export default class MalikiScraper {
    #password;

    #complements;

    constructor({ password, complements }) {
        this.#password = password ?? true;
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://maliki.com/strips/");
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        const selector = ".archiveStrips--content > * > .row a";
        return Array.from(doc.querySelectorAll(selector), (a) => ({
            date: new Date(a.querySelector("time").dateTime).getTime(),
            guid: a.href,
            icon: import.meta.resolve("./img/maliki_white.svg"),
            img: a.querySelector("img").src,
            link: a.href,
            title: a.querySelector("h3").textContent,
        }))
            .filter(
                (i) => this.#password || !i.title.startsWith("Protégé\u00A0: "),
            )
            .slice(0, max)
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
