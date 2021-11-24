import {useEffect, useState} from "react";
import styles from "./CoronaMap.module.css";

export const CoronaMap = () => {

    const [currentMapIndex, savecurrentMapIndex] = useState(0);


    let coronaMap = [
        {
            description: 'Übersichtskarte der Fallzahlen nach Gemeinden',
            link: 'https://api.corona-zahlen.org/map/districts'
        },
        {
            description: 'Übersichtskarte der Hospitalisierungen',
            link: 'https://api.corona-zahlen.org/map/states/hospitalization'
        }
    ]


    const showNextMap = () => {
        savecurrentMapIndex((currentMapIndex + 1) % coronaMap.length);
    };

    useEffect(() => {
        const getChangeMapInterval = setInterval(() => {
            showNextMap();
        }, 1000 * 10);
        return () => {
            clearInterval(getChangeMapInterval);
        }
    })

    return (
        <div className={styles.mapParent}>
            <img className={styles.map} src={coronaMap[currentMapIndex].link}/>
            <p>{coronaMap[currentMapIndex].description}</p>
        </div>
    );
}
