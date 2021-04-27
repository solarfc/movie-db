import {movieAPI, tvApi} from "../service/service";

const TOGGLE_LOADING = 'detail/TOGGLE_LOADING';
const FETCH_DETAIL_FAILURE = 'detail/FETCH_DETAIL_FAILURE';
const FETCH_DETAIL_LIST = 'detail/FETCH_DETAIL_LIST';

const initialState = {
    loading: true,
    error: false,
    data: [],
    page: 1,
    total_pages: null
};

const toggleLoading = (loading) => {
    return {
        type: TOGGLE_LOADING,
        payload: loading
    }
};

const fetchError = (error) => {
    return {
        type: TOGGLE_LOADING,
        payload: error
    }
};

const fetchData = (data) => {
    return {
        type: FETCH_DETAIL_LIST,
        payload: data
    }
};

const fetch = async (dispatch, id, method)  => {
    dispatch(toggleLoading(true));
    let data = await method(id);
    if(data.status === 200) {
        dispatch(fetchData(data.data));
        dispatch(toggleLoading(false));
    } else {
        dispatch(fetchError(true));
    }
}

export const fetchMovieDetail = (id) => (dispatch) => {
   fetch(dispatch, id, movieAPI.getMovieDetail);
};

export const fetchTVDetail = (id) => (dispatch) => {
    fetch(dispatch, id, tvApi.getTVDetail);
};

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {...state, loading: action.payload};
        case FETCH_DETAIL_FAILURE:
            return {...state, error: action.payload};
        case FETCH_DETAIL_LIST:
            return {...state, data: action.payload};
        default:
            return state;
    }
};

export default detailReducer;