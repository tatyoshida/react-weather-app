import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props){
  const [weatherData, setweatherData] = useState({ready:false});
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      city: response.data.name,
      date: "Sunday 19:05",
      temperature: response.data.main.temp,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
      description: response.data.weather[0].description,
      pressure: response.data.main.pressure,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Enter a city..." />
            <button type="button" className="btn" id="button">Search</button>
          </div>
        </form>
        <div>
          <h1>{weatherData.city}</h1>
          <h3>{weatherData.date}</h3>
          <div className="CurrentWeather">
            <div className="Description">
              <div className="Icon">
                <img src={weatherData.iconUrl} alt={weatherData.description}></img>
              </div>
              <span>{weatherData.description}</span>
            </div>
            <div className="Temperature">
              <span className="TemperatureValue">{Math.round(weatherData.temperature)}</span>
              <span className="Unit">°C</span>
              <span className="Unit">|</span>
              <span className="Unit">°F</span>
            </div>
            <div className="WeatherDetails">
              <div className="Pressure"><span>Pressure: {weatherData.pressure} mb</span></div>
              <div className="Humidity"><span>Humidity: {weatherData.humidity}%</span></div>
              <div className="Wind"><span>Wind: {Math.round(weatherData.wind)} Km/h</span></div>                      
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey= "9763745d679c919242f6130874d0e778";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    
    return "Loading...";
  }  
}
