import WeatherSet from './WeatherSet.js';

const ForecastWeather = (props) => {
	const icon = props.weather.weather[0].icon;
	const description = props.weather.weather[0].description;
	const min = Math.round(props.weather.temp.min);
	const max = Math.round(props.weather.temp.max);

	return (
		<WeatherSet icon={icon} description={description} min={min} max={max} />
	)
}

export default ForecastWeather;