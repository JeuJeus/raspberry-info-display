import {useEffect, useState} from "react";
import style from './Clock.module.css';
import {TIME_LOCALE} from "../helper/config";

export const Clock = () => {

    const [time, setTime] = useState();

    const buildDateString = date => date.toLocaleTimeString(TIME_LOCALE, {hour12: false});

    useEffect(() => {
        setInterval(() => {
            setTime(buildDateString(new Date()));
        }, 1000);
    })

    return (
        <div className={style.clock}>
            <div className={style.time}>{time}</div>
        </div>
    );
};
