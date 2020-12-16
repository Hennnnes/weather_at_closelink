import WeatherSet from './WeatherSet.js';

const CurrentWeatherItem = (props) => {
	const icon = props.weather.weather[0].icon;
	const description = props.weather.weather[0].description;
	const temp = Math.round(props.weather.temp);
	const feels_like = Math.round(props.weather.feels_like);

	return (
		<WeatherSet icon={icon} description={description} temp={temp} feels_like={feels_like} />
	)
}

export default CurrentWeatherItem;