import {LOCATION_LATITUDE, LOCATION_LONGITUDE} from "../helper/config";
import {addDays} from "../helper/helper";

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

const getDateInNDaysAsYyMmDd = days => addDays(days).toISOString().slice(0, 10);

export const fetchCurrentWeather = () => {
    const queryString = `current_weather?lat=${LOCATION_LATITUDE}&lon=${LOCATION_LONGITUDE}`;
    return fetchWeatherDataFromOpenDWDData(queryString);
}

export const fetchWeatherForecast = async () => {
    const dateTomorrow = getDateInNDaysAsYyMmDd(1);
    const dateInFourDays = getDateInNDaysAsYyMmDd(4);
    const queryString = `weather?lat=${LOCATION_LATITUDE}&lon=${LOCATION_LONGITUDE}&date=${dateTomorrow}&last_date=${dateInFourDays}`;
    return fetchWeatherDataFromOpenDWDData(queryString);
};
