import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from "react-redux";

import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageDashboard from "./pages/PageDashboard";

import allReducer from './store/reducers';

// STORE
let store = createStore(
  allReducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => (
  <Provider store={ store }>
    <Router>
      <div>
        <ul className="my-12 text-center">
          <li>
            <a href="/">Page Micro Frontend</a>
          </li>
          <li>
            <Link to="/react/home">Page Home</Link>
          </li>
          <li>
            <Link to="/react/about">About</Link>
          </li>
          <li>
            <Link to="/react/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route path="/react/home">
            <PageHome />
          </Route>
          <Route path="/react/about">
            <PageAbout />
          </Route>
          <Route path="/react/dashboard">
            <PageDashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
