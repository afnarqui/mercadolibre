import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';

import Details from '../components/views/Details';
import Products from '../components/views/Products';
import Search from '../components/views/Search';

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export const RouterComponent = () => {
    return (
        <Router history={history} >
            <div>
                <Search history={history} />
                <Switch>
                    <Route exact path="/items" component={ Products } /> 
                    <Route exact path="/items/:id" component={ Details } />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
