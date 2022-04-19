import React, {useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CountryDetail = () => {
    const selectedCountry=useSelector((state)=>state.countryList.selectedCountry)

  return (<div className="container">
    <Link to="/">Go to list</Link>
    <div className="row">

        <div className="col-lg-6 col-md-7 detail-col">
            <div className="detail-wrapper">
              <img src={selectedCountry.flags.png} className="section-flag" />

              <div className="section-name"> {selectedCountry?.name.common}</div>

                <div className="section-description mb-3">
                  The capital city of {selectedCountry.name.common} is {selectedCountry?.capital != undefined ? selectedCountry.capital[0]:"is not mentioned yet." }
                </div>
                <a className="btn-wrapper btn btn-secondary" href={selectedCountry.maps.googleMaps} target="_blank" >
                  Show Google map
                </a>
            </div>
        </div>
    </div>
</div>);
};
export default CountryDetail;