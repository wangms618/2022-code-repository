import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState";
import { useAddToCart } from "./AddToCart";
interface RobotProps {
    id: number;
    name: string;
    email: string;
}

// props传递组件数据
// React.FC-React.FunctionComponent
// type React.FC<P = {}> = React.FunctionComponent<P>，默认是一个空对象，P是泛型参数props
const RobotDiscount: React.FC<RobotProps> = ({ id, name, email }) => {
    const value = useContext(appContext);
    const addToCart = useAddToCart();
    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>打折商品</h2>
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={() => addToCart(id, name)}>加入购物车</button>
            {/* <button onClick={() => addToCart(id, name)}>加入购物车</button> */}
        </div>
    );
};

export default RobotDiscount;
