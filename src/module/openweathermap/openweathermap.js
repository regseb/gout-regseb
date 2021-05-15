/**
 * @module
 */

import { Cron } from "https://cdn.jsdelivr.net/npm/cronnor@1";

const BASE_URL = import.meta.url.slice(0, import.meta.url.lastIndexOf("/") + 1);

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

export const Module = class extends HTMLElement {

    constructor(config, scrapers) {
        super();
        this._config   = config;
        this._scrapers = scrapers;
    }

    display(item) {
        const li = this.shadowRoot.querySelector("template")
                                  .content.querySelector("li")
                                  .cloneNode(true);

        const date = new Date();
        date.setDate(date.getDate() +
                     this.shadowRoot.querySelectorAll("li").length);
        const strong = li.querySelector("p:first-of-type strong");
        strong.textContent = date.toLocaleString("fr-FR", { weekday: "long" });

        let img = li.querySelector("p:first-of-type img");
        img.src = BASE_URL + "img/" + item.icon + ".svg";
        img.alt = item.desc;
        img.title = item.help;
        img.width = 32;
        img.height = 32;

        li.querySelector("span.temp").textContent =
                                  item.temp.min + " / " + item.temp.max + " °C";

        const dir = COMPASS_ROSE.find((c) => c[0] > item.wind.deg)[1];
        img = li.querySelector(".wind img");
        img.src = BASE_URL + "img/wind.svg";
        img.alt = "^";
        img.title = dir;
        img.style = "transform: rotate(" + item.wind.deg + "deg)";

        li.querySelector("span.wind").append(item.wind.speed + " km/h");

        const ul = this.shadowRoot.querySelector("ul");
        ul.append(li);
    }

    async update() {
        // Si la page est cachée : ne pas actualiser les données et indiquer
        // qu'il faudra mettre à jour les données quand l'utilisateur reviendra
        // sur la page.
        if (document.hidden) {
            this._cron.stop();
            return;
        }

        const ul = this.shadowRoot.querySelector("ul");
        while (null !== ul.firstChild) {
            ul.firstChild.remove();
        }

        // Récupérer la météo du jour.
        const weather = await extract(this._city, this._appid, "weather");
        this.display(weather);

        // Récupérer les prévisions.
        const forecasts = await extract(this._city, this._appid, "forecast");
        forecasts.forEach(this.display.bind(this));
    }

    wake() {
        if (!this._cron.active) {
            this._cron.start();
            this.update();
        }
    }

    async connectedCallback() {
        this.attachShadow({ mode: "open" });

        const response = await fetch(BASE_URL + "openweathermap.tpl");
        const text = await response.text();
        const template = new DOMParser().parseFromString(text, "text/html")
                                        .querySelector("template");
        this.shadowRoot.append(template.content.cloneNode(true));

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = BASE_URL + "openweathermap.css";
        this.shadowRoot.append(link);

        this._cron = new Cron(this._config.cron ?? "@hourly",
                              this.update.bind(this));
        this._city = this._config.city;
        this._appid = this._config.appid;

        this.style.backgroundColor = this._config.color ?? "#03a9f4";
        this.shadowRoot.querySelector("h1").textContent =
                                 this._config.title ?? this._city.split(",")[0];

        document.addEventListener("visibilitychange", this.wake.bind(this));
        this.update();
    }
};
