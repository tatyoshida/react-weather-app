import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
        <div className="WeatherInfo">
          <h1>{props.data.city}</h1>
          <h3>
            <FormattedDate date = {props.data.date} />
          </h3>
          <div className="CurrentWeather">
            <div className="row">
              <div className="col-6 Description">
                <div className="Icon">
                  <img src={props.data.iconUrl} alt={props.data.description}></img>
                </div>
                <span className="text-capitalize">{props.data.description}</span>
              </div>
              <div className="col-6 Temperature">
                <span className="TemperatureValue">{Math.round(props.data.temperature)}</span>
                <span className="Unit">°C</span>
                <span className="Unit">|</span>
                <span className="Unit">°F</span>
              </div>
            </div>  
            <div className="row WeatherDetails">
              <div className="col-4 Pressure"><span>Pressure: {props.data.pressure} mb</span></div>
              <div className="col-4 Humidity"><span>Humidity: {props.data.humidity}%</span></div>
              <div className="col-4 Wind"><span>Wind: {Math.round(props.data.wind)} Km/h</span></div>                      
            </div>  
          </div>
        </div>
    );
}