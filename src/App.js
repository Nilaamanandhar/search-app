import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import  MovieDetail from "./components/MovieDetail";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./components/Home";

function App() {

  return (
    <Router>
    <div

      className="main-wrapper"
    >
      {/* <SearchBar searchMovie={(value) => searchTextHandler(value)} />
      <List recentlySearch={searchedMovie} /> */}

      <Routes>
        <Route  path="/" element={<Home />} />
        <Route  path="/moviedetail" element={<MovieDetail />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
