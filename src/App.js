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
        <h1 className="page-title">Weather @ Closelink</h1>
        <CurrentWeather weather={this.state.APIResponse.current} />
        <ForecastWeather weather={this.state.APIResponse.daily} />
      </div>
    );
  }
}

export default App;
