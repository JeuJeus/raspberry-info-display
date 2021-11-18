import style from "./WeatherCurrent.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHandHoldingWater, faLocationArrow,
    faTachometerAlt,
    faTemperatureHigh,
    faTint,
    faWind
} from "@fortawesome/free-solid-svg-icons";
import {WeatherIcon} from "./WeatherIcon";
import {weatherIcons} from "./weatherIconEnum";

export const WeatherDataDisplay = (props) => {

    const isRaining = () => {
        return props.weather.condition === weatherIcons.RAIN
            || props.weather.condition === weatherIcons.SLEET
            || props.weather.condition === weatherIcons.SNOW
            || props.weather.condition === weatherIcons.HAIL
            || props.weather.condition === weatherIcons.THUNDERSTORM;
    };

    return (
        <div className={style.weatherDetails}>
            <div className={style.weatherData}>
                <div><FontAwesomeIcon icon={faTemperatureHigh}/> {props.weather.temperature} C°</div>
                <div><FontAwesomeIcon icon={faTachometerAlt}/> {props.weather.pressure_msl} hPa</div>
                <div><FontAwesomeIcon icon={faTint}/> {props.weather.relative_humidity} %</div>
                {isRaining() &&
                <div><FontAwesomeIcon icon={faHandHoldingWater}/> {props.weather.precipitation_60} %</div>}
                <div><FontAwesomeIcon icon={faWind}/> {props.weather.wind_speed_60} km/h <FontAwesomeIcon
                    icon={faLocationArrow} style={{transform: `rotate(${props.weather.wind_direction_60}deg)`}}/></div>
            </div>
            <div className={style.momentaryWeatherIcon}>
                <div><WeatherIcon icon={props.weather.icon}/></div>
            </div>
        </div>
    );

}
