import { useReducer } from "react"

type CounterState = {
    count: number
}

type UpdateAction = {
    type: 'increment' | 'decrement' | ''
    payload?: number
}

type ResetAction = {
    type: 'reset'
}

type CounterAction = UpdateAction | ResetAction

const initialState = {count: 0}

function reducer(state: CounterState, action: CounterAction) {
    switch(action.type) {
        case 'increment':
            // return {count: state.count + (action.payload as number)}
            return {count: state.count + action.payload!}
        case 'decrement':
            return {count: state.count - action.payload!}
        default:
            return state
    }
}

export const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'increment', payload: 10})}>
                Incremetn 10
            </button>
            <button onClick={() => dispatch({type: 'decrement', payload: 10})}>
                decrement 10
            </button>
        </>
    )
}