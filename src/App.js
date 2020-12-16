import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

		const latitude = '53.5521229';
		const longitude = '9.9844696';
		const APIKey = '39c3930949e7f373065570d91d4f6598';
		const excludeFromAPICall = 'minutely,hourly'
		const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludeFromAPICall}&appid=${APIKey}&units=metric`

    this.state = {
      APIResponse: {},
      loaded: false,
      URL
    }
	}

  componentDidMount() {
		fetch(this.state.URL).then(response => {
			if (!response.ok) {
				throw new Error(`Error fetching to API ${response.url}`);
			}
			return response.json();
		}).then(json => {
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
      </div>
    );
  }
}

export default App;
