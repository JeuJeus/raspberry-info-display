import style from './App.module.css';
import {Clock} from "./clock/Clock";
import {BrowserRouter, Outlet, Route, Routes, Switch, useLocation, useNavigate, useRoutes} from "react-router-dom";
import {useEffect} from "react";
import {WeatherCurrent} from "./weather/current/WeatherCurrent";
import {WeatherForecast} from "./weather/forecast/WeatherForecast";

export const App = () => {

    const routes = useRoutes(
        [
            {
                path: '/weather/current',
                element: <WeatherCurrent/>
            },
            {
                path: '/weather/forecast',
                element: <WeatherForecast/>
            }
        ]
    );

    // const navigate = useNavigate();
    // const pathname = navigate.pathname;

    // const switchComponent = () => {
    //     const currentComponentIndex = paths.findIndex(pathname)
    // const nextIndex = paths[(currentComponentIndex + 1) % paths.length];
    // navigate.push(nextIndex)
    // };

    // useEffect(() => {
    //     let switchComponentInterval = setInterval(() => {
    //         switchComponent();
    //     }, 1000 * 30);
    //     return () => clearInterval(switchComponentInterval);
    // })

    return (
        <div className={style.app}>
            <Clock/>
            {routes}
        </div>
    );
}



