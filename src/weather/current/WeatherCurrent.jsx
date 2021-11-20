import style from './WeatherCurrent.module.css'
import {useEffect, useState} from "react";
import {fetchCurrentWeather} from "../weatherDataFetcher";
import {WeatherDataDisplay} from "../dataDisplay/WeatherDataDisplay";


export const WeatherCurrent = () => {

    const [weather, saveWeather] = useState(undefined);

    const getWeather = async () => fetchCurrentWeather().then(data => saveWeather(data));

    useEffect(() => {
        if (weather === undefined) getWeather();
        let getWeatherInterval = setInterval(() => {
            getWeather();
        }, 1000 * 60 * 15);
        return () => clearInterval(getWeatherInterval);
    })

    return (
        <div className={style.weather}>
            {weather && <div>
                <WeatherDataDisplay weather={weather}/>
            </div>}
        </div>
    );
};
