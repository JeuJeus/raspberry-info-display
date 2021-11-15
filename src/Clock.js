import {useEffect, useState} from "react";
import style from './Clock.module.css';

const Clock = () => {

    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        }, 1000);
    })

    return (

        <div className={style.time}>
            {time}
        </div>
    );
};

export default Clock;
