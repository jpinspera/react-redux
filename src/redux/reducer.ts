import { ActionType } from "./action"

interface initialValueType  {
    count: number
}

const initialValue = {
    count: 0
}
const countReducer = (state: initialValueType = initialValue, action: ActionType) => {
    switch(action) {
        case ActionType.INCREMENT:
            return {
                ...state,
                value: state.count + 1
            }
        case ActionType.DECREMENT:
            return {
                ...state,
                value: state.count - 1
            }
        case ActionType.RESET:
            return {
                ...state,
                value: 0
            }
        default:
            return {
                ...state,
            }
    }
}

export default countReducer;