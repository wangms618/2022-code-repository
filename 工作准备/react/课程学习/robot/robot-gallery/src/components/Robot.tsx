import React from "react";
import styles from "./Robot.module.css";
import { appContext } from "../index";
interface RobotProps {
    id: number;
    name: string;
    email: string;
}

// props传递组件数据
// React.FC-React.FunctionComponent
// type React.FC<P = {}> = React.FunctionComponent<P>，默认是一个空对象，P是泛型参数props
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    return (
        <appContext.Consumer>
            {value => {
                return (
                    <div className={styles.cardContainer}>
                        <img src={`https://robohash.org/${id}`} alt="robot" />
                        <h2>{name}</h2>
                        <p>{email}</p>
                        <p>作者：{value.username}</p>
                    </div>
                );
            }}
        </appContext.Consumer>
    );
};

export default Robot;
