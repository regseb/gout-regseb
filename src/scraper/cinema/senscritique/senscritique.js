/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

/**
 * La requête pour récupérer les oeuvres d'un utilisateur SensCritique pour un
 * univers (films, séries, jeux...) et en fonction de mots clés.
 *
 * @type {string}
 */
const QUERY = `
    query UserCollection($username: String!,
                         $universe: String,
                         $keywords: String,
                         $limit:    Int,
                         $offset:   Int,
                         $order:    CollectionSort) {
        user(username: $username) {
            collection(universe: $universe,
                       keywords: $keywords
                       limit:    $limit
                       offset:   $offset
                       order:    $order) {
                products {
                    title
                    otherUserInfos(username: $username) {
                        isDone
                        isRecommended
                        isWished
                    }
                }
            }
        }
    }
`;

const simplify = function (value) {
    return value
        ?.normalize("NFKD")
        .toLowerCase()
        .replaceAll(/[^a-z]+/gu, "");
};

const compare = function (first, second) {
    return simplify(first) === simplify(second);
};

const SensCritiqueScraper = class {
    /**
     * Le nom d'un utilisateur SensCritique.
     *
     * @type {string}
     */
    #user;

    /**
     * Des scrapers du module <em>cinema</em>.
     *
     * @type {Object[]}
     */
    #scrapers;

    constructor({ user }, scrapers) {
        this.#user = user;
        this.#scrapers = scrapers;
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const results = await Promise.all(
            this.#scrapers.map((s) => s.extract(max)),
        );
        const movies = results
            .flat()
            .sort((i1, i2) => (i2.date ?? 0) - (i1.date ?? 0))
            .slice(0, max);

        return Promise.all(
            movies.map(async (movie) => {
                const response = await fetch(
                    "https://apollo.senscritique.com/",
                    {
                        method: "POST",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify([
                            {
                                operationName: "UserCollection",
                                variables: {
                                    username: this.#user,
                                    universe: "movie",
                                    keywords: movie.title,
                                    limit: 1,
                                    offset: 0,
                                    order: "DATE_RELEASE_DESC",
                                },
                                query: QUERY,
                            },
                        ]),
                    },
                );
                const json = await response.json();
                const product = json[0].data.user.collection.products?.[0];

                let icon;
                if (compare(movie.title, product?.title)) {
                    if (product.otherUserInfos.isRecommended) {
                        icon = "recommended";
                    } else if (product.otherUserInfos.isDone) {
                        icon = "done";
                    } else if (product.otherUserInfos.isWished) {
                        icon = "wished";
                    }
                }

                return {
                    ...movie,
                    ...(undefined === icon
                        ? {}
                        : { icon: import.meta.resolve(`./img/${icon}.svg`) }),
                };
            }),
        );
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, SensCritiqueScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
