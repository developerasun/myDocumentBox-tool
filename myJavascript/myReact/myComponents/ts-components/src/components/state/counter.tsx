import * as React from 'react';

type CounterState = { 
    count : number
}

type CounterAction = {
    type : string
    payload : number
}

const initialState = { count : 0 }
function reducer(state:CounterState, action: CounterAction) { 
    switch(action.type) {
        case 'increment': 
            return { count: state.count + action.payload }
        case 'decrement' : 
            return { count: state.count - action.payload }
        default : 
            return state
    }
}

export function Counter () {
    // useReducer is usually preferable to useState 
    // when you have complex state logic that involves 
    // multiple sub-values. It also lets you optimize 
    // performance for components that trigger deep updates
    // because you can pass dispatch down instead of callbacks.
    // useReducer takes reducer functions and a state as argument
    const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <div>
      <p>Count : {state}</p>
      <button onClick={()=>dispatch( { type : 'increment', payload : 10 })}>Increase by 10</button>
      <button onClick={()=>dispatch( { type: 'decrease', payload : 10 } )}>Decrease by 10</button>
    </div>
  );
}
