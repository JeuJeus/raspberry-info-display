import {LOCATION_LATITUDE, LOCATION_LONGITUDE} from "../helper/config";

const fetchWeatherDataFromOpenDWDData = (queryString) => {
    return fetch(`https://api.brightsky.dev/${queryString}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error fetching weather data from Bright Sky');
            }
        })
        .then(json => {
            return json.weather;
        });
}

const addDays = (days) => {
    let result = new Date();
    return result.setDate(result.getDate() + days);
}

export const fetchCurrentWeather = () => {
    const queryString = `current_weather?lat=${LOCATION_LATITUDE}&lon=${LOCATION_LONGITUDE}`;
    return fetchWeatherDataFromOpenDWDData(queryString);
}

export const fetchWeatherForecast = () => {
    const dateYyMmDdToday = new Date().toISOString().slice(0, 10);
    const dateYyMmDdInThreeDays = addDays(3).toISOString().slice(0, 10);
    const queryString = `weather?lat=${LOCATION_LATITUDE}&lon=${LOCATION_LONGITUDE}&date=${dateYyMmDdToday}&last_date=${dateYyMmDdInThreeDays}`;
    return fetchWeatherDataFromOpenDWDData(queryString);
};
