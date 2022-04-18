import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCountriesList } from "../respositories/countries";
const List = (props) => {
  console.log("props", props);
  let arrays = ["nilaa", "praful", "pratima", "sayami"];
  const [countriesList, setCountriesList] = useState([]);
  useEffect(() => {
    const array1 = arrays.filter((item) => {
      if (item.includes(props.recentlySearch)) {
        return item;
      }
    });
    setCountriesList(array1);

  }, [props.recentlySearch]);

  useEffect(() =>{
    async function showListCountry(){
      const listOfCountries= await getCountriesList();
      console.log("listy",listOfCountries);
    }
    showListCountry();

  },[])
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {countriesList.length > 0 &&
        countriesList.map((item, index) => {
          return (
            <div
              key={index}
            className="card-item"
            >
              <Link to="/countrydetail">{item}</Link>
            </div>
          );
        })}
    </div>
  );
};
export default List;
