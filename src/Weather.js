import "./Weather.css";

export default function Weather(){
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input type="search" placeholder="Enter a city..." className="form-control" required/>
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary"/>
          </div>
        </div>
      </form>
      <h1>San Martín de los Andes</h1>
      <h3>Saturday 17:20</h3>
      <div className="row">
        <div className="col-4">
          <ul>
            <li><img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sunny"></img></li>
            <li>Sunny</li>
          </ul>
        </div>
        <div className="col-4">
          <span>27</span>
          <span>°C |°F</span>        
        </div>
        <div className="col-4">
          <ul>
            <li>Precipitation 0%</li>
            <li>Humidity 20%</li>
            <li>Wind 11 Km/h</li>
          </ul>
        </div>
        
      </div>

    </div>
  );
}
