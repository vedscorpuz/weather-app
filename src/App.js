import React from 'react';
import './App.css';
import 'weather-icons/css/weather-icons.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./app_component/weather.component";

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "a91fe02b80cc03dd54c6a9456e27b4d9";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: undefined,
      country: undefined
    };
    this.getWeather();
  }

  getWeather = async() => {
    const api_call = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid='+API_key);
    const response = await api_call.json();
    console.log(response);
    this.setState({
      city: response.name,
      country: response.sys.country
    })
  }

  render() {
    return (
      <div className="App">
        <Weather city={this.state.city} country={this.state.country}/>
      </div>
    );
  }
}


export default App;
