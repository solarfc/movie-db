import React from "react";
import {fetchTopTV} from "../../reducer/top-tv-reducer";
import {connect} from "react-redux";
import Content from "../content";

const TopTvPage = ({top_tv, fetchTopTV}) => {

    return (
        <Content path="tv"
                 datas={top_tv}
                 title="Топ серилаы"
                 getData={fetchTopTV}/>
    )
};

const mapStateToProps = state => {

    return {
        top_tv: state.top_tv
    }
};

export default connect(mapStateToProps, {fetchTopTV})(TopTvPage);