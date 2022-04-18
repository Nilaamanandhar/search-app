import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const List = (props) => {
  console.log("props", props);
  let arrays = ["nilaa", "praful", "pratima", "sayami"];
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    console.log("arra", arrays, props);
    const array1 = arrays.filter((item) => {
      if (item.includes(props.recentlySearch)) {
        return item;
      }
    });
    setMovieList(array1);
    console.log("arrays", array1);
  }, [props.recentlySearch]);
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {console.log("movie", movieList)}
      {movieList.length > 0 &&
        movieList.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: "auto",
                cursor: "pointer",
              }}
            >
              <Link to="/moviedetail">{item}</Link>
            </div>
          );
        })}
    </div>
  );
};
export default List;
