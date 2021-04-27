import React from "react";
import {connect} from "react-redux";
import {fetchTopMovie} from "../../reducer/top-movie-reducer";
import Content from "../content";

const TopMoviePage = ({top_movie, fetchTopMovie}) => {

    return (
        <Content path="movie"
                 datas={top_movie}
                 title="Топ фильмы"
                 getData={fetchTopMovie} />
    )
};

const mapStateToProps = state => {

    return {
        top_movie: state.top_movie
    }
};

export default connect(mapStateToProps, {fetchTopMovie})(TopMoviePage);