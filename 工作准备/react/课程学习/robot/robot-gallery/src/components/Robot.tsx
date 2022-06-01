import React from "react";

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
        <li>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <h2>{email}</h2>
        </li>
    );
};

export default Robot;
