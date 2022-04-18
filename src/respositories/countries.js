import axios from "axios";
import { API_BASE_URL } from "../config";

axios.defaults.baseURL = API_BASE_URL;
// axios.defaults.headers.common["X-RapidAPI-Host"] = 'moviesearch.p.rapidapi.com';
// axios.defaults.headers.common["X-RapidAPI-Key"] = "2894f8eb6dmsh21f83dbf2058db3p18d455jsn5f97b1269e01";

export const getCountriesList = async() => {

 return await axios
    .get("/all")
    .then(function (response) {
        console.log("all",response)
     return   response.data;

    })
    .catch(function (error) {
        return error;

    });
};
