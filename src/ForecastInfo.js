import WeatherIcon from "./WeatherIcon";
import "./ForecastInfo.css";
import axios from "axios";

export default function ForecastInfo(props){
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "9763745d679c919242f6130874d0e778"
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=es&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="ForecastInfo">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Jue</div>
          <div>
            <WeatherIcon code="01d" size={40}/>
          </div>
          <div className="WeatherForecast-temp">
            <span className="Temp-max">38°</span>
            <span className="Temp-min">26°</span>
          </div>
        </div>
      </div>
    </div>
  )
}