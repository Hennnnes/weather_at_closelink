const latitude = '53.5521229';
const longitude = '9.9844696';
const APIKey = '39c3930949e7f373065570d91d4f6598';
const excludeFromAPICall = 'minutely,hourly'
const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${excludeFromAPICall}&appid=${APIKey}&units=metric`

const APIResponse = async () => {
	return new Promise(async (resolve, reject) => {
		let response = await fetch(URL);
		if (!response.ok) {
			return reject(`Error fetching to API ${response.url}`);
		}
		return resolve(response.json());
	});
}

export default APIResponse;