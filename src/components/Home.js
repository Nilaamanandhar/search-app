import React, { useState } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
const Home = () => {
  const [searchedMovie, setSearchedMovie] = useState("");
  const searchTextHandler = (value) => {
    setSearchedMovie(value);
  };
  return (
    <div>
      <SearchBar searchMovie={(value) => searchTextHandler(value)} />
      <List recentlySearch={searchedMovie} />
    </div>
  );
};
export default Home;
