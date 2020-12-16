import './App.css';
import React, { Component } from 'react';
import { default as APIResponse } from './api/APICall.js';
import CurrentWeatherItem from './components/CurrentWeatherItem.js';
import ForecastWeatherItem from './components/ForecastWeatherItem.js';

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
        <h1 className="page-title">Weather @ Closelink</h1>

        <div className="current-weather">
          <h2 className="current-weather__headline">Current Weather</h2>
          <CurrentWeatherItem weather={this.state.APIResponse.current} />
        </div>

        <div className="weather-forecast">
          <h2 className="weather-forecast__headline">Weather Forecast</h2>
          {this.state.APIResponse.daily.map((weather, i) => {
            return (<ForecastWeatherItem key={i} weather={weather} index={i} />)
          })}
        </div>
      </div>
    );
  }
}

export default App;
