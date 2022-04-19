import React, { useEffect, useLayoutEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { getCountriesList } from "../respositories/countries";
import { addCountryList,searchCountryList, setSelectedCountry } from "../store/countryListSlice";
const List = (props) => {
  const countriesOfList = useSelector((state) => state.countryList.countryList)
  const dispatch = useDispatch()
  const[count,setCount]=useState(1);
  const[paginationCount,setPaginationCount]=useState(10);
  const [filteredCountryList, setFilterCountryList] = useState([])


  useEffect(() => {
    const array1 = countriesOfList.filter((item) => {
      if (item.name.common.toLowerCase().includes(props.recentlySearch.toLowerCase())) {
        return item;
      }
    });
    setFilterCountryList(array1)

  }, [props.recentlySearch]);

  useEffect(() =>{
    async function showListCountry(){
      if(countriesOfList.length === 0){
        const listOfCountries= await getCountriesList();
        let firstList = listOfCountries.filter((item,index)=>{
          return index >=count-1 && index < count * paginationCount
        })
        setFilterCountryList(firstList)
        dispatch(addCountryList(listOfCountries));
      }
    }
    showListCountry();
  },[])

  useEffect(()=>{
      let newList ;
    if(count > 1){
  newList = countriesOfList.filter((item,index)=>{
        return index >= (count-1)*paginationCount && index < count*paginationCount;
      })
    }else{
        newList = countriesOfList.filter((item,index)=>{
        return index >= count-1 && index <paginationCount
      })
    }
      setFilterCountryList(newList)
  },[count,paginationCount])

  const handlePagination =(action)=>{
    if(action == 'next'){
      let newCount = count + 1
      setCount(newCount)
    }else {
      if(count!=1){
     let newCount = count - 1
      setCount(newCount)
      }
    }
  }

  const getDetail =(detail) =>{
      dispatch(setSelectedCountry(detail));
  }

  return (
    <div className="pagination-list-wrapper">
      <div className="title">List of Countries
          <div className="show-wrapper">
     <label htmlFor="numbers">Show: </label>
        <select name="numbers" id="numbers" onChange={(e)=>{setPaginationCount(parseInt(e.target.value))
        setCount(1);}}>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
      </div></div>

    <div className="row justify-content-center country-list-wrapper">

      {filteredCountryList.length > 0 ?
        filteredCountryList.map((item, index) => {
          return (
            <div onClick={()=>getDetail(item)} key={index}  className="col-lg-3 col-md-4 col-sm-6 card-item">
    <div
        >
          <Link className="link" to={`/countrydetail/${item.name.common}`}>
           <div className="card">
            <div className='card-image'>
               <img src={item.flags.png}/>
            </div>
            <div className='card-text  '>
              <div className="row">
                <div className="col item-name">Name</div>
                <div className="col item-result">{item.name.common}</div>

              </div>
                <div className="row">
                <div className="col item-name">Capital</div>
                <div className="col item-result">{item?.capital != undefined ? item.capital[0]:"null" }</div>

              </div>
                <div className="row">
                <div className="col item-name">Population</div>
                <div className="col item-result">{item.population}</div>

              </div>
                <div className="row">
                <div className="col item-name">Region</div>
                <div className="col item-result">{item.region}</div>

              </div>
            </div>
            <div className="show-detail"> Show Detail </div>
           </div>
          </Link>
        </div>
        </div>

          );

        }):<div className=" d-flex justify-content-center align-items-center vh-80">
          <div className="spinner-border"></div>
          </div>}

    </div>
    <div className="pagination-wrapper">
      <div onClick={()=>handlePagination('prev')} className="previous-pagination">previous</div>
      <div className="count-page">{count}</div>
      <div onClick={()=>handlePagination('next')} className="next-pagination">next</div>
    </div>
    </div>

  );
};
export default List;