import style from './App.module.css';
import Clock from "./clock/Clock";
import CurrentWeather from "./weather/CurrentWeather";

function App() {
    return (
        <div className={style.app}>
            <Clock/>
            <CurrentWeather/>
        </div>
    );
}

export default App;
