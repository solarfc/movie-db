import React, {useEffect} from "react";
import {useLocation} from "react-router-dom";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";
import ContentBlock from "./content-block";

const Content = ({path, datas, title, getData, localeAuth}) => {

    const {loading, error} = datas;

    const location = useLocation();

    useEffect(() => {
        document.title = title;
        if(location.search.length === 0) {
            getData(1);
        } else {
            let page = location.search.slice(location.search.indexOf('=') + 1);
            getData(page);
        }
    }, []);

    const isLoading = loading ? <Spinner /> : null;
    const isError = error ? <ErrorIndicator /> : null;
    const content = !(loading || error) ?
        <ContentBlock
            path={path}
            state={datas}
            getData={getData}
            localeAuth={localeAuth} 
        /> :
        null;

    return (
        <>
            {isLoading}
            {isError}
            {content}
        </>

    )
};

export default Content;