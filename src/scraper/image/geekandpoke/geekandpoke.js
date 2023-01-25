/**
 * @module
 */

export default class GeekAndPoke {

    #complements;

    constructor({ complements }) {
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://feeds.feedburner.com" +
                                                                "/GeekAndPoke");
        const text = await response.text();
        const xml = new DOMParser().parseFromString(text, "application/xml");

        // eslint-disable-next-line array-func/from-map
        return Array.from(xml.querySelectorAll("item"), (item) => ({
            description: item.querySelector("description").textContent,
            guid:        item.querySelector("guid").textContent,
            link:        item.querySelector("link").textContent,
            pubDate:     item.querySelector("pubDate").textContent,
            title:       item.querySelector("title").textContent,
        })).map((item) => {
            const doc = new DOMParser().parseFromString(item.description,
                                                        "text/html");

            return {
                date:  new Date(item.pubDate).getTime(),
                guid:  item.guid,
                img:   doc.querySelector("img").dataset.image + "?format=300w",
                link:  item.link,
                title: item.title,
            };
        }).sort((i1, i2) => i2.date - i1.date)
          .slice(0, max)
          .map((i) => ({ ...this.#complements, ...i }));
    }
}
