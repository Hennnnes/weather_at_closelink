import './App.css';
import React, { Component } from 'react';
import { default as APIResponse } from './api/APICall.js';
import CurrentWeather from './components/CurrentWeather.js';
import ForecastWeather from './components/ForecastWeather.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      APIResponse: {},
      loaded: false,
      URL
    }
	}

  componentDidMount() {
		APIResponse().then(json => {
      this.setState({
        APIResponse: json,
        loaded: true
      })
    }).catch(error => {
      console.error(error.message);
    })
  }

  render() {
    if (!this.state.loaded) {
      return (<h1>Loading</h1>)
    }

    return (
      <div>
        <h1>Closelink Weather</h1>

        <div className="current-weather">
          <h2 className="current-weather__headline">Current Weather</h2>
          <CurrentWeather weather={this.state.APIResponse.current} />
        </div>

        <div className="weather-forecast">
          <h2 className="weather-forecast__headline">Weather Forecast</h2>
          {this.state.APIResponse.daily.map((weather, i) => {
            return (<ForecastWeather key={i} weather={weather} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
