import style from './CurrentWeather.module.css'
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingWater, faTemperatureHigh, faTint, faWind} from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";
import {fetchCurrentWeather} from "./weatherDataFetcher";


const CurrentWeather = () => {

    const [weather, saveWeather] = useState(undefined);


    const getWeather = async () => fetchCurrentWeather().then(data => saveWeather(data));

    useEffect(() => {
        if (weather === undefined) getWeather();
        setInterval(() => {
            getWeather();
        }, 1000 * 60 * 15);
    })

    return (
        <div className={style.weather}>
            {weather && <div className={style.weatherDetails}>
                <div className={style.weatherData}>
                    <div><FontAwesomeIcon icon={faTemperatureHigh}/> {weather.temperature} C°</div>
                    <div><FontAwesomeIcon icon={faWind}/> {weather.pressure_msl} hPa</div>
                    <div><FontAwesomeIcon icon={faTint}/> {weather.relative_humidity} %</div>
                    <div><FontAwesomeIcon icon={faHandHoldingWater}/> {weather.precipitation_60} %</div>
                </div>
                <div className={style.momentaryWeatherIcon}>
                    <div><WeatherIcon icon={weather.icon}/></div>
                </div>
            </div>}
        </div>
    );
};

export default CurrentWeather;
