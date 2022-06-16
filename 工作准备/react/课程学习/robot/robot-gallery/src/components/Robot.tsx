import React, { useContext } from "react";
import styles from "./Robot.module.css";
import { appContext, appSetStateContext } from "../AppState";
interface RobotProps {
    id: number;
    name: string;
    email: string;
}

// props传递组件数据
// React.FC-React.FunctionComponent
// type React.FC<P = {}> = React.FunctionComponent<P>，默认是一个空对象，P是泛型参数props
const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
    const value = useContext(appContext);
    const setState = useContext(appSetStateContext);
    const addToCart = () => {
        if (setState) {
            // 做判断，使用自定义hooks
            setState(state => {
                // 返回一个新的state
                return {
                    // 展开，防止修改到不需要修改的数据
                    // 这里是保留username
                    ...state,
                    // 添加列表项
                    shoppingCart: {
                        items: [...state.shoppingCart.items, { id, name }],
                    },
                };
            });
        }
    };
    return (
        <div className={styles.cardContainer}>
            <img src={`https://robohash.org/${id}`} alt="robot" />
            <h2>{name}</h2>
            <p>{email}</p>
            <p>作者：{value.username}</p>
            <button onClick={addToCart}>加入购物车</button>
        </div>
    );
};

export default Robot;
