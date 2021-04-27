import React from "react";
import {connect} from "react-redux";
import {fetchPopularMovie} from "../../reducer/popular-movie-reducer";
import { localeAuth } from '../../reducer/auth-reducer';
import Content from "../content";

const PopularMoviePage = ({popular_movie, fetchPopularMovie, localeAuth}) => {

    return (
        <Content 
            path="movie"
            datas={popular_movie}
            title="Популярные фильмы"
            getData={fetchPopularMovie}
            localeAuth={localeAuth}
        />
    )
};

const mapStateToProps = (state) => {

    return {
        popular_movie: state.popular_movie
    }
};

export default connect(mapStateToProps, {fetchPopularMovie, localeAuth})(PopularMoviePage);