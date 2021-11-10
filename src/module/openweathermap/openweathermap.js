/**
 * @module
 */

import Cron from "https://cdn.jsdelivr.net/npm/cronnor@1";

/**
 * Résous un chemin relatif à partir du module.
 *
 * @param {string} specifier Le chemin relatif vers un fichier.
 * @returns {string} L'URL absolue vers le fichier.
 * @see https://github.com/whatwg/html/issues/3871
 */
const resolve = function (specifier) {
    return new URL(specifier, import.meta.url).href;
};

const API_URL = "https://api.openweathermap.org/data/2.5/";

const COMPASS_ROSE = [
    [22.5,  "nord"],
    [67.5,  "nord-est"],
    [112.5, "est"],
    [157.5, "sud-est"],
    [202.5, "sud"],
    [247.5, "sud-ouest"],
    [292.5, "ouest"],
    [337.5, "nord-ouest"],
    [360,   "nord"],
];

const extract = async function (city, appid, kind) {
    // Si c'est la météo du jour qui est demandée.
    if ("weather" === kind) {
        const response = await fetch(`${API_URL}weather?q=${city}` +
                                     `&units=metrics&lang=fr&APPID=${appid}`);
        const json = await response.json();
        return {
            icon: json.weather[0].icon,
            desc: json.weather[0].description,
            help: json.weather[0].main,
            temp: {
                min: Math.round(json.main["temp_min"] - 273.15),
                max: Math.round(json.main["temp_max"] - 273.15),
            },
            wind: {
                speed: Math.round(json.wind.speed * 3.6),
                deg:   json.wind.deg + 360 % 360,
            },
        };
    }
    // Sinon : c'est les prévisions.
    const response = await fetch(`${API_URL}forecast/daily?q=${city}` +
                                 "&units=metrics&lang=fr&cnt=2" +
                                 `&APPID=${appid}`);
    const json = await response.json();
    return json.list.map((item) => ({
        icon: item.weather[0].icon,
        desc: item.weather[0].description,
        help: item.weather[0].main,
        temp: {
            min: Math.round(item.temp.min - 273.15),
            max: Math.round(item.temp.max - 273.15),
        },
        wind: {
            speed: Math.round(item.speed * 3.6),
            deg:   item.deg + 360 % 360,
        },
    }));
};

export default class extends HTMLElement {

    #config;

    #cron;

    #city;

    #appid;

    constructor(config) {
        super();
        this.#config = config;
    }

    #display(item) {
        const li = this.shadowRoot.querySelector("template")
                                  .content.querySelector("li")
                                  .cloneNode(true);

        const date = new Date();
        date.setDate(date.getDate() +
                     this.shadowRoot.querySelectorAll("li").length);
        const strong = li.querySelector("p:first-of-type strong");
        strong.textContent = date.toLocaleString("fr-FR", { weekday: "long" });

        let img = li.querySelector("p:first-of-type img");
        img.src = resolve(`./img/${item.icon}.svg`);
        img.alt = item.desc;
        img.title = item.help;
        img.width = 32;
        img.height = 32;

        li.querySelector("span.temp").textContent =
                                  item.temp.min + " / " + item.temp.max + " °C";

        const dir = COMPASS_ROSE.find((c) => c[0] > item.wind.deg)[1];
        img = li.querySelector(".wind img");
        img.src = resolve("./img/wind.svg");
        img.alt = "^";
        img.title = dir;
        img.style = "transform: rotate(" + item.wind.deg + "deg)";

        li.querySelector("span.wind").append(item.wind.speed + " km/h");

        const ul = this.shadowRoot.querySelector("ul");
        ul.append(li);
    }

    async #update() {
        // Si la page est cachée : ne pas actualiser les données et indiquer
        // qu'il faudra mettre à jour les données quand l'utilisateur reviendra
        // sur la page.
        if (document.hidden) {
            this.#cron.stop();
            return;
        }

        this.shadowRoot.querySelector("ul").replaceChildren();

        // Récupérer la météo du jour.
        const weather = await extract(this.#city, this.#appid, "weather");
        this.#display(weather);

        // Récupérer les prévisions.
        const forecasts = await extract(this.#city, this.#appid, "forecast");
        forecasts.forEach(this.#display.bind(this));
    }

    #wake() {
        if (!this.#cron.active) {
            this.#cron.start();
            this.#update();
        }
    }

    async connectedCallback() {
        const response = await fetch(resolve("./openweathermap.tpl"));
        const text = await response.text();
        const template = new DOMParser().parseFromString(text, "text/html")
                                        .querySelector("template");

        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(template.content.cloneNode(true));

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = resolve("./openweathermap.css");
        this.shadowRoot.append(link);

        this.#cron = new Cron(this.#config.cron ?? "@hourly",
                              this.#update.bind(this));
        this.#city = this.#config.city;
        this.#appid = this.#config.appid;

        this.style.backgroundColor = this.#config.color ?? "#03a9f4";
        this.shadowRoot.querySelector("h1").textContent =
                                 this.#config.title ?? this.#city.split(",")[0];

        document.addEventListener("visibilitychange", this.#wake.bind(this));
        this.#update();
    }
}
