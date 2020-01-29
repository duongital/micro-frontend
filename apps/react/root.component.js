import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import PageHome from "./pages/PageHome";
import PageAbout from "./pages/PageAbout";
import PageDashboard from "./pages/PageDashboard";

const App = () => (
  <div>
    <Router>
      <div>
        <ul className="my-12 text-center">
          <li>
            <Link to="/react/home">Home</Link>
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
  </div>
);

export default App;