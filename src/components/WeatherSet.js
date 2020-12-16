import './WeatherSet.css';

const WeatherSet = (props) => {
	return (
		<div>
          	<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt={props.description} />
          	<p>
		  		<span>{props.temp}°C, </span>
				<span>feels like {props.feels_like}°C</span>
			</p>
		</div>
	)
}

export default WeatherSet;