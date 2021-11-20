import style from "../current/WeatherCurrent.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHandHoldingWater, faLocationArrow,
    faTachometerAlt,
    faTemperatureHigh,
    faTint,
    faWind
} from "@fortawesome/free-solid-svg-icons";
import {WeatherIcon} from "../icon/WeatherIcon";
import {weatherIcons} from "../icon/weatherIconEnum";

export const WeatherDataDisplay = (props) => {

    //forecast has different parameters than current weather

    const isRaining = () => {
        return props.weather.condition === weatherIcons.RAIN
            || props.weather.condition === weatherIcons.SLEET
            || props.weather.condition === weatherIcons.SNOW
            || props.weather.condition === weatherIcons.HAIL
            || props.weather.condition === weatherIcons.THUNDERSTORM;
    };

    const isHumidityAvailable = () => {
        return props.weather.relative_humidity !== null;
    };

    const precipitation = props.weather.precipitation_60 || props.weather.precipitation;
    const windSpeed = props.weather.wind_speed_60 || props.weather.wind_speed;
    const windDirection = props.weather.wind_direction_60 || props.weather.wind_direction;

    return (
        <div className={style.weatherDetails}>
            <div className={style.weatherData}>
                <div><FontAwesomeIcon icon={faTemperatureHigh}/> {props.weather.temperature} C°</div>
                <div><FontAwesomeIcon icon={faTachometerAlt}/> {props.weather.pressure_msl} hPa</div>
                {isHumidityAvailable() &&
                <div><FontAwesomeIcon icon={faTint}/> {props.weather.relative_humidity} %</div>}
                {isRaining() &&
                <div><FontAwesomeIcon icon={faHandHoldingWater}/> {precipitation} %</div>}
                <div><FontAwesomeIcon icon={faWind}/> {windSpeed} km/h <FontAwesomeIcon
                    icon={faLocationArrow} style={{transform: `rotate(${windDirection}deg)`}}/></div>
            </div>
            <div className={style.momentaryWeatherIcon}>
                <div><WeatherIcon icon={props.weather.icon}/></div>
            </div>
        </div>
    );

}
