import style from './App.module.css';
import {Clock} from "./clock/Clock";
import {CurrentWeather} from "./weather/CurrentWeather";

export const App = () => (
    <div className={style.app}>
        <Clock/>
        <CurrentWeather/>
    </div>
);
