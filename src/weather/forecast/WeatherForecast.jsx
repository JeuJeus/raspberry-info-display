import style from './WeatherForecast.module.css';
import {useEffect, useState} from "react";
import {fetchWeatherForecast} from "../weatherDataFetcher";
import {parseForecast} from "./forecastParser";
import {WeatherDataDisplay} from "../dataDisplay/WeatherDataDisplay";


export const WeatherForecast = () => {

    const HOURS_PER_DAY = 24;

    const iterateTroughDays = () => {
        saveCurrentTimeShown((currentTimeShown + 1) % HOURS_PER_DAY)
    };

    const displayEachDay = (forecast) => {
        return Object.entries(forecast).filter(X => X).map(([day, forecastData]) =>
            <div>
                <div className={style.day}
                     key={`${day}timestamp`}>{day} {forecastData[currentTimeShown].timestamp}</div>
                <WeatherDataDisplay key={`${day}data`} weather={forecastData[currentTimeShown]}/>
            </div>
        )
    }

    const [forecast, saveForecast] = useState(undefined);
    const [currentTimeShown, saveCurrentTimeShown] = useState(0);

    const getForecast = async () => fetchWeatherForecast().then(data => parseForecast(data)).then(data => saveForecast(data));

    useEffect(() => {
        if (forecast === undefined) getForecast();
        const getForecastInterval = setInterval(() => {
            getForecast();
        }, 1000 * 60 * 60);
        const iterateTroughDaysInterval = setInterval(() => {
            iterateTroughDays();
        }, 1000);
        return () => {
            clearInterval(getForecastInterval);
            clearInterval(iterateTroughDaysInterval);
        }
    })

    return (
        <div>
            {forecast && <div className={style.weatherForecast}>
                {displayEachDay(forecast)}
            </div>}
        </div>
    );
}
