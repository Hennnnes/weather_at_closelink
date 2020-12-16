import CurrentWeatherItem from './CurrentWeatherItem.js';

const CurrentWeather = (props) => {
	let title = (
		<>Current Weather</>
	)
	if (window.location.pathname !== '/current') {
		title = (
			<a href="/current">Current Weather</a>
		)
	}
	return (
		<div className="current-weather">
			<h2 className="current-weather__headline">
				{title}
			</h2>
			<CurrentWeatherItem weather={props.weather} />
        </div>
	)
}

export default CurrentWeather;