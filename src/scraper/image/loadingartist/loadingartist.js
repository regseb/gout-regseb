/**
 * @module
 */

export default class LoadingArtist {
    #complements;

    constructor({ complements }) {
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://loadingartist.com/index.xml");
        const text = await response.text();
        const xml = new DOMParser().parseFromString(text, "application/xml");

        return Array.from(xml.querySelectorAll("item"))
            .filter((i) => "comic" === i.querySelector("category").textContent)
            .map((item) => ({
                guid: item.querySelector("guid").textContent,
                link: item.querySelector("link").textContent,
                pubDate: item.querySelector("pubDate").textContent,
                title: item.querySelector("title").textContent,
            }))
            .map((item) => ({
                date: new Date(item.pubDate).getTime(),
                guid: item.guid,
                icon: import.meta.resolve("./img/loadingartist_white.svg"),
                img: `${item.link}thumb.png`,
                link: item.link,
                title: item.title,
            }))
            .sort((i1, i2) => i2.date - i1.date)
            .slice(0, max)
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
