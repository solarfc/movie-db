import * as axios from "axios";

const key = '00b43c1d9471d2db8019f416813a640c';

const instance = axios.create({
    baseURL : 'https://api.themoviedb.org/3/',
});

export const movieAPI = {
    getMovieList(page = 1, movie) {
        return instance.get(`search/movie?api_key=${key}&query=${movie}&page=${page}&language=ru_RU`)
            .then(res => res)
            .catch(error => error);
    },
    getPopularMovieList(page = 1) {
        return instance.get(`movie/popular/?api_key=${key}&page=${page}&language=ru-RU`)
            .then(res => res)
            .catch(error => error);
    },
    getTopMovieList(page = 1) {
        return instance.get(`movie/top_rated/?api_key=${key}&page=${page}&language=ru-RU`)
            .then(res => res)
            .catch(error => error);
    },
    getMovieDetail(id) {
        return instance.get(`movie/${id}?api_key=${key}&language=ru-RU`)
            .then(res => res)
            .catch(error => error);
    }
};

export const tvApi = {
    getTVList(page = 1, tv) {
        return instance.get(`search/tv/?api_key=${key}&query=${tv}&page=${page}&language=ru-RU`)
            .then(res => res);
    },
    getPopularTVList(page = 1) {
        return instance.get(`tv/popular/?api_key=${key}&page=${page}&language=ru-RU`)
            .then(res => res);
    },
    getTopTVList(page = 1) {
        return instance.get(`tv/top_rated/?api_key=${key}&page=${page}&language=ru-RU`)
            .then(res => res);
    },
    getTVDetail(id) {
        return instance.get(`tv/${id}?api_key=${key}&language=ru-RU`)
            .then(res => res)
            .catch(error => error);
    }
};

//
// axios.get('https://api.themoviedb.org/3/movie/top_rated/?api_key=00b43c1d9471d2db8019f416813a640c&page=1&language=ru-RU')
// .then(res => console.log(res));