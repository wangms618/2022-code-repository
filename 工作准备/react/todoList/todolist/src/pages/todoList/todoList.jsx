import React, { Component, Fragment } from "react";
// import styles from "./todoList.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";
import store from "../../store";
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange); // 响应式获取store数据
    }

    handleInputChange(e) {
        const action = {
            type: "change_input_value",
            value: e.target.value,
        };
        store.dispatch(action);
    }

    handleBtnClick() {
        const action = {
            type: "add_todo_item",
        };
        store.dispatch(action);
    }

    handleItemDelete(index) {
        const action = {
            type: "delete_todo_item",
            index: index,
        };
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    render() {
        return (
            <Fragment>
                <div style={{ marginTop: "10px", marginLeft: "10px" }}>
                    <Input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange}
                        placeholder="todo Info"
                        style={{ width: "300px", marginRight: "10px" }}
                    />
                    <Button onClick={this.handleBtnClick.bind(this)}>
                        提交
                    </Button>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={(item, index) => (
                            <List.Item
                                onClick={this.handleItemDelete.bind(
                                    this,
                                    index
                                )}
                            >
                                {item}
                            </List.Item>
                        )}
                        style={{ width: "300px", marginTop: "10px" }}
                    />
                </div>
            </Fragment>
        );
    }
}

export default TodoList;
