import React from "react";
import Paginator from "../paginator";
import ItemList from "../item-list";

const ContentBlock = ({path, state, getData}) => {

    const {data, page, search, total_pages} = state;

    const isEmpty = data.length !== 0 ?
        <>
            <Paginator page={page}
                       search={search}
                       total_pages={total_pages}
                       getData={getData}/>
            <div className="content d-flex flex-wrap">
                {
                    data.map(item => <ItemList key={item.id} path={path} data={item}/>)
                }
                {/*<ItemList path={path} data={data}/>*/}
            </div>
            <Paginator page={page}
                       search={search}
                       total_pages={total_pages}
                       getData={getData}/>

        </> :
        <h1>No matching records found</h1>

    return (
        isEmpty
    )
};

export default ContentBlock;