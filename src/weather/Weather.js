import style from './Weather.module.css'
import {LOCATION_LATITUDE, LOCATION_LONGITUDE} from "../helper/config";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTemperatureHigh, faTint, faWind} from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";


const Weather = () => {

    const [weather, saveWeather] = useState(undefined);

    const fetchWeatherDataFromOpenDWDData = () => {
        fetch(`https://api.brightsky.dev/current_weather?lat=${LOCATION_LATITUDE}&lon=${LOCATION_LONGITUDE}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching weather data from Bright Sky');
                }
            })
            .then(json => {
                saveWeather(json.weather);
            })
    }

    useEffect(() => {
        if (weather === undefined) fetchWeatherDataFromOpenDWDData();

        setInterval(() => {
            fetchWeatherDataFromOpenDWDData();
        }, 1000 * 60 * 15);
    })

    return (
        <div className={style.weather}>
            {weather && <div className={style.weatherDetails}>
                {/*TODO refactor */}
                <div className={style.weatherData}>
                    <div><FontAwesomeIcon icon={faTemperatureHigh}/> {weather.temperature} C°</div>
                    <div><FontAwesomeIcon icon={faWind}/> {weather.pressure_msl} hPa</div>
                    <div><FontAwesomeIcon icon={faTint}/> {weather.relative_humidity} %</div>
                </div>
                <div className={style.momentaryWeatherIcon}>
                    <div><WeatherIcon icon={weather.icon}/></div>
                </div>
            </div>}
        </div>
    );
};

export default Weather;