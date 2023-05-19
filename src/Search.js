import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState({});
  const [loaded, setLoaded] = useState(false);

  function displayTemp(response) {
    setLoaded(true);
    setTemp({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "8944afa6845bd7c413a687258d3211ef";
    let units = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(url).then(displayTemp);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city ..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(temp.temperature)} °C</li>
          <li>Description:{temp.description}</li>
          <li>Humidity:{temp.humidity}</li>
          <li>Wind:{temp.wind}</li>
          <li>
            <img src={temp.icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
