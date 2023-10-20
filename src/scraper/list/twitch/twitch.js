/**
 * @module
 */

export default class TwitchScraper {
    #channel;

    #complements;

    constructor({ channel, complements }) {
        this.#channel = channel;
        this.#complements = complements;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(
            `https://m.twitch.tv/${this.#channel}/videos?filter=all`,
        );
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");

        return Array.from(
            doc.querySelectorAll('script[type="application/ld+json"]'),
        )
            .flatMap((s) =>
                JSON.parse(s.text)
                    .filter((p) => "ItemList" === p["@type"])
                    .flatMap((p) =>
                        p.itemListElement
                            .filter((i) =>
                                i.url.startsWith(
                                    "https://www.twitch.tv/videos/",
                                ),
                            )
                            .map((i) => ({
                                date: new Date(i.uploadDate).getTime(),
                                guid: i.url,
                                img: i.thumbnailUrl.at(-1),
                                link: i.url,
                                title: i.name,
                            })),
                    ),
            )
            .slice(0, max)
            .map((i) => ({ ...this.#complements, ...i }));
    }
}
