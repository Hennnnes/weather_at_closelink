import CurrentWeatherItem from './CurrentWeatherItem.js';

const CurrentWeather = (props) => {
	return (
		<div className="current-weather">
			<h2 className="current-weather__headline">Current Weather</h2>
			<CurrentWeatherItem weather={props.weather} />
        </div>
	)
}

export default CurrentWeather;