/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import ComplementsScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/complements/complements.js";
import FilterScraper from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/scraper/tools/filter/filter.js";
import chain from "https://cdn.jsdelivr.net/gh/regseb/gout@0/src/utils/scraper/chain.js";

const URL_SEARCH = "https://www.dealabs.com/search/advanced";

const MONTHS = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "aout",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
];

const DEFAULT_FILTERS = {
    /* eslint-disable camelcase */
    q: "",
    "search_fields[]": [1, 2, 3],
    sort_by: "new",
    time_frame: 0,
    hide_expired: 0,
    hide_local: 0,
    merchant_id: "",
    merchant: "",
    hot_only: 0,
    temperatureFrom: "",
    temperatureTo: "",
    priceFrom: "",
    priceTo: "",
    /* eslint-enable camelcase */
};

const getToken = async function () {
    const response = await fetch("https://www.dealabs.com/");
    const text = await response.text();
    const doc = new DOMParser().parseFromString(text, "text/html");
    for (const script of doc.querySelectorAll('script[type="text/html"]')) {
        const subdoc = new DOMParser().parseFromString(
            script.text,
            "text/html",
        );
        const input = subdoc.querySelector('input[name="_token"]');
        if (null !== input) {
            return input.value;
        }
    }
    return undefined;
};

const extractDate = function (ago) {
    let result = /(?<hours>\d{1,2}) h et (?<minutes>\d{1,2}) min$/v.exec(ago);
    if (null !== result) {
        return (
            Date.now() -
            3_600_000 * Number(result.groups.hours) -
            60_000 * Number(result.groups.minutes)
        );
    }

    result = /(?<minutes>\d{1,2}) min$/v.exec(ago);
    if (null !== result) {
        return Date.now() - 60_000 * Number(result.groups.minutes);
    }

    result = /(?<date>\d{1,2}) (?<month>[a-z]+)$/v.exec(ago);
    if (null !== result) {
        const now = new Date();
        const date = Number(result.groups.date);
        const month = MONTHS.indexOf(result.groups.month);
        const year = now.getFullYear() - (now.getMonth() < month ? 0 : 1);
        return new Date(
            year,
            month,
            date,
            now.getHours(),
            now.getMinutes(),
            now.getSeconds(),
            now.getMilliseconds(),
        ).getTime();
    }
    return undefined;
};

const DealabsScraper = class {
    #filters;

    constructor({ filters }) {
        this.#filters = { ...DEFAULT_FILTERS, ...filters };
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const body = new URLSearchParams();
        body.append("_token", await getToken());
        for (const [name, value] of Object.entries(this.#filters)) {
            if (Array.isArray(value)) {
                for (const subvalue of value) {
                    body.append(name, subvalue);
                }
            } else {
                body.append(name, value);
            }
        }
        const init = { method: "POST", body };

        const response = await fetch(URL_SEARCH, init);
        const text = await response.text();
        const doc = new DOMParser().parseFromString(text, "text/html");
        return Array.from(doc.querySelectorAll("article.thread"))
            .slice(0, max)
            .map((article) => ({
                price: article.querySelector(".thread-price")?.textContent,
                title: article.querySelector(".thread-title").textContent,
                link: article.querySelector(".thread-link").href,
                img: article.querySelector(".thread-image").src,
                ago: article.querySelector(
                    ".threadGrid-headerMeta .hide--fromW3",
                ).textContent,
            }))
            .map((item) => ({
                date: extractDate(item.ago),
                guid: item.link,
                img: item.img,
                link: item.link,
                title:
                    (undefined === item.price ? "" : item.price + " | ") +
                    item.title,
            }));
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default chain(FilterScraper, ComplementsScraper, DealabsScraper, {
    dispatch: ({ filter, complements, ...others }) => [
        { filter },
        { complements },
        others,
    ],
});
