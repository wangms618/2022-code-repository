import React, { useState } from "react";

interface AppStateValue {
    username: string;
    shoppingCart: { items: { id: number; name: string }[] };
}

// Context上下文
const defaultContextValue: AppStateValue = {
    username: "老鱼吃虾米",
    shoppingCart: { items: [] },
};

export const appContext = React.createContext(defaultContextValue);
export const appSetStateContext = React.createContext<
    React.Dispatch<React.SetStateAction<AppStateValue>> | undefined
>(undefined);

export const AppStateProvider: React.FC = props => {
    const [state, setState] = useState(defaultContextValue);
    return (
        <appContext.Provider value={state}>
            <appSetStateContext.Provider value={setState}>
                {/* @ts-ignore */}
                {props.children}
            </appSetStateContext.Provider>
        </appContext.Provider>
    );
};
