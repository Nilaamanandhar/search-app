import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { getCountriesList } from "../respositories/countries";
import { addCountryList,searchCountryList } from "../store/countryListSlice";
const List = (props) => {
  const countriesOfList = useSelector((state) => state.countryList.countryList)
  const dispatch = useDispatch()
  const[count,setCount]=useState(1);
  const[paginationCount,setPaginationCount]=useState(10);


  useEffect(() => {
    const array1 = countriesOfList.filter((item) => {
      if (item.name.common.toLowerCase().includes(props.recentlySearch.toLowerCase())) {
        return item;
      }
    });
    dispatch(searchCountryList(array1));

  }, [props.recentlySearch]);

  useEffect(() =>{
    async function showListCountry(){
      const listOfCountries= await getCountriesList();
      dispatch(addCountryList(listOfCountries));
    }
    showListCountry();

  },[])

  return (
    <div className="pagination-list-wrapper">
    <div className="row justify-content-center country-list-wrapper">

      {countriesOfList.length > 0 &&
        countriesOfList.map((item, index) => {
          return (
            <>
        {index >=count-1 && index< paginationCount &&  <div
          key={index}
          className="col-md-4 col-sm-6 card-item"
        >
          <Link to="/countrydetail">
            <div className="card">
            <div class='card-image'>
               <img src={item.flags.png}/>
            </div>
              <div class='card-text flex-grow-1 '>
            <h4 class='card-title'>{item.name.common}</h4>
            <h5 class='card-population'>{item.population}</h5>
              {/* {item} */}
            </div>
            </div>
          </Link>
        </div> }
        </>

          );

        })}

    </div>
<div className="pagination-wrapper">
  <div className="next-pagination">next</div>
  <div className="count-page">{paginationCount%count}</div>
  <div className="previous-pagination">previous</div>
</div>
    </div>

  );
};
export default List;