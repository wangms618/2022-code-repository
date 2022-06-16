import React, { useContext } from "react";
import { appSetStateContext } from "../AppState";
import { RobotProps } from "./Robot";
// hoc一般使用with开头
export const withAddToCart = (
    ChildComponent: React.ComponentType<RobotProps>
) => {
    // 返回一个组件
    // return class extends React.Component {};
    return props => {
        const setState = useContext(appSetStateContext);
        const addToCart = (id, name) => {
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
            <ChildComponent {...props} addToCart={addToCart}></ChildComponent>
        );
    };
};

export const useAddToCart = () => {
    const setState = useContext(appSetStateContext);
    const addToCart = (id, name) => {
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
    return addToCart;
};
