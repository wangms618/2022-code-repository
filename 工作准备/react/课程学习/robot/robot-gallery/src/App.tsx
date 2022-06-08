import React from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robot.json";
import Robot from "./components/Robot";

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} alt="" className={styles.appLogo} />
                <h1>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了</h1>
            </div>
            <div className={styles.robotList}>
                {robots.map(r => (
                    <Robot id={r.id} email={r.email} name={r.name} />
                ))}
            </div>
        </div>
    );
}

export default App;
