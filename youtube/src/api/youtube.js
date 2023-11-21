import axios from "axios";

export default class Youtube {
    constructor(){
        // 기본적으로 사용하느 url과 key를 설정
        this.httpClient = axios.create({
            baseURL: 'https://youtube.googleapis.com/youtube/v3',
            params: { key: process.env.REACT_APP_YOUTUBE_API_KEY }
        })
    }

    async search(keyword) {
        return keyword ? this.#searchByKeyowrd(keyword) : this.#mostPopular();
    }

    async #searchByKeyowrd(keyword) {
        return this.httpClient.get('search', {
            params: {
                part: 'snippet',
                maxResults: 25,
                type: 'video',
                q: keyword,
            },
        })
        .then(res => res.data.items)
        .then((items) => items.map(item => ({ ...item, id: item.id.videoId })));
    }

    async #mostPopular() {
        return this.httpClient.get('videos', {
            params: {
                part: 'snippet',
                maxResults: 25,
                chart: 'mostPopular',
            },
        })
        .then(res => res.data.items)
    }
}