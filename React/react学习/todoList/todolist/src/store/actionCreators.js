import {
    ADD_TODO_ITEM,
    DELETE_TODO_ITEM,
    CHANGE_INPUT_VALUE,
    CHANGE_SWITCH_TITLE,
    ADD_DONE_ITEM
} from "./types";
import {
    useDispatch
} from "react-redux"
export const mapDispatchToProps = () => {
    const dispatch = useDispatch()
    return {
        getInputChangeAction: (value) => {
            const action = {
                type: CHANGE_INPUT_VALUE,
                value
            };
            dispatch(action);
        },
        getAddItemAction: () => {
            const action = {
                type: ADD_TODO_ITEM,
            };
            dispatch(action);
        },
        getDeleteItemAction: (index) => {
            const action = {
                type: DELETE_TODO_ITEM,
                index: index,
            };
            dispatch(action);
        },
        getChangeSwitchAction: () => {
            const action = {
                type: CHANGE_SWITCH_TITLE,
            }
            dispatch(action)
        },
        getAddDoneItemAction: (index) => {
            const action = {
                type: ADD_DONE_ITEM,
                index
            }
            dispatch(action)
        }

    }
}
// export const getInputChangeAction = (value) => {
//     const action = {
//         type: CHANGE_INPUT_VALUE,
//         value
//     };
//     store.dispatch(action);
// }

// export const getAddItemAction = () => {
//     const action = {
//         type: ADD_TODO_ITEM,
//     };
//     store.dispatch(action);
// }

// export const getDeleteItemAction = (index) => {
//     const action = {
//         type: DELETE_TODO_ITEM,
//         index: index,
//     };
//     store.dispatch(action);
// }

// export const getChangeSwitchAction = () => {
//     const action = {
//         type: CHANGE_SWITCH_TITLE,
//     }
//     store.dispatch(action)
// }

// export const getAddDoneItemAction = (index) => {
//     const action = {
//         type: ADD_DONE_ITEM,
//         index
//     }
//     store.dispatch(action)
// }