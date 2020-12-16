import WeatherSet from './WeatherSet.js';

const ForecastWeatherItem = (props) => {
	const icon = props.weather.weather[0].icon;
	const description = props.weather.weather[0].description;
	const min = Math.round(props.weather.temp.min);
	const max = Math.round(props.weather.temp.max);

	// hack to get correct date
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(tomorrow.getDate() + props.index);

	const title = tomorrow.toLocaleDateString()
	return (
		<WeatherSet icon={icon} description={description} min={min} max={max} title={title}/>
	)
}

export default ForecastWeatherItem;