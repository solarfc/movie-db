import {movieAPI} from "../service/service";
import {fetch, updateState} from "../actions/actions";

const TOGGLE_LOADING = 'top_movie/TOGGLE_LOADING';
const FETCH_TOP_MOVIE_FAILURE = 'top_movie/FETCH_TOP_MOVIE_FAILURE';
const FETCH_TOP_MOVIE_LIST = 'top_movie/FETCH_TOP_MOVIE_LIST';

const initialState = {
    loading: true,
    error: false,
    data: [],
    page: 1,
    total_pages: null,
};

export const fetchTopMovie = (page) => (dispatch) => {
    fetch(dispatch,
        movieAPI.getTopMovieList,
        page,
        undefined,
        TOGGLE_LOADING,
        FETCH_TOP_MOVIE_FAILURE,
        FETCH_TOP_MOVIE_LIST);
};

const topMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {...state, loading: action.payload};
        case FETCH_TOP_MOVIE_FAILURE:
            return {...state, error: action.payload};
        case FETCH_TOP_MOVIE_LIST:
            return updateState(state, action);
        default:
            return state;
    }
};

export default topMovieReducer;