import WeatherSet from './WeatherSet.js';

const ForecastWeather = (props) => {
	const icon = props.weather.weather[0].icon;
	const description = props.weather.weather[0].description;
	const temp = Math.round(props.weather.temp.day);
	const feels_like = Math.round(props.weather.feels_like.day);

	return (
		<WeatherSet icon={icon} description={description} temp={temp} feels_like={feels_like} />
	)
}

export default ForecastWeather;