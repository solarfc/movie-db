import React from "react";
import {connect} from "react-redux";
import {fetchPopularMovie} from "../../reducer/popular-movie-reducer";
import Content from "../content";

const PopularMoviePage = ({popular_movie, fetchPopularMovie}) => {

    return (
        <Content path="movie"
                 datas={popular_movie}
                 title="Популярные фильмы"
                 getData={fetchPopularMovie}/>
    )
};

const mapStateToProps = (state) => {

    return {
        popular_movie: state.popular_movie
    }
};

export default connect(mapStateToProps, {fetchPopularMovie})(PopularMoviePage);