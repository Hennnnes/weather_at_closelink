import ForecastWeatherItem from './ForecastWeatherItem.js';

const ForecastWeather = (props) => {
	let title = (
		<>Weather Forecast</>
	)
	if (window.location.pathname !== '/forecast') {
		title = (
			<a href="/forecast">Weather Forecast</a>
		)
	}
	return (
		<div className="weather-forecast">
			<h2 className="weather-forecast__headline">
				{ title }
			</h2>
			{props.weather.map((weather, i) => {
				return (<ForecastWeatherItem key={i} weather={weather} index={i} />)
			})}
		</div>
	)
}

export default ForecastWeather;
