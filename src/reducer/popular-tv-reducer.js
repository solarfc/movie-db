import {tvApi} from "../service/service";
import {fetch, updateState} from "../actions/actions";

const TOGGLE_LOADING = 'popular_tv/TOGGLE_LOADING';
const FETCH_POPULAR_TV_FAILURE = 'popular_tv/FETCH_POPULAR_TV_FAILURE';
const FETCH_POPULAR_TV_LIST = 'popular_tv/FETCH_POPULAR_TV_LIST';

const initialState = {
    loading: true,
    error: false,
    data: [],
    page: 1,
    total_pages: null
};

export const fetchPopularTV = (page) => (dispatch) => {
    fetch(dispatch,
        tvApi.getPopularTVList,
        page,
        undefined,
        TOGGLE_LOADING,
        FETCH_POPULAR_TV_FAILURE,
        FETCH_POPULAR_TV_LIST);
};

const popularTVReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {...state, loading: action.payload};
        case FETCH_POPULAR_TV_FAILURE:
            return {...state, error: action.payload};
        case FETCH_POPULAR_TV_LIST:
            return updateState(state, action);
        default:
            return state;
    }
};

export default popularTVReducer;