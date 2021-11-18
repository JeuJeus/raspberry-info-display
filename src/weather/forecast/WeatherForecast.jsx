import style from './WeatherForecast.module.css';
import {useEffect, useState} from "react";
import {fetchCurrentWeather, fetchWeatherForecast} from "../weatherDataFetcher";
import {WeatherDataDisplay} from "../dataDisplay/WeatherDataDisplay";
import {parseForecast} from "./forecastParser";


export const WeatherForecast = () => {

    const [forecast, saveForecast] = useState(undefined);

    const getForecast = async () => fetchWeatherForecast().then(data => parseForecast(data)).then(data => saveForecast(data));

    useEffect(() => {
        if (forecast === undefined) getForecast();
        setInterval(() => {
            getForecast();
        }, 1000 * 60 * 60);
    })

    return (
        <div className={style.weatherForecast}>
            {/*{forecast.map(day =>(*/}
            {/*    <WeatherDataDisplay key={day.dt} weather={day}/>*/}
            {/*))}*/}
        </div>
    );
}
