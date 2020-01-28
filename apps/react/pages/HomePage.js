import React from "react";
import Editor from "../components/Editor";
import logo from "../images/2.jpg";

const HomePage = () => {
  return (
    <div className="text-center">
      <h1>BLOG SECTION</h1>
      <p>power by ReactJS</p>
      <p className="mt-12">Test render image:</p>
      <img className="w-1/4 m-auto" src={logo} />

      <br />
      <a href="/">
        <button className="btn btn-blue mr-4"> Go Home </button>
      </a>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tailwind Button
      </button>

      <Editor />
    </div>
  );
}

export default HomePage;
