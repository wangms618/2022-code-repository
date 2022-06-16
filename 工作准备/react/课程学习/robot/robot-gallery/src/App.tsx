import React, { useState, useEffect } from "react";
import logo from "./assets/images/logo.svg";
import styles from "./App.module.css";
import Robot from "./components/Robot";
import ShoppingCart from "./components/ShoppingCart";
import RobotDiscount from "./components/RobotDiscount";
interface Props {}
interface State {
    robotGallery: any;
    count: number;
}

const App: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>("");
    const [robotGallery, setRobotGallery] = useState<any>([]);

    // 默认情况，每次UI渲染或者状态改变的时候，useEffect都会执行
    // 其他情况，需要输入第二个参数，参数是一个数组，是一个状态列表，如果这个状态列表不为空，useEffect会关注这个列表的状态，一旦发现列表内某个元素发生变化，第一个回调的逻辑就会被执行
    useEffect(() => {
        document.title = `点击${count}次`;
    }, [count]);

    // useEffect第一个参数不允许async修饰
    // 报错：类型“() => Promise<void>”的参数不能赋给类型“EffectCallback”的参数。不能将类型“Promise<void>”分配给类型“void | Destructor”。
    // 原因：useEffect要么返回一个函数，要么什么都不返回，使用async，函数将会返回Promise
    useEffect(() => {
        // 使用异步需要注意的事
        const fetchData = async () => {
            setLoading(true);
            try {
                const responses = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );
                const data = await responses.json();
                setRobotGallery(data);
            } catch (e: any) {
                setError(e.message);
            }

            setLoading(false);
        };
        fetchData();
    }, []);

    return (
        <div className={styles.app}>
            <div className={styles.appHeader}>
                <img src={logo} alt="" className={styles.appLogo} />
                <h1>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了</h1>
            </div>
            <button
                onClick={() => {
                    // ！异步
                    setCount(count + 1);
                }}
            >
                click
            </button>
            <span>count:{count}</span>
            <ShoppingCart></ShoppingCart>
            {error !== "" && <div>网站出错：{error}</div>}
            {!loading ? (
                <div className={styles.robotList}>
                    {robotGallery.map((r, index) =>
                        index % 2 == 0 ? (
                            <RobotDiscount
                                id={r.id}
                                email={r.email}
                                name={r.name}
                            ></RobotDiscount>
                        ) : (
                            <Robot id={r.id} email={r.email} name={r.name} />
                        )
                    )}
                </div>
            ) : (
                <h2>loading 加载中</h2>
            )}
        </div>
    );

    // constructor(props) {
    //     // 初始化父组件
    //     super(props);
    //     this.state = {
    //         robotGallery: [],
    //         count: 0,
    //     };
    // }
    // // 在组件创建好dom元素以后，挂载进页面的时候调用
    // componentDidMount() {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then(response => response.json())
    //         .then(res => this.setState({ robotGallery: res }));
    // }
    // render() {
    //     return (
    //         <div className={styles.app}>
    //             <div className={styles.appHeader}>
    //                 <img src={logo} alt="" className={styles.appLogo} />
    //                 <h1>啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦了</h1>
    //             </div>
    //             <button
    //                 onClick={() => {
    //                     this.setState(
    //                         //前一个生命周期的状态
    //                         (preState, preProps) => {
    //                             return { count: preState.count + 1 };
    //                         },
    //                         () => {
    //                             console.log("state", this.state.count);
    //                         }
    //                     );
    //                     this.setState(
    //                         //前一个生命周期的状态
    //                         (preState, preProps) => {
    //                             return { count: preState.count + 1 };
    //                         },
    //                         () => {
    //                             console.log("state", this.state.count);
    //                         }
    //                     );
    //                 }}
    //             >
    //                 click
    //             </button>
    //             <span>count:{this.state.count}</span>
    //             <ShoppingCart></ShoppingCart>
    //             <div className={styles.robotList}>
    //                 {this.state.robotGallery.map(r => (
    //                     <Robot id={r.id} email={r.email} name={r.name} />
    //                 ))}
    //             </div>
    //         </div>
    //     );
    // }
};

export default App;
