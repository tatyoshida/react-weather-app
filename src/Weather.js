import "./Weather.css";

export default function Weather(){
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Enter a city..." className="form-control" required/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn"/>
          </div>
        </div>
      </form>
      <div>
        <h1>San Martín de los Andes</h1>
        <h3>Saturday 17:20</h3>
        <div className="CurrentWeather">
          <div class="Description"><div class="Icon"><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"></img></div><span>Sunny</span></div>
          <div class="Temperature"><span class="TemperatureValue">26</span><span class="Unit">°C |</span><span class="Unit">°F</span></div>
          <div className="WeatherDetails">
            <div className="Precipitation"><span>Precipitation 0%</span></div>
            <div className="Humidity"><span>Humidity 20%</span></div>
            <div className="Wind"><span>Wind 11 Km/h</span></div>                      
          </div>
        </div>
      </div>
    </div>
  );
}
