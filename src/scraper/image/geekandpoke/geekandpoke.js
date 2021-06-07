/**
 * @module
 */

export default class {

    constructor({ complements }) {
        this._complements = complements;
    }

    async extract(max) {
        const response = await fetch("https://feeds.feedburner.com" +
                                                                "/GeekAndPoke");
        const text = await response.text();
        const xml = new DOMParser().parseFromString(text, "application/xml");

        return Array.from(xml.querySelectorAll(`item:nth-of-type(-n+${max})`))
                    .map((item) => {
            const description = item.querySelector("description").textContent;
            const doc = new DOMParser().parseFromString(description,
                                                        "text/html");

            return {
                date:  new Date(item.querySelector("pubDate").textContent)
                                                                     .getTime(),
                guid:  item.querySelector("guid").textContent,
                img:   doc.querySelector("img").dataset.image + "?format=300w",
                link:  item.querySelector("link").textContent,
                title: item.querySelector("title").textContent,
            };
        }).map((i) => ({ ...this._complements, ...i }));
    }
}
