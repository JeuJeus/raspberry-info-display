import style from './CurrentWeather.module.css'
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingWater, faTemperatureHigh, faTint, faWind} from "@fortawesome/free-solid-svg-icons";
import WeatherIcon from "./WeatherIcon";
import {fetchCurrentWeather} from "./weatherDataFetcher";
import {weatherIcons} from "./weatherIconEnum";
import {between} from "../helper/helper";


const CurrentWeather = () => {

    const [weather, saveWeather] = useState(undefined);


    const getWeather = async () => fetchCurrentWeather().then(data => saveWeather(data));

    useEffect(() => {
        if (weather === undefined) getWeather();
        setInterval(() => {
            getWeather();
        }, 1000 * 60 * 15);
    })

    const isRaining = () => {
        return weather.condition === weatherIcons.RAIN
            || weather.condition === weatherIcons.SLEET
            || weather.condition === weatherIcons.SNOW
            || weather.condition === weatherIcons.HAIL
            || weather.condition === weatherIcons.THUNDERSTORM;
    };

    return (
        <div className={style.weather}>
            {weather && <div className={style.weatherDetails}>
                <div className={style.weatherData}>
                    {/*generify this to be included into forecast*/}
                    <div><FontAwesomeIcon icon={faTemperatureHigh}/> {weather.temperature} C°</div>
                    <div><FontAwesomeIcon icon={faWind}/> {weather.pressure_msl} hPa</div>
                    <div><FontAwesomeIcon icon={faTint}/> {weather.relative_humidity} %</div>
                    {isRaining() && <div><FontAwesomeIcon icon={faHandHoldingWater}/> {weather.precipitation_60} %</div>}
                    <div><FontAwesomeIcon icon={faTint} /> {weather.relative_humidity} %</div>
                    {/*    TODO insert icon for wind direction + speed*/}
                </div>
                <div className={style.momentaryWeatherIcon}>
                    <div><WeatherIcon icon={weather.icon}/></div>
                </div>
            </div>}
        </div>
    );
};

export default CurrentWeather;
