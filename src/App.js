import style from './App.module.css';
import Clock from "./clock/Clock";
import Weather from "./weather/Weather";

function App() {
    return (
        <div className={style.app}>
            <Clock/>
            <Weather/>
        </div>
    );
}

export default App;
