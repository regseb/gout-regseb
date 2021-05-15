/**
 * @module
 */

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
    q:                 "",
    "search_fields[]": [1, 2, 3],
    sort_by:           "new",
    hide_expired:      0,
    hide_local:        0,
    merchant_id:       "",
    merchant:          "",
    hot_only:          0,
    temperatureFrom:   "",
    temperatureTo:     "",
    priceFrom:         "",
    priceTo:           "",
    /* eslint-enable camelcase */
};

const getToken = async function () {
    const response = await fetch("https://www.dealabs.com/");
    const text = await response.text();
    const doc = new DOMParser().parseFromString(text, "text/html");
    for (const script of doc.querySelectorAll(`script[type="text/html"]`)) {
        const subdoc = new DOMParser().parseFromString(script.text,
                                                       "text/html");
        const input = subdoc.querySelector(`input[name="_token"]`);
        if (null !== input) {
            return input.value;
        }
    }
    return null;
};

const extractDate = function (ago) {
    const hourMinute = (/([0-9]+) h et ([0-9]+) min$/u).exec(ago);
    const minute     = (/([0-9]+) min$/u).exec(ago);
    const dateMonth  = (/([0-9]+) ([a-z]+)$/u).exec(ago);

    if (null !== hourMinute) {
        return Date.now() - 3_600_000 * Number.parseInt(hourMinute[1], 10) -
                               60_000 * Number.parseInt(hourMinute[2], 10);
    }
    if (null !== minute) {
        return Date.now() - 60_000 * Number.parseInt(minute[1], 10);
    }
    if (null !== dateMonth) {
        const now = new Date();
        const date = Number.parseInt(dateMonth[1], 10);
        const month = MONTHS.indexOf(dateMonth[2]);
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
    return null;
};

export const Scraper = class {

    constructor({ filters = {}, icon }) {
        this.filters = { ...DEFAULT_FILTERS, ...filters };
        this.icon    = icon;
    }

    async extract(max) {
        const body = new URLSearchParams();
        body.append("_token", await getToken());
        for (const [name, value] of Object.entries(this.filters)) {
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
        const selector = `article.thread:nth-child(-n+${max})`;
        return Array.from(doc.querySelectorAll(selector))
                    .map((article) => ({
            price: article.querySelector(".thread-price").textContent,
            title: article.querySelector(".thread-title").textContent,
            link:  article.querySelector(".thread-link").href,
            img:   article.querySelector(".thread-image").src,
            ago:   article.querySelector(".threadGrid-headerMeta" +
                                         ".hide--fromW3:last-of-type")
                                                                   .textContent,
        })).map((item) => ({
            date:  extractDate(item.ago),
            guid:  item.link,
            icon:  this.icon,
            img:   item.img,
            link:  item.link,
            title: ("" === item.price ? "" : item.price + " / ") + item.title,
        }));
    }
};
