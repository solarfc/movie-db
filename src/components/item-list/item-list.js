import "./item-list.scss";
import React from "react";
import poster from "../../assets/img/unnamed.jpg";
import {NavLink} from "react-router-dom";

const ItemList = ({path, data}) => {

    const {id, title, poster_path, original_name, original_title, release_date, first_air_date, vote_average} = data;
    const img = poster_path === null ?
        poster:
        `https://image.tmdb.org/t/p/w500/${poster_path}`;

    return(
        <div className="content__item col-lg-3 col-12 text-center mb-3">
            <div className="content__item-block">
                <img src={img} className="w-100" alt=""/>
                <h6>{title}</h6>
                <div className="content__item-block__filter">
                    <h6>Оригинальное название: <span>{original_title ? original_title : original_name}</span></h6>
                    <p className="date">Дата премьеры: <span>{release_date ? release_date : first_air_date}</span></p>
                    <p className="rating">Рейтинг: <span>{vote_average}</span></p>
                    <NavLink to={`/${path}/${id}`}>Подробнее</NavLink>
                </div>
            </div>
        </div>
    )
};
// const ItemList = ({path, data}) => {
//
//     return (
//         data.map(item => {
//             const {id, title, poster_path, original_name, original_title, release_date, first_air_date, vote_average} = item;
//             const img = poster_path === null ?
//                 poster:
//                 `https://image.tmdb.org/t/p/w500/${poster_path}`;
//
//             return(
//                 <div className="content__item col-lg-3 col-12 text-center mb-3" key={id}>
//                     <div className="content__item-block">
//                         <img src={img} className="w-100" alt=""/>
//                         <h6>{title}</h6>
//                         <div className="content__item-block__filter">
//                             <h6>Оригинальное название: <span>{original_title ? original_title : original_name}</span></h6>
//                             <p className="date">Дата премьеры: <span>{release_date ? release_date : first_air_date}</span></p>
//                             <p className="rating">Рейтинг: <span>{vote_average}</span></p>
//                             <NavLink to={`/${path}/${id}`}>Подробнее</NavLink>
//                         </div>
//                     </div>
//                 </div>
//             )
//         })
//     )
// };

export default ItemList;