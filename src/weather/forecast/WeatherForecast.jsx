import style from './WeatherForecast.module.css';
import {useEffect, useState} from "react";
import {fetchWeatherForecast} from "../weatherDataFetcher";
import {parseForecast} from "./forecastParser";
import {WeatherDataDisplay} from "../dataDisplay/WeatherDataDisplay";
import {TIME_LOCALE} from "../../helper/config";


export const WeatherForecast = () => {

    const HOURS_PER_DAY = 24;

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

    const iterateTroughDays = () => {
        saveCurrentTimeShown((currentTimeShown + 1) % HOURS_PER_DAY)
    };

    const displayEachDay = () => {
        return Object.entries(forecast).filter(X => X).map(([day, forecastData]) => {
            let dateAndTimeFormatted = new Date(forecastData[currentTimeShown].timestamp).toLocaleString(TIME_LOCALE);
            return <div>
                    <div className={style.day}
                         key={`${day}timestamp`}>{dateAndTimeFormatted}</div>
                    <WeatherDataDisplay key={`${day}data`} weather={forecastData[currentTimeShown]}/>
                </div>;
            }
        )
    }

    return (
        <div>
            {forecast && <div className={style.weatherForecast}>
                {displayEachDay()}
            </div>}
        </div>
    );
}
