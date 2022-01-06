# Learning Redux essentials
Redux is a state management framework that is used not only by React but other libraries. 

# Contents covered
- Creating a Redux.createStore
- Creating action/actionCreator
- Dispatching action to store
- Updating store with Reducer
- Multiple Reducers
- Handling asynchronous actions
- First Redux App

# Redux Store
is a single state object that manages a whole application's state. The state must not be directly modified(immutable state, enabling time-travel debugging)

- State update in the application should only be done with <bold>Redux store</bold>, which is the single object created with createStore method.
- createStore methods takes a reducer function, which takes/returns a state.
- All state update get triggered by action dispatch.

store.subscribe calls a listener function that gets triggered every time the store is updated. 

<p>
Redux.createStore(*callback) => store.dispatch(state) => store updated => store.subscribe(**callback) 
</p>
<p>

- *callback : reducer(state, *action) => state case specified with switch/case statement
- *action : an object with type property
- **callback : listener function, executed every time the store is updated

</p>

<p>
To keep the state's immutability, exploit spread operator, concat, slice in array and Object.assign in object.
</p>

# Action 
<p>
An action in Redux is a Javascript object carrying event information. Actions must have a 'type' property, which documents what type of action has occured. Declare Redux action by creating an object with type property like below
</p>

```Javascript
const action = { type : "LOGIN" }; 
```

<ol>

- Redux action ===(events info)===> Redux store
- Redux store updates a state
</ol>

<p>
A common practice in Redux is to assign action types as read-only contant variables, rather than string values. 
</p>

<p>
Oftentimes, action comes with data and Redux needs to handle it. 
</p>

## Action creator
Action is delivered to Redux store by action creator. Action creator in Redux is a simply Javascript function that returns an action(object). 

```Javascript
  function actionCreator() { 
      return action;
  }
```

## Action Dispatch
Action is sent to Redux.store by dispatch method like below. 

```Javascript
Redux.store.dispatch(actionCreator()); // actionCreator returns an action(object with type property)

Redux.store.dispatch({ type:"LOGIN" }); // actionCreator returns an action(object with type property)


```

## Asynchronous action
Asynchronous actions are essential parts of web development. Redux provides a middleware called Redux Thunk. 

- Redux.applyMiddleware method provides a second parameter to Redux.createStore method. 

<ol>

- Requesting data with dispatch
- API calls
- Receiving data with dispatch
</ol>

# Reducer
<p>
Reducer is a function that is responsible for changing a state, corresponding delivered actions by dispatch method. 
</p>

<p>
<bold>The only job</bold> of the reducer takes state and action as arguments and returns a new state. The new state must be a copy of the original state and the reducer should not touch it in any way. 
</p>

- when appliction is relatively simple : one reducer
- when complicated : multiple reducers, combineReducer method provided by Redux.

```Javascript
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer, 
  notes: notesReducer
})
```

Once rootReducer, which contains multiple Reducers, is created, it will be delivered to Redux.createStore method as a callback.


# First Redux App
```Javascript
// goal : to create a simple Redux app that increases/decreases by 1

const INCREMENT = "INCREMENT"; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

const counterReducer = function( state=0 , action ) {
    switch(action.type) {
        case INCREMENT : 
            return state+1;
        case DECREMENT : 
            return state-1;
        default : // don't forget to return default
            return state;
    }
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => { 
    return {
        type: INCREMENT
    }
}; // Define an action creator for incrementing

const decAction = () => {
    return { 
        type: DECREMENT
    }
}; // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
```