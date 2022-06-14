import React from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import robots from "./mockdata/robot.json";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
interface Props {}
interface State {
    robotGallery: any;
    count: number;
}

class App extends React.Component<Props, State> {
    constructor(props) {
        // 初始化父组件
        super(props);
        this.state = {
            robotGallery: [],
            count: 0,
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(res => this.setState({ robotGallery: res }));
    }
    render() {
        return (
            <div className={styles.app}>
                <div className={styles.appHeader}>
                    <img src={logo} alt="" className={styles.appLogo} />
                    <h1>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了</h1>
                </div>
                <button
                    onClick={() => {
                        this.setState(
                            //前一个生命周期的状态
                            (preState, preProps) => {
                                return { count: preState.count + 1 };
                            },
                            () => {
                                console.log("state", this.state.count);
                            }
                        );
                        this.setState(
                            //前一个生命周期的状态
                            (preState, preProps) => {
                                return { count: preState.count + 1 };
                            },
                            () => {
                                console.log("state", this.state.count);
                            }
                        );
                    }}
                >
                    click
                </button>
                <span>count:{this.state.count}</span>
                <ShoppingCart></ShoppingCart>
                <div className={styles.robotList}>
                    {this.state.robotGallery.map(r => (
                        <Robot id={r.id} email={r.email} name={r.name} />
                    ))}
                </div>
            </div>
        );
    }
}

export default App;
