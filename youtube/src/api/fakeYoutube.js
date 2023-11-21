import axios from "axios";

export default class FakeYoutube {
    async search(keyword) {
        return keyword ? this.#searchByKeyowrd(keyword) : this.#mostPopular();
    }

    async #searchByKeyowrd() {
        return axios
          .get(`/videos/search.json`)
          .then(res => res.data.items)
          .then((items) => items.map(item => ({ ...item, id: item.id.videoId })));
    }

    async #mostPopular() {
        return axios.get(`/videos/popular.json`).then(res => res.data.items);
    }
}