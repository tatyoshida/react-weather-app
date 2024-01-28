import "./Weather.css";

export default function Weather(){
  return (
    <div className="Weather">
      <form>
        <div class="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter a city..." />
          <button type="button" className="btn" id="button">Search</button>
        </div>
      </form>
      <div>
        <h1>San Martín de los Andes</h1>
        <h3>Saturday 17:20</h3>
        <div className="CurrentWeather">
          <div class="Description"><div class="Icon"><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"></img></div><span>Sunny</span></div>
          <div class="Temperature">
            <span class="TemperatureValue">26</span>
            <span class="Unit">°C</span>
            <span className="Unit">|</span>
            <span class="Unit">°F</span>
          </div>
          <div className="WeatherDetails">
            <div className="UV"><span>UV: 10 </span></div>
            <div className="Humidity"><span>Humidity: 20%</span></div>
            <div className="Wind"><span>Wind: 11 Km/h</span></div>                      
          </div>
        </div>
      </div>
    </div>
  );
}
