/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const TwitchScraper = class {
    #channel;

    constructor({ channel }) {
        this.#channel = channel;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch("https://gql.twitch.tv/gql", {
            method: "POST",
            headers: { "Client-Id": "kimne78kx3ncx6brgo4mv6wki5h1ko" },
            body: JSON.stringify([
                {
                    operationName: "FilterableVideoTower_Videos",
                    variables: {
                        limit: Math.min(max, 100),
                        channelOwnerLogin: this.#channel,
                        videoSort: "TIME",
                    },
                    extensions: {
                        persistedQuery: {
                            sha256Hash:
                                "acea7539a293dfd30f0b0b81a263134bb5d9a7175592" +
                                "e14ac3f7c77b192de416",
                        },
                    },
                },
            ]),
        });

        const json = await response.json();
        return json[0].data.user.videos.edges
            .map((e) => e.node)
            .map((n) => ({
                date: new Date(n.publishedAt).getTime(),
                guid: `https://www.twitch.tv/videos/${n.id}`,
                img: n.previewThumbnailURL,
                link: `https://www.twitch.tv/videos/${n.id}`,
                title: n.title,
            }));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, TwitchScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
