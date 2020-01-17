import React from "react";
import "@vaadin/vaadin-text-field";

const App = () => (
  <div>
    <h1>BLOG SECTION</h1>
    <p>power by ReactJS</p>
    <a href="/">go to home</a>
    <br />
    <p>Test native component:</p>
    <vaadin-text-field label="Description" placeholder="Write here ..."></vaadin-text-field>
  </div>
);

export default App;
