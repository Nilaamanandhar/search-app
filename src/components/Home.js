import React, { useState } from "react";
import SearchBar from "./SearchBar";
import List from "./List";
const Home = () => {
  const [searchedCountry, setSearchedCountry] = useState("");
  const searchTextHandler = (value) => {
    setSearchedCountry(value);
  };
  return (
    <div className="home-wrapper">
      <SearchBar searchCountry={(value) => searchTextHandler(value)} />
      <List recentlySearch={searchedCountry} />
    </div>
  );
};
export default Home;