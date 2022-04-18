import React, { useState } from "react";
const SearchBar = (props) => {
  const [searchText, setSearchText] = useState();
  const searchTextHandler = () => {
    console.log("eventer", searchText);
    props.searchMovie(searchText);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <input
        style={{ border: "1px solid black", height: "50px", width: "50vw" }}
        name="isGoing"
        type="text"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <div
        onClick={() => searchTextHandler()}
        style={{ border: "1px solid black", width: "auto" }}
      >
        search
      </div>
    </div>
  );
};
export default SearchBar;
