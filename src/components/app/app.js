import "./app.css";
import React, { useEffect } from "react";
import Header from "../header";
import {Route, Switch} from "react-router-dom";
import {PopularMoviePage, TopMoviePage, PopularTvPage, TopTvPage, DetailPage} from "../pages";
import { connect } from "react-redux";
import { localeAuth } from '../../reducer/auth-reducer'

const App = ({auth: {auth}, localeAuth}) => {
    console.log(auth);

    useEffect(() => {
        const value = localStorage.getItem('auth');
        if(value !== null) {
            localeAuth(value);
        }
    }, []);

    if(auth === 'false') {
        return (
            <div>
                <h2>You not authoraized</h2>
                <button onClick={() => {
                    localStorage.setItem('auth', 'true');
                    localeAuth('true');
                }}>Auth</button>
            </div>
        )
    }

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

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, {localeAuth})(App);