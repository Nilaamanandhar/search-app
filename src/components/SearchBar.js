import React, { useState } from "react";
const SearchBar = (props) => {
  const [searchText, setSearchText] = useState();
  const searchTextHandler = () => {
    props.searchCountry(searchText);
  };
  return (
    <div className="search-bar">
      <input
        name="isGoing"
        type="text"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        onKeyUp ={(e)=> {if(e.keyCode === 13){
          searchTextHandler();
        }}}
        placeholder="Search Country"
      />
      <div
        onClick={() => searchTextHandler()}
        className="btn-wrapper"
      >
        search
      </div>
    </div>
  );
};
export default SearchBar;