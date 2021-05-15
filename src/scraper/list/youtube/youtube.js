/**
 * @module
 */

const API_URL = "https://www.googleapis.com/youtube/v3/";

export const Scraper = class {

    constructor({ user, playlist, key, complements }) {
        this._user = user;
        this._playlist = playlist;
        this._key = key;
        this._id = undefined;
        this._complements = complements;
    }

    async _findPlaylist(channelId, pageToken) {
        const url = API_URL + "playlists?part=id,snippet&channelId=" +
                    channelId + "&maxResults=50" +
                    (undefined === pageToken ? "" : "&pageToken=" + pageToken) +
                    "&key=" + this._key;
        const response = await fetch(url);
        const json = await response.json();
        for (const item of json.items) {
            if (this._playlist === item.snippet.title) {
                return item.id;
            }
        }
        if ("nextPageToken" in json) {
            return this._findPlaylist(channelId, json.nextPageToken);
        }
        throw new Error(this._playlist + " is not found");
    }

    async _init() {
        if (undefined !== this._id) {
            return this._id;
        }

        const url = API_URL + "channels?part=id,contentDetails" +
                    "&forUsername=" + this._user + "&maxResults=1&key=" +
                    this._key;
        const response = await fetch(url);
        const json = await response.json();
        if (undefined === this._playlist) {
            this._id = json.items[0].contentDetails.relatedPlaylists.uploads;
            return this._id;
        }
        return this._findPlaylist(json.items[0].id);
    }

    async extract(max) {
        const playlistId = await this._init();
        const url = API_URL + "playlistItems?key=" + this._key +
                    "&part=snippet&playlistId=" + playlistId +
                    "&maxResults=" + max;
        const response = await fetch(url);
        const json = await response.json();
        return json.items.map((item) => ({
            date:  new Date(item.snippet.publishedAt).getTime(),
            desc:  item.snippet.description,
            guid:  item.snippet.resourceId.videoId,
            img:   item.snippet?.thumbnails.high.url,
            link:  "https://www.youtube.com/watch?v=" +
                   item.snippet.resourceId.videoId,
            title: item.snippet.title,
        })).map((i) => ({ ...this._complements, ...i }));
    }
};
