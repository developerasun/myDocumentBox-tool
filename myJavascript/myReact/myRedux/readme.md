# Learning Redux essentials
Redux is a state management framework that is used not only by React but other libraries. 

# Redux Store
is a single state object manages a whole application's state.

- State update in the application should only be done with <bold>Redux store</bold>, which is the single object created with createStore method.
- createStore methods takes a reducer function, which takes/returns a state.
- All state update get triggered by action dispatch.

store.subscribe calls a listener function that gets triggered every time the store is updated. 

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

# Reducer
<p>
Reducer is a function that is responsible for changing a state, corresponding delivered actions by dispatch method. 
</p>

<p>
<bold>The only job</bold> of the reducer takes state and action as arguments and returns a new state. The new state must be a copy of the original state and the reducer should not touch it in any way. 
</p>

