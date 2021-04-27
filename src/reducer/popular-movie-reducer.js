import {movieAPI} from "../service/service";
import {fetch, updateState} from "../actions/actions";

const TOGGLE_LOADING = 'popular_movie/TOGGLE_LOADING';
const FETCH_POPULAR_MOVIE_FAILURE = 'popular_movie/FETCH_POPULAR_MOVIE_FAILURE';
const FETCH_POPULAR_MOVIE_LIST = 'popular_movie/FETCH_POPULAR_MOVIE_LIST';

const initialState = {
    loading: true,
    error: false,
    data: [],
    page: 1,
    total_pages: null,
};

export const fetchPopularMovie = (page) => (dispatch) => {
    fetch(dispatch, movieAPI.getPopularMovieList, page, undefined, TOGGLE_LOADING, FETCH_POPULAR_MOVIE_FAILURE, FETCH_POPULAR_MOVIE_LIST);
};

const popularMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {...state, loading: action.payload};
        case FETCH_POPULAR_MOVIE_FAILURE:
            return {...state, error: action.payload};
        case FETCH_POPULAR_MOVIE_LIST:
            return updateState(state, action);
        default:
            return state;
    }
};

export default popularMovieReducer;