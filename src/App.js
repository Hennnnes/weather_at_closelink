import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { default as APIResponse } from './api/APICall.js';
import CurrentWeather from './components/CurrentWeather.js';
import ForecastWeather from './components/ForecastWeather.js';

import './App.css';

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

    let title = (
      <>Weather @ Closelink</>
    )
    if (window.location.pathname !== '/') {
      title = (
        <a href="/">Weather @ Closelink</a>
      )
    }


    // XXX hacky: build views
    const Home = () => (
      <>
        <CurrentWeather weather={this.state.APIResponse.current} />
        <ForecastWeather weather={this.state.APIResponse.daily} />
      </>
    );
    const CurrentWeatherRoute = () => (
        <CurrentWeather weather={this.state.APIResponse.current} />
    );

    const ForecastWeatherRoute = () => (
        <ForecastWeather weather={this.state.APIResponse.daily} />
    );

    return (
      <div>
        <h1 className="page-title">{title}</h1>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/current" component={CurrentWeatherRoute} />
          <Route path="/forecast" component={ForecastWeatherRoute} />
        </Router>
      </div>
    );
  }
}

export default App;
