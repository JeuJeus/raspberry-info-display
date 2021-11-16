import {weatherIcons} from "./weatherIconEnum";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBraille,
    faCloud,
    faCloudMoon,
    faCloudRain,
    faCloudShowersHeavy,
    faCloudSun,
    faMoon,
    faPooStorm,
    faQuestion,
    faSmog,
    faSnowflake,
    faSun,
    faWind
} from "@fortawesome/free-solid-svg-icons";

const WeatherIcon = (props) => {

    const getConditionIcon = () => {
        switch (props.icon) {
            case weatherIcons.CLEAR_DAY:
                return <FontAwesomeIcon icon={faSun}/>;
            case weatherIcons.CLEAR_NIGHT:
                return <FontAwesomeIcon icon={faMoon}/>;
            case weatherIcons.PARTLY_CLOUDY_DAY:
                return <FontAwesomeIcon icon={faCloudSun}/>;
            case weatherIcons.PARTLY_CLOUDY_NIGHT:
                return <FontAwesomeIcon icon={faCloudMoon}/>;
            case weatherIcons.CLOUDY:
                return <FontAwesomeIcon icon={faCloud}/>;
            case weatherIcons.FOG:
                return <FontAwesomeIcon icon={faSmog}/>;
            case weatherIcons.WIND:
                return <FontAwesomeIcon icon={faWind}/>;
            case weatherIcons.RAIN:
                return <FontAwesomeIcon icon={faCloudRain}/>;
            case weatherIcons.SLEET:
                return <FontAwesomeIcon icon={faCloudShowersHeavy}/>;
            case weatherIcons.SNOW:
                return <FontAwesomeIcon icon={faSnowflake}/>;
            case weatherIcons.HAIL:
                return <FontAwesomeIcon icon={faBraille}/>;
            case weatherIcons.THUNDERSTORM:
                return <FontAwesomeIcon icon={faPooStorm}/>;
            default:
                return <FontAwesomeIcon icon={faQuestion}/>;
        }
    };

    return (
        getConditionIcon()
    );
};

export default WeatherIcon;
