import axios from "axios";

const customInstance = axios.create({
  baseURL: "https://mobilewheatherstation.herokuapp.com/",
  //   headers: { Accept: "application/json" },
  headers: {
    //"Access-Control-Allow-Origin": "*",
  },
  withCredentials: false,
});

export default customInstance;

//https://mobile-weather-station-app.herokuapp.com/measurement/get
