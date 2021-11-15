import style from './Weather.module.css'
import {LOCATION_LATITUDE, LOCATION_LONGITUDE} from "./config";
import {useEffect, useState} from "react";

const Weather = () => {

    const [weather, saveWeather] = useState(undefined);

    const fetchWeatherDataFromOpenDWDData = () => {
        const dateYyMmDd = new Date().toISOString().slice(0, 10);
        fetch(`https://api.brightsky.dev/weather?lat=${LOCATION_LATITUDE}&lon=${LOCATION_LONGITUDE}&date=${dateYyMmDd}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error fetching weather data from Bright Sky');
                }
            })
            .then(json => {
                saveWeather(json);
                console.log(json);
            })
    }

    useEffect(() => {
        if (weather === undefined) fetchWeatherDataFromOpenDWDData();

        setInterval(() => {
            fetchWeatherDataFromOpenDWDData();
        }, 1000 * 60 * 15);
    })

    return (
        <div className={style.weather}>wetter</div>
    );
};

export default Weather;
