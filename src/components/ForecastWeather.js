import ForecastWeatherItem from './ForecastWeatherItem.js';

const ForecastWeather = (props) => {
	return (
		<div className="weather-forecast">
			<h2 className="weather-forecast__headline">Weather Forecast</h2>
			{props.weather.map((weather, i) => {
				return (<ForecastWeatherItem key={i} weather={weather} index={i} />)
			})}
		</div>
	)
}

export default ForecastWeather;
