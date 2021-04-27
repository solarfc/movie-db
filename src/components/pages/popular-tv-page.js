import React from "react";
import {connect} from "react-redux";
import Content from "../content";
import {fetchPopularTV} from "../../reducer/popular-tv-reducer";

const TopTvPage = ({popular_tv, fetchPopularTV}) => {

    return (
        <Content path="tv"
                 datas={popular_tv}
                 title="Топ серилаы"
                 getData={fetchPopularTV}/>
    )
};

const mapStateToProps = state => {

    return {
        popular_tv: state.popular_tv
    }
};

export default connect(mapStateToProps, {fetchPopularTV})(TopTvPage);