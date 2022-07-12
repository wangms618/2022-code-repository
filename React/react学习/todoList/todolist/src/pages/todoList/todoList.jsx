import React, { useState } from "react";
import styles from "./todoList.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Input, Button, List } from "antd";
import store from "../../store";
import { DisplayDone } from "../../const";
import { mapDispatchToProps } from "../../store/actionCreators";
import { useSelector } from "react-redux";

export const TodoList = () => {
    const state = useSelector(state => state);
    const dispatch = mapDispatchToProps();
    const handleInputChange = e => {
        dispatch.getInputChangeAction(e.target.value);
    };
    const handleBtnClick = () => {
        dispatch.getAddItemAction();
    };
    const handleItemDelete = index => {
        dispatch.getDeleteItemAction(index);
    };
    const handleChangeSwitch = () => {
        dispatch.getChangeSwitchAction();
    };
    const handleItemDone = () => {
        dispatch.getAddDoneItemAction();
    };

    return (
        <div className={styles.container}>
            <div className={styles["container-content"]}>
                <Input
                    allowClear
                    value={state.inputValue}
                    onChange={handleInputChange}
                    placeholder="todo Info"
                    style={{ width: "600px", marginRight: "10px" }}
                />
                <Button onClick={handleBtnClick}>提交</Button>
                {/* 两层表，一个是完成的表，一个是未完成的表，然后利用一个按钮来切换表 */}
                <List
                    bordered
                    dataSource={
                        state.switchTitle === DisplayDone
                            ? state.list
                            : state.finishedList
                    }
                    renderItem={(item, index) => (
                        <List.Item
                            actions={[
                                <div
                                    key="list-delete"
                                    onClick={handleItemDelete(index)}
                                >
                                    delete
                                </div>,
                                <div
                                    key="list-done"
                                    onClick={handleItemDone(index)}
                                >
                                    done/back
                                </div>,
                            ]}
                        >
                            {item}
                        </List.Item>
                    )}
                    style={{ width: "600px", marginTop: "10px" }}
                />
                <div className={styles["container-content__switch"]}>
                    <Button onClick={handleChangeSwitch}>
                        {value.switchTitle}
                    </Button>
                </div>
            </div>
        </div>
    );
};
