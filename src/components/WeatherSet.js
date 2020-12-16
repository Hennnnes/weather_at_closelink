import './WeatherSet.css';

const WeatherSet = (props) => {
	let content = '';

	if (props.temp && props.feels_like) {
		content = (
			<p className="weatherset__contents">
				<span>{props.temp}°C, </span>
				<span>feels like {props.feels_like}°C</span>
			</p>
		)
	} else if (props.min && props.max) {
		content = (
			<p className="weatherset__contents">
				<span>min: {props.min}°C, </span>
				<span>max: {props.max}°C</span>
			</p>
		)
	}
	return (
		<div className="weatherset">
			<img src={`http://openweathermap.org/img/wn/${props.icon}@4x.png`} alt={props.description} className="weatherset__image"/>
			{content}
		</div>
	)
}

export default WeatherSet;