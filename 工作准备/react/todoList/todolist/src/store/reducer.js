import {
    ADD_TODO_ITEM,
    ADD_DONE_ITEM,
    DELETE_TODO_ITEM,
    CHANGE_INPUT_VALUE,
    CHANGE_SWITCH_TITLE
} from "./types"
import {
    DisplayDone,
    DisplayUndone
} from "../const"
const defaultState = {
    switchTitle: DisplayDone,
    inputValue: "",
    list: [],
    finishedList: []
}

// reducer可以接受action，但是不能修改state
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.inputValue = action.value
            return newState;
        case ADD_TODO_ITEM:
            if (newState.inputValue === "") {
                return newState
            }
            newState.list.push(newState.inputValue)
            newState.inputValue = ""
            return newState;
        case DELETE_TODO_ITEM:
            newState.list.splice(action.value, 1)
            return newState;
        case CHANGE_SWITCH_TITLE:
            newState.switchTitle = newState.switchTitle === DisplayDone ? DisplayUndone : DisplayDone
            return newState
        case ADD_DONE_ITEM:
            // TODO 将传过来的index取到，加入finishedList中
        default:
            return newState
    }
}