import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, SignInPage, RegisterPage, DetailPage } from "./pages";

function App() {
    return (
        <div className={styles.App}>
            <BrowserRouter>
                {/* 页面切换switch */}
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/signIn" component={SignInPage} />
                    <Route path="/register" component={RegisterPage} />
                    {/* 携带参数,格式：/detail/123 */}
                    <Route
                        path="/detail/:touristRouteId"
                        component={DetailPage}
                    />
                    <Route
                        render={() => <h1>404 not found 页面不存在</h1>}
                    ></Route>
                </Switch>
                {/* exact告诉route组件，有且仅能url的路径一模一样的时候才能执行，如果不加，/signIn路由下也可打开'/'下的页面 */}
            </BrowserRouter>
        </div>
    );
}

export default App;
