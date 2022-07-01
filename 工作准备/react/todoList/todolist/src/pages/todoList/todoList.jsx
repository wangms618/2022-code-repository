import React, { Component, Fragment } from "react";
import styles from "./todoList.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";
import store from "../../store";
import {
    getInputChangeAction,
    getAddItemAction,
    getDeleteItemAction,
    getChangeSwitchAction,
} from "../../store/actionCreators";
import { DisplayDone } from "../../const";
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange); // 响应式获取store数据
    }

    handleInputChange(e) {
        getInputChangeAction(e.target.value);
    }

    handleBtnClick() {
        getAddItemAction();
    }

    handleItemDelete(index) {
        getDeleteItemAction(index);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }

    handleChangeSwitch() {
        getChangeSwitchAction();
    }
    render() {
        return (
            <Fragment>
                <div className={styles.container}>
                    <div className={styles["container-content"]}>
                        <Input
                            allowClear
                            value={this.state.inputValue}
                            onChange={this.handleInputChange}
                            placeholder="todo Info"
                            style={{ width: "600px", marginRight: "10px" }}
                        />
                        <Button onClick={this.handleBtnClick.bind(this)}>
                            提交
                        </Button>
                        {/* 两层表，一个是完成的表，一个是未完成的表，然后利用一个按钮来切换表 */}
                        <List
                            bordered
                            dataSource={
                                this.state.switchTitle === DisplayDone
                                    ? this.state.list
                                    : this.state.finishedList
                            }
                            renderItem={(item, index) => (
                                <List.Item
                                    actions={[
                                        <a
                                            key="list-delete"
                                            onClick={this.handleItemDelete.bind(
                                                this,
                                                index
                                            )}
                                        >
                                            delete
                                        </a>,
                                        <a key="list-done">done</a>,
                                    ]}
                                >
                                    {item}
                                </List.Item>
                            )}
                            style={{ width: "600px", marginTop: "10px" }}
                        />
                        <div className={styles["container-content__switch"]}>
                            <Button
                                onClick={this.handleChangeSwitch.bind(this)}
                            >
                                {this.state.switchTitle}
                            </Button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default TodoList;
