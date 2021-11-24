import {useEffect, useState} from "react";
import style from './Clock.module.css';
import {TIME_LOCALE} from "../helper/config";

export const Clock = () => {

    const [time, setTime] = useState();
    const [date, setDate] = useState();

    const buildTimeString = dateTime => dateTime.toLocaleTimeString(TIME_LOCALE, {hour12: false});
    const buildDateString = dateDate => dateDate.toLocaleDateString(TIME_LOCALE);

    useEffect(() => {
        setInterval(() => {
            setTime(buildTimeString(new Date()));
            setDate(buildDateString(new Date()));
        }, 1000);
    })

    return (
        <div className={style.clock}>
            <div className={style.time}>{time}</div>
            <div className={style.date}>{date}</div>
        </div>
    );
};
