import React, {useState} from "react";

export default function TemperatureValue(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === `celsius`) {
    return (
      <div className="TemperatureValue"> 
          <span className="TemperatureValue">{Math.round(props.celsius)}</span>
          <span className="Unit"><storng>°C |</storng> <a href="/" onClick={showFahrenheit}>°F</a></span>
      </div>
   );
  } else { 
      return (
        <div className="TemperatureValue">
          <span className="TempertureValue">{Math.round((fahrenheit()))}</span>
          <span className="Unit"><a href="/" onClick={showCelsius}>°C</a> <strong>| °F</strong></span>
        </div>
      );
    }
}