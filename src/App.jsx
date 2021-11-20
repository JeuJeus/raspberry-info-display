import style from './App.module.css';
import {Clock} from "./clock/Clock";
import {WeatherCurrent} from "./weather/current/WeatherCurrent";
import {WeatherForecast} from "./weather/forecast/WeatherForecast";

export const App = () => (
    <div className={style.app}>
        <Clock/>
        {/*<WeatherCurrent/>*/}
        <WeatherForecast/>
    </div>
);
