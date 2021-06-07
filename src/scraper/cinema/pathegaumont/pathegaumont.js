/**
 * @module
 */

const API_URL = "https://www.cinemaspathegaumont.com/api";

export default class {

    constructor({ cinema, versions, tags, complements }) {
        this._cinema   = cinema;
        this._versions = versions ?? ["vf", "vost", "vo", "vfst"];
        this._includes = tags.includes ?? [];
        this._excludes = tags.excludes ?? [];
        this._complements = complements;
    }

    _filter(showtime) {
        return "available" === showtime.status &&
               this._versions.includes(showtime.version) &&
               this._includes.every((t) => showtime.tags.includes(t)) &&
               !showtime.tags.some((t) => this._excludes.includes(t));
    }

    async extract(max) {
        let response = await fetch(`${API_URL}/cinema/${this._cinema}`);
        const { citySlug } = await response.json();

        response = await fetch(`${API_URL}/zone/${citySlug}`);
        const { shows } = await response.json();

        const today = new Date().toISOString().slice(0, 10);
        const promises = shows.map(async ({ slug }) => {
            let subresponse = await fetch(`${API_URL}/show/${slug}`);
            const { title } = await subresponse.json();

            subresponse = await fetch(`${API_URL}/show/${slug}/showtimes` +
                                      `/${this._cinema}/${today}`);
            const showtimes = await subresponse.json();
            const showings = showtimes.filter(this._filter.bind(this))
                                      .map((showtime) => ({
                title: showtime.time.slice(11, 16),
                link:  showtime.refCmd,
            }));
            return {
                title,
                link:  `https://www.cinemaspathegaumont.com/films/${slug}`,
                showings,
            };
        });

        const movies = await Promise.all(promises);
        return movies.filter((m) => 0 !== m.showings.length)
                     .slice(0, max)
                     .map((m) => ({ ...this._complements, ...m }));
    }
}
