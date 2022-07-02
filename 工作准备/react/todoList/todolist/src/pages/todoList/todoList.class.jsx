import React, { Component, Fragment } from "react";
import styles from "./todoList.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";
import store from "../../store";
import { mapDispatchToProps } from "../../store/actionCreators";
import { DisplayDone } from "../../const";
import { connect } from "react-redux";

// state就是store的数据
const mapStateToProps = state => {
    return state;
};

class TodoListComponent extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleStoreChange = this.handleStoreChange.bind(this);
        // store.subscribe(this.handleStoreChange); // 响应式获取store数据
    }

    handleInputChange(e) {
        // getInputChangeAction(e.target.value)
        this.props.getInputChangeAction(e.target.value);
    }

    handleBtnClick() {
        // getAddItemAction();
        this.props.getAddItemAction();
    }

    handleItemDelete(index) {
        // getDeleteItemAction(index);
        this.props.getDeleteItemAction(index);
    }
    // handleStoreChange() {
    //     this.setState(store.getState());
    // }

    handleChangeSwitch() {
        // getChangeSwitchAction();
        this.props.getChangeSwitchAction();
    }
    handleItemDone() {
        // getAddDoneItemAction();
        this.props.getAddDoneItemAction();
    }
    render() {
        return (
            <Fragment>
                <div className={styles.container}>
                    <div className={styles["container-content"]}>
                        <Input
                            allowClear
                            value={this.props.inputValue}
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
                                this.props.switchTitle === DisplayDone
                                    ? this.props.list
                                    : this.props.finishedList
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
                                        <a
                                            key="list-done"
                                            onClick={this.handleItemDone.bind(
                                                this,
                                                index
                                            )}
                                        >
                                            done/back
                                        </a>,
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
                                {this.props.switchTitle}
                            </Button>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}
// connect参数，第一个为state，第二个是dispatch方法
export const TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoListComponent);
