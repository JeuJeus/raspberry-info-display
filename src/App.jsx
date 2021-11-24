import style from './App.module.css';
import {Clock} from "./clock/Clock";
import {useLocation, useNavigate, useRoutes} from "react-router-dom";
import {useEffect} from "react";
import {WeatherCurrent} from "./weather/current/WeatherCurrent";
import {WeatherForecast} from "./weather/forecast/WeatherForecast";
import {CoronaMap} from "./weather/corona/map/CoronaMap";

export const App = () => {

    const pathComponentMapping = [
        {
            path: '/',
            element: null
        },
        {
            path: '/weather/current',
            element: <WeatherCurrent/>
        },
        {
            path: '/weather/forecast',
            element: <WeatherForecast/>
        },
        {
            path: '/corona/map',
            element: <CoronaMap/>
        }
    ];
    const routes = useRoutes(pathComponentMapping);

    const navigate = useNavigate();
    const {pathname} = useLocation();

    const switchComponent = () => {
        const currentComponentIndex = pathComponentMapping.findIndex(r => r.path === pathname);
        const nextIndex = pathComponentMapping[(currentComponentIndex + 1) % pathComponentMapping.length];
        navigate(nextIndex.path);
    };

    useEffect(() => {
        let switchComponentInterval = setInterval(() => {
            switchComponent();
        }, 1000 * 30);
        return () => clearInterval(switchComponentInterval);
    })

    return (
        <div className={style.app}>
            <Clock/>
            {routes}
        </div>
    );
}



