import React from "react";
import styles from "./ShoppingCart.module.css";
import { FiShoppingCart } from "react-icons/fi";
// 定义类型
interface Props {}
interface State {
    isOpen: boolean;
}

// React.Component类组件，继承类组件
class ShoppingCart extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpen: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    // ! 考虑this的指向
    handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        // target是事件发生的元素
        // currentTarget是事件处理绑定的元素
        // console.log(e.target);
        // console.log(e.currentTarget);
        if ((e.target as HTMLElement).nodeName === "SPAN") {
            this.setState({ isOpen: !this.state.isOpen });
        }
    }

    render(): React.ReactNode {
        return (
            <div className={styles.cartContainer}>
                <button className={styles.button} onClick={this.handleClick}>
                    <FiShoppingCart></FiShoppingCart>
                    <span>购物车2(件)</span>
                </button>
                <div
                    className={styles.cartDropDown}
                    style={{ display: this.state.isOpen ? "block" : "none" }}
                >
                    <ul>
                        <li>robot1</li>
                        <li>robot2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

// 导出一下图片
export default ShoppingCart;
