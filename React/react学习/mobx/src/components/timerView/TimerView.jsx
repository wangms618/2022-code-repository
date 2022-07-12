import React from "react";
import { observer, inject } from "mobx-react";

const appState = {
    timer: 0,
};

appState.resetTimer = () => {
    appState.timer = 0;
};

// appState.resetTimer = action(function reset() {
//     appState.timer = 0;
// });

setInterval(() => {
    appState += 1;
}, 1000);

const TimerView = props => {
    return <div className="App">{props.appState.timer}</div>;
};

export default inject(appState)(observer(TimerView));
