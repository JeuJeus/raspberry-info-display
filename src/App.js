import style from './App.module.css';
import Clock from "./Clock";
import Weather from "./Weather";

function App() {
    return (
        <div className={style.app}>
            <Clock/>
            <Weather/>
        </div>
    );
}

export default App;
