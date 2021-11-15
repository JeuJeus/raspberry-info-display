import {useEffect, useState} from "react";
import style from './Clock.module.css';

const Clock = () => {

    const [time, setTime] = useState();

    const buildDateString = date => date.toLocaleTimeString('de-DE', {hour12: false});

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

export default Clock;
