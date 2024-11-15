/**
 * @module
 * @license MIT
 * @author Sébastien Règne
 */

import Cron from "https://esm.sh/cronnor@2";

// Ne pas basculer sur la version 3.0, car elle nécessite une carte bancaire
// pour activer l'API (même si 1000 appels journaliers sont gratuits).
const API_URL = "https://api.openweathermap.org/data/2.5/";

const COMPASS_ROSE = [
    [22.5, "nord"],
    [67.5, "nord-est"],
    [112.5, "est"],
    [157.5, "sud-est"],
    [202.5, "sud"],
    [247.5, "sud-ouest"],
    [292.5, "ouest"],
    [337.5, "nord-ouest"],
    [360, "nord"],
];

const extractWeather = async function (city, appid) {
    const response = await fetch(
        `${API_URL}weather?q=${city}&units=metric&lang=fr&APPID=${appid}`,
    );
    const json = await response.json();
    return {
        icon: json.weather[0].icon,
        desc: json.weather[0].description,
        help: json.weather[0].main,
        temp: {
            min: Math.round(json.main["temp_min"]),
            max: Math.round(json.main["temp_max"]),
        },
        wind: {
            // Convertir des mètres par seconde en kilomètres par heure.
            speed: Math.round(json.wind.speed * 3.6),
            // Décaler de 360 pour éviter les angles négatifs.
            deg: json.wind.deg + (360 % 360),
        },
    };
};

const extractForecasts = async function (city, appid, max) {
    if (0 === max) {
        return [];
    }
    const response = await fetch(
        `${API_URL}forecast/daily?q=${city}&units=metric&lang=fr&cnt=${max}` +
            `&APPID=${appid}`,
    );
    const json = await response.json();
    return json.list.map((item) => ({
        icon: item.weather[0].icon,
        desc: item.weather[0].description,
        help: item.weather[0].main,
        temp: {
            min: Math.round(item.temp.min),
            max: Math.round(item.temp.max),
        },
        wind: {
            // Convertir des mètres par seconde en kilomètres par heure.
            speed: Math.round(item.speed * 3.6),
            // Décaler de 360 pour éviter les angles négatifs.
            deg: item.deg + (360 % 360),
        },
    }));
};

export default class OpenWeatherMapModule extends HTMLElement {
    #options;

    #cron;

    #city;

    #appid;

    #max;

    constructor(options) {
        super();
        this.#options = options;
    }

    #display(item) {
        const li = this.shadowRoot
            .querySelector("template")
            .content.querySelector("li")
            .cloneNode(true);

        const date = new Date();
        date.setDate(
            date.getDate() + this.shadowRoot.querySelectorAll("li").length,
        );
        const strong = li.querySelector("p:first-of-type strong");
        strong.textContent = date.toLocaleString("fr-FR", { weekday: "long" });

        let img = li.querySelector("p:first-of-type img");
        img.src = import.meta.resolve(`./img/${item.icon}.svg`);
        img.alt = item.desc;
        img.title = item.help;
        img.width = 32;
        img.height = 32;

        img = li.querySelector(".temp img");
        img.src = import.meta.resolve("./img/temp.svg");

        li.querySelector("span.temp").append(
            `${item.temp.min} / ${item.temp.max}  °C`,
        );

        const dir = COMPASS_ROSE.find((c) => c[0] > item.wind.deg)[1];
        img = li.querySelector(".wind img");
        img.src = import.meta.resolve("./img/wind.svg");
        img.title = dir;
        img.style = `transform: rotate(${item.wind.deg}deg)`;

        li.querySelector("span.wind").append(`${item.wind.speed} km/h`);

        const ul = this.shadowRoot.querySelector("ul");
        ul.append(li);
    }

    async #update(force = false) {
        // Si la page est cachée : ne pas actualiser les données et indiquer
        // qu'il faudra mettre à jour les données quand l'utilisateur reviendra
        // sur la page.
        if (document.hidden && !force) {
            this.#cron.stop();
            return;
        }

        // Récupérer la météo du jour et les prévisions.
        const weather = await extractWeather(this.#city, this.#appid);
        const forecasts = await extractForecasts(
            this.#city,
            this.#appid,
            this.#max,
        );

        // Remplacer les données affichées.
        this.shadowRoot.querySelector("ul").replaceChildren();
        this.#display(weather);
        forecasts.forEach(this.#display.bind(this));
    }

    async #wake() {
        if (!this.#cron.active) {
            this.#cron.start();
            await this.#update();
        }
    }

    async connectedCallback() {
        const response = await fetch(
            import.meta.resolve("./openweathermap.tpl"),
        );
        const text = await response.text();
        const template = new DOMParser()
            .parseFromString(text, "text/html")
            .querySelector("template");

        this.attachShadow({ mode: "open" });
        this.shadowRoot.append(template.content.cloneNode(true));

        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = import.meta.resolve("./openweathermap.css");
        this.shadowRoot.append(link);

        this.#city = this.#options.city;
        this.#appid = this.#options.appid;
        // Enlever 1 qui correspond à la météo du jour et garder le nombre de
        // prévisions dans la variable #max.
        this.#max = (this.#options.max ?? 1) - 1;

        this.style.backgroundColor = this.#options.color ?? "#03a9f4";
        this.shadowRoot.querySelector("h1").textContent =
            this.#options.title ?? this.#city.split(",")[0];

        this.#cron = new Cron(
            this.#options.cron ?? "@hourly",
            this.#update.bind(this),
        );
        document.addEventListener("visibilitychange", this.#wake.bind(this));
        await this.#update(true);
    }
}
