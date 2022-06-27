import "./App.css";
import TimerView from "./components/timerView/TimerView.jsx";
import { Provider } from "mobx-react";
function App() {
    return (
        <div className="App">
            <Provider>
                <TimerView></TimerView>
            </Provider>
        </div>
    );
}

export default App;
