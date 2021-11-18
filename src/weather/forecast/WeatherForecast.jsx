import style from './WeatherForecast.module.css';
import {useEffect, useState} from "react";
import {fetchWeatherForecast} from "../weatherDataFetcher";
import {parseForecast} from "./forecastParser";


const iterateTroughDays = () => {

};

const displayEachDay = (forecast) => {
    return Object.entries(forecast).filter(X => X).map(([day, forecastData]) =>
        <div>
            <div className={style.day} key={day}>{day}</div>
        </div>
    )
}

export const WeatherForecast = () => {

    const [forecast, saveForecast] = useState(undefined);

    const getForecast = async () => fetchWeatherForecast().then(data => parseForecast(data)).then(data => saveForecast(data));

    useEffect(() => {
        if (forecast === undefined) getForecast();
        else console.log(forecast)
        setInterval(() => {
            getForecast();
        }, 1000 * 60 * 60);
        setInterval(() => {
            iterateTroughDays();
        }, 1000 * 1 / 2);
    })

    return (
        <div>
            {forecast && <div className={style.weatherForecast}>
                {displayEachDay(forecast)}
            </div>}
        </div>
    );
}
