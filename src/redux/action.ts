
export enum ActionType {
    INCREMENT = "INCREMENT",
    DECREMENT = "DECREMENT",
    RESET = "RESET",
};

export const increment = (value: number) => ({
    type: ActionType.INCREMENT,
    value,
});

export const decrement = (value: number) => ({
    type: ActionType.DECREMENT,
    value,
})

export const reset = () => ({
    type: ActionType.RESET
})
