import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setweatherData] = useState({ready:false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setweatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt *1000),
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function search() {
    const apiKey= "9763745d679c919242f6130874d0e778";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmite(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter a city..." onChange={handleCityChange}/>
            <button type="button" className="btn" id="button">Search</button>
          </div>
        </form>
        <WeatherInfo data={weatherData}/>
      </div>
    );
  } else {    
    search();
    return "Loading...";
  }  
}
