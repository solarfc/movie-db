import "./paginator.scss";
import React from "react";
import Pagination from "react-js-pagination";
import { useHistory, useLocation } from "react-router-dom";

const Paginator = ({page, search, total_pages, getData}) => {

    const history = useHistory();
    const location = useLocation();

    const handlePageChange = (pageNumber) => {
        if(pageNumber !== page) {
            getData(pageNumber, search);
            history.push(`${location.pathname}?page=${pageNumber}`);
        }
    };

    return (
        <Pagination prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                    activePage={page}
                    pageRangeDisplayed={10}
                    totalItemsCount={total_pages * 10}
                    onChange={handlePageChange.bind(this)} />
    )
};

export default Paginator;