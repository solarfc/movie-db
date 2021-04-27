import {tvApi} from "../service/service";
import {fetch, updateState} from "../actions/actions";

const TOGGLE_LOADING = 'top_tv/TOGGLE_LOADING';
const FETCH_TOP_TV_FAILURE = 'top_tv/FETCH_TOP_TV_FAILURE';
const FETCH_TOP_TV_LIST = 'top_tv/FETCH_TOP_TV_LIST';

const initialState = {
  loading: true,
  error: false,
  data: [],
  page: 1,
  total_pages: null
};

export const fetchTopTV = (page) => (dispatch) => {
    fetch(dispatch,
        tvApi.getTopTVList,
        page,
        undefined,
        TOGGLE_LOADING,
        FETCH_TOP_TV_FAILURE,
        FETCH_TOP_TV_LIST);
};

const topTVReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_LOADING:
            return {...state, loading: action.payload};
        case FETCH_TOP_TV_FAILURE:
            return {...state, error: action.payload};
        case FETCH_TOP_TV_LIST:
            return updateState(state, action);
        default:
            return state;
    }
};

export default topTVReducer;