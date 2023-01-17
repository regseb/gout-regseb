/**
 * @module
 */

const API_URL = "https://www.pathe.fr/api";

export default class Pathe {

    #cinema;

    #versions;

    #includes;

    #excludes;

    #complements;

    constructor({ cinema, versions, tags, complements }) {
        this.#cinema = cinema;
        this.#versions = versions ?? ["vf", "vost", "vo", "vfst"];
        this.#includes = tags?.includes ?? [];
        this.#excludes = tags?.excludes ?? [];
        this.#complements = complements;
    }

    #filter(showtime) {
        return "available" === showtime.status &&
               this.#versions.includes(showtime.version) &&
               this.#includes.every((t) => showtime.tags.includes(t)) &&
               !showtime.tags.some((t) => this.#excludes.includes(t));
    }

    async extract(max = Number.MAX_SAFE_INTEGER) {
        const response = await fetch(`${API_URL}/cinema/${this.#cinema}/shows`);
        const { shows } = await response.json();

        const today = new Date().toISOString().slice(0, 10);
        const promises = Object.entries(shows)
                               .filter(([, s]) => today in s.days)
                               .map(async ([slug]) => {
            let subresponse = await fetch(`${API_URL}/show/${slug}`);
            const { title } = await subresponse.json();

            subresponse = await fetch(`${API_URL}/show/${slug}/showtimes` +
                                      `/${this.#cinema}/${today}`);
            const showtimes = await subresponse.json();
            const showings = showtimes.filter(this.#filter.bind(this))
                                      .map((showtime) => {
                const tags = showtime.tags.filter((t) => "DEFAULT" !== t);
                return {
                    // Récupérer l'heure et les minutes de la date de la séance.
                    title: showtime.time.slice(11, 16),
                    link:  showtime.refCmd,
                    desc:  showtime.version.toUpperCase() +
                           (0 === tags.length ? ""
                                              : ` (${tags.join(", ")})`),
                };
            });

            return {
                title,
                link: `https://www.pathe.fr/films/${slug}`,
                showings,
            };
        });

        const movies = await Promise.all(promises);
        return movies.filter((m) => 0 !== m.showings.length)
                     .slice(0, max)
                     .map((m) => ({ ...this.#complements, ...m }));
    }
}
