import "./app.css";
import React from "react";
import Header from "../header";
import {Route, Switch} from "react-router-dom";
import {PopularMoviePage, TopMoviePage, PopularTvPage, TopTvPage, DetailPage} from "../pages";

const App = () => {

    return (
        <>
            <Header />
            <main role="main">
                <div className="container">
                    <Switch>
                        <Route exact path="/" render={() => {return <h1 className="text-center m-3">Welcome to The Movie DB</h1>}} />
                        <Route exact path="/popular-movie" render={() => <PopularMoviePage />} />
                        <Route exact path="/top-movie" render={() => <TopMoviePage />} />
                        <Route path="/movie/:id" render={() => <DetailPage path='movie'/>} />
                        <Route exact path="/popular-tv" render={() => <PopularTvPage />} />
                        <Route exact path="/top-tv" render={() => <TopTvPage />} />
                        <Route path="/tv/:id" render={() => <DetailPage path='tv'/>}/>
                    </Switch>
                </div>
            </main>
        </>
    )
};

export default App;