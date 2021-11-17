import style from './CurrentWeather.module.css'
import {useEffect, useState} from "react";
import {fetchCurrentWeather} from "./weatherDataFetcher";
import {WeatherDataDisplay} from "./WeatherDataDisplay";


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
            {weather && <div>
                <WeatherDataDisplay weather={weather}/>
            </div>}
        </div>
    );
};

export default CurrentWeather;
