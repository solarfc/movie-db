import {combineReducers} from "redux";
import popularMovieReducer from "./popular-movie-reducer";
import topMovieReducer from "./top-movie-reducer";
import topTVReducer from "./top-tv-reducer";
import popularTVReducer from "./popular-tv-reducer";
import detailReducer from "./detail-reducer";

const reducer = combineReducers({
    popular_movie: popularMovieReducer,
    top_movie: topMovieReducer,
    popular_tv: popularTVReducer,
    top_tv: topTVReducer,
    detail: detailReducer
});

export default reducer;