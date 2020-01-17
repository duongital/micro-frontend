import React from "react";
import "@vaadin/vaadin-text-field";
import "../design-system/index.css";
import logo from "./images/2.jpg";

const App = () => (
  <div>
    <h1>BLOG SECTION</h1>
    <p>power by ReactJS</p>
    <img className="w-1/4" src={ logo } />
    <a href="/">go to home</a>
    <br />
    <p>Test native component:</p>
    <vaadin-text-field
      label="Description"
      placeholder="Write here ..."
    ></vaadin-text-field>
    <br />
    <button className="btn btn-blue mr-4">Tailwind Button</button>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Button
    </button>
  </div>
);

export default App;
