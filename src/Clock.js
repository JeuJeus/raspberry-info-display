import {useEffect, useState} from "react";
import * as styles from './clock.modules.css';

const Clock = () => {

    const [time, setTime] = useState();

    useEffect(() => {
        setInterval(() => {
            let date = new Date();
            setTime(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
        }, 1000);
    })

    return (
        <div className={styles.time}>
            {time}
        </div>
    );
};

export default Clock;
