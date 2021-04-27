import React, {useEffect} from "react";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchMovieDetail, fetchTVDetail} from "../../reducer/detail-reducer";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ItemDetail from "../item-detail";

const DetailPage = ({match: {params: {id}}, path, detail: {loading, error, data}, fetchTVDetail, fetchMovieDetail}) => {

    useEffect(() => {
        if(path === 'movie') {
            fetchMovieDetail(id);
        } else {
            fetchTVDetail(id);
        }
    }, []);

    const isLoading = loading ? <Spinner /> : null;
    const isError = error ? <ErrorIndicator /> : null;
    const content = !(loading || error) ?
        <ItemDetail data={data} /> :
        null;

    return (
        <>
            {isLoading}
            {isError}
            {content}
        </>
    )
};

const mapStateToProps = state => {
    return {
        detail: state.detail
    }
};

export default compose(withRouter, connect(mapStateToProps, {fetchTVDetail, fetchMovieDetail}))(DetailPage)