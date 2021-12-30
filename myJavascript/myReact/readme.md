# Learning React essentials
- What is it : Javascript UI library
- Why learn : is one of the core skill set of front end developer
- What to learn : React, JSX, Redux, React-Redux
- Runtime : Node JS
- Rivals : Vue, Angular
- One step further : React with Typescript, React with Node JS 
- Goal : Meow canvas refactoring with React/TS 

Check your React version with below command
```Javascript
npm view react version
```

## Directory configuration
- myComponents : exercise my own React codes (JS/TS)
- myFreeCodeCamp : basic React and Redux
- net-ninja : React tutorials (Query, Material UI, Testing, Context)

## Table of Contents
- [Create a React app]()
- [Components and Props]()
- [State and Lifecycle]()
- [Unidirectional data flow in React]()
- [Styling in React]()
- [React with Redux]()
- [Reference]()

# Create a React app
```Javascript
npx create-react-app
```
Once you create a react app, look at the directories to get more understanding of React. 
- /public : index.html => root div
- /src : React codes contained
- /src/App.js : Updates and compile React codes
- /src/index.js : Imports React, ReactDOM, reportWebVitals, and css files
- Everything loads into App component and export the App component into index.js
- class component : (constructor) + render(required). A class component must include render method and return statement only can return one parent element. 
- simple component : does not use class keyword 

<details>
    <summary>What is reportWebVitals in React?</summary>
    A built-in tool to measure your React app performance.

    ```javascript
    import reportWebVitals from './reportWebVitals'; 
    reportWebVitals(console.log);
    ```
</details>

# Element in React
the smallest unit in React codes. It shows what is displayed in screen. 

- Immutable, meaning can't add or change once react element is created. 
- Updated in virtual DOM and reflected to actual DOM. 
- [What is Virtual DOM in React?](https://www.codecademy.com/articles/react-virtual-dom)

<details>
    <summary>DOM comparison(click to unfold) </summary>
    <img src="reference/virtual-dom-browser-dom.png" width=660 height=450/>
</details>

<p>
React has its own strength in performance since it updates HTML DOM where only update needed by exploiting virtual DOM. 

- 1. State changes (update needed)
- 2. Render virtual DOM
- 3. Updates the actual DOM

</p> 

```JSX
// element in react
const element = <h1> Hello React </h1>

// Root DOM node : one and only. manages all the child elements
<div id="root"></div>

// ReactDom.render(element, container) - renders a React element and returns a reference to that. Only mutate partial DOM if the previous element needs an update. 
ReactDom.render(
    element, 
    document.getElementById('root')
); 

```

# Components and Props
Component and props(properties) is the building blocks of React.
- Javascript : input => function => output
- React : property => component => element

## Component 
<p>
Component is an important subject in React since React is component-based. Think of it as class in Python, function in Javascript, meaning it is a template used to make objects. Component should act like pure functions, maintaining props. <strong>Component name should always start with Capital.</strong> 

- name starts with lower case => tag 
- name starts with upper case => component

</p>

<p>
Types of React components is as follows : 

- Stateless functional component : Pure function. If take the same input, returns the same output. Does not use internal state. 
- Stateful class component : Use internal state. 
</p>

<p>
A common practice is to minimize statefulness and exploit stateless functional component whenever possible. It improves apllication development/maintenance. 
</p>

<p>
Stacking too many elements in a component is a overkill. By spliting elements in a component, a reusuable UI component can be made. Classify related elements and make them a component for future reuse. 
</p>

<p>
If a component returns null, it won't be rendered. For example, look at below codes.
</p>

```JSX
function MyComponent(props) { 
    // Javascript value here
    if (!props.shouldRender) {
        return null;
    } 
    return ( // parenthesis() are used to return an object. not required to express a single line. curly braces {} are used to evaluate JS expression. 
        <h1>Component rendered!</h1> // JSX value here
        <h2>Try again!</h2>
    );
}
```

<p>
What is a super in class component?

```JSX
// initialize state
constructor(props) {
    //  Must call super constructor in derived class
    //  before accessing 'this' or returning from derived constructor
    // super is a parent class contructor, which defines 'this' keyword.
    // without super(props) defined, 'this' keyword won't be available below codes.
    // see here for more details : https://overreacted.io/why-do-we-write-super-props/#:~:text=In%20JavaScript%2C%20super%20refers%20to,ve%20called%20the%20parent%20constructor.
    super(props);
    this.state = {
      btnName : "hello react"
    };
  }
```

</p>

```JSX
// Bookshelf component
function Bookshelf(props) { // property
    return <li>{props.title} is in {props.category} section.</li> // element
}

function Card() {
    return (
        <div>
            <Bookshelf title="Hello React" category="front end"/>
            <Bookshelf title="Introduction to VR" category="VR/AR"/>
            <Bookshelf title="Mastering Go" category="Backend"/>
        </div>
    );
}

// ReactDOM.render(element, container)
ReactDOM.render( 
    <Card />, // component name : Card
    document.getElementById('root')
); 

```

### Controlled Input
To add data to backend side, we need to add a POST request in front end side. Input values in form tag will be changed based on React state changes, meaning form values and states are synced with each other.

```JSX
handleChange(event) {
    this.setState( {
        value: event.target.value.toUpperCase() // change what user typed into uppercase. 
    });
}

``` 

<p>
Form elements that are controlled by React, meaning that the state of the elements is stored in a state and only can be changed with setState method. It has a merit that a developer can control user input with the setState method. 
</p>

HTML file tag is an uncontrolled component since it is read-only. 
```HTML
<form action="http:localhost/example.html" method="post" enctype="multipart/form-data" >
    <input type="file" />
</form>
```

<details>
    <summary>What is input null value? (tap to unfold) </summary>
    If input has a null value, it enables to enter some data. If not(when some value is hard-coded), not enabled.
</details>

## Property
Props are inputs to the components. They are read-only and pure. 

<details>
    <summary>React components in website (click to unfold)</summary>

- <img src="reference/react-component.jpg" width=400 height=600/>
- <img src="reference/components-in-component.png" width=500 height=450/>
    
</details>

### Default Props and Props Type Check
You can set default prop in React. React assigns default props if the props are undefined. When null passed, it will remain null. Note that propTypes and defaultProps is set through object.

```Javascript
function MyComponent() {
    return <p>Hello React</p>
}
MyComponent.defaultProps = { author: "Jake Sung" }
```

Also, prop type checking is supported with PropTypes.type. 

```Javascript
function MyComponent() {
    return <p>Hello React</p>
}
MyComponent.propTypes = { myFunc : PropTypes.func.isRequired }
// As of React v15.5.0++, PropTypes is independently imported.
import PropTypes from 'prop-types' 
```

# State and Lifecycle
## State
<p>
State is a very important concept in React. State is the state of React component, meaning the component's data(the object in Javascript). It is defined by developer and should only include the data related to rendering. 
</p>

<p>
When state is defined in a class component, it is <strong>fully encapsulated and local.</strong> No other components are aware of the state. 
</p>

<details>
    <summary>setState method in React(tab to unfold)</summary>
React manages the state thus state should only be changed with a setState method, meaning that developer should not change the state directly. 

```JSX
// Define Door component
class Door extends React.Component {
    constructor(props){
        super(props);

        // Javascript object in React
        this.state = {
            opened: false
        };
    }
}

// Rendering
render() {
    if (this.state.opened) {
        return "Please close the door";
    }

    return (
        'button',
        { onClick : () => this.setState( { opened:true }) },
        'Close the door'
    )
}

```

</details>

### Shared state
<p>
A state that is shared with various sub-components, removing possible duplicates of state. For example, if a person component has a name state, sub-components German and Russian do not have to have the name state in their components. 
</p>
<p>
Sharing state is done by moving the state up to the closest common ancestor of the components that need it - which is called lifting state up. 
</p>

```JSX

// shared state not lifted up. 
class Russian extends React.Component {
    // ~
    this.state = { name:"", bear : ""}; 
    // ~ 
}
class German Extends React.Component {
    // ~
    this.state = { name:"", beer : "" }; 
    // ~ 
}

// shared state lifted up
class Person extends React.Component {
    this.state = { name : "" }
}
class Russian extends React.Component {
    this.state = { bear : "" }; 
}
class German Extends React.Component {
    this.state = { beer : "" }; 
}

```

## Lifecycle
React component's lifecycle and React's corresponding lifecycle method is as follows.
- mounting(create) : componentDidMount
- updating(update) : componentDidUpdate
- unmounting(delete) : componentWillUnmount
- <img src="reference/react-component-lifecycle.png" width=900 height=400/>

<details>
    <summary>Code example (tab to unfold)</summary>

```JSX
    // Best practice : placing API calls in componentDidMount.
    // Any calls to setState here will cause a re-rendering of your component. 
    componentDidMount() {
        setTimeout(()=>{
            this.setState({name : "Jake"})
        }, 2000)
    }

    // componentDidUpdate : Called immediately after updating occurs. 
    // Not called for the initial render.
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called`);
    }

    // Called immediately before a component is destroyed. 
    // Perform any necessary cleanup for component in this method. e.g : removing eventListener
    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick)
    }

```

</details>

when components created, the order of a list of methods called is as follows. 
- <img src="reference/component-did-mount.png" width=440 height=280/>

when components deleted, the order of a list of methods called is as follows.
- <img src="reference/react-component-lifecycle.png" width=460 height=400/>

Note that every componentDidUpdate method is called right after a new component is created/deleted.

<details> 
    <summary>React Dev Tool</summary> 

- [Download React dev tools here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

And then, follow below instructions to set Chrome browser for npm start. 

<ol>
    <li>Create a new file named .env in your project folder</li>
    <li>Type followings and save it : BROWSER=chrome</li>
    <li>npm start</li>
</ol>

<img src="reference/react-dev-tool.png" width=800 height=700/>

Most web developers handle API endpoint call to fetch data. In React, best practice of this is to place the API calls in componentDidMount method. The component will automatically re-render.

</details>


# Conditional rendering
Depending on control logic, what is rendered would vary.  

```JSX
// greeting message for a signed up user 
function UserGreeting(props) { // the first letter of component name should be in captial
    const userName = props.username;
    return <h1>Welcome back, {userName}</h1>
} 

// greeting message for a new guest 
function GuestGreeting(props) {
    const guest = props.guest;
    return <h1>Welcome, {guest}</h1>
} 

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;

    if (props.isLoggedIn) {
        return <UserGreeting userName="jake"/>
    } else {
        return <GuestGreeting guest="guest" />
    }
}

ReactDOM.render(
    <Greeting  isLoggedIn={true} />, 
    document.getElementById('root')
);

```

# Element variable
Assign element to a variable like below. 

```JSX
    const isComputerOff = this.state.isComputerOff;
    let action;
    
    if (!isComputerOff) {
        action = <TurnOff onclick={this.handlerTurnOff} />
    } else {
        action = <TurnOn onclick={this.handlerTurnOn} />
    }
    
```

# Array and key
<p>
Array is a variable that contains a bunch of object in Javascript. Using array and provided array methods, reproducing a component can be easily done.
</p>
<p>
Indices in array can distinguish each item in the array but recommend to use an unique and not-easily-changable value as key. Be aware of assigning key value to array items to avoid errors like below
</p>

<img src="reference/react-list-key.png" width=520 height=75 />


<details>
    <summary>One more thing about the Key(tap to unfold)</summary>
    Key is not deliverable as props. Meaning, this.props.key does not exist and developer should manage this key property separately. 
</details>

# Composition
Composition means that a lot of components are gathered together to make a new component. Types of composition techinques is as follows :  

- containment : children props used in a component when sub-components are not decided yet. Props in a top component are delivered to a bottom component and children props in the bottom component are delivered to the top component.  

For example, 

```JSX
// Bottom component
function FancyBorder(props) {
    // props.children => MyBox component
    return (
        <div className="myFancyBorder">
            {props.children} 
        </div>
        );
}

// Top component
function MyBox() { 
    // JSX(h1, p) => FancyBorder component 
    return (
        <FancyBorder>
            <h1>Hello Box</h1> 
            <p>Do you want to open this box?</p>
        </FancyBorder>
    );
}

```

- Specialization : a common concept in object-oriented programming, implemented with inheritance. For example, in Python : 

```Python
class Animal :
    def __init__(self, habitat) : 
        self.habitat = habitat
    def walk(self) : 
        return f"it is walking in {self.habitat}" 

class Dog(Animal) : 
    def __init__(self, habitat) : 
        self.habitat = habitat
    def bark(self) :
        return "bark bark"

myDog = Dog("London")
print(myDog.walk())
print(myDog.bark())

```

<p>
In React, specialization is implemented with composition. Facebook engineers recommend to not use inheritance in React but should be done in a composition manner.
</p>

# Unidirectional data flow in React
<p>
React has a unidirectional data flow, meaning that data only flows from parent component to child one. The chilld component only receives the state data they need. State management is done in one part of codes and UI rendering is done in another part(separation)
</p>

```JSX
class MyApp extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = { 
            name: "Jake"
        }
    }
    // class component must have a render method
    render() { 
        return (
            <Person name={this.state.name} />
        )
    }
}

class Person extends React.Component {
    constructor(props) { 
        super(props)
    }
    render() { 
        return (
            <h1>My name is : {this.props.name}</h1> // passing state as props
        )
    }
}
```

<p>
You can also pass function, method. This is React way of communicating between parent component and child component. The passed state/function can be accessed like below.

```
this.props.(its name)
```

```JSX
// delivering 'input', 'handleChange' attributes to custom HTML tag GetInput */}
<GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
```

</p>

# Styling in React
Inline styles is very common in React development. Set property and value in Javascript object form with camel case naming. Any hyphenated style properties should be converted to camel case in JSX.

```JSX
class Colorful extends React.Component {
    render() {
      return (
        <div style={
            {
                color: "red",
                fontSize: 72 // unit px is omitted
            }
        }>Big Red</div>
      );
    }
  };

```

For a larget set of styles, create a style object in a global constant variable to manage that.

```JSX
const styles = {
    color : "red",
    fontSize : 40, 
    border : "2px solid yellow" // do not add comma between.
}
```

# React with Redux
Connecting React with Redux is done like below. 

- 1. Creates a React component 
- 2. Creates a Redux store
- 3. Connect the component with the store using react-redux package

- React : Javascript view library
- Redux : State management framework. developed by React developers
- Redux => creates a single Redux store, managing application state
- React => subscribes to some of the store's data. If action dispatched, the React component gets updated
- When application gets bigger and complicated, using Redux is recommended
- Use react-redux package and pass Redux state/dispatch to React as props

## Provider
Provider is essential for React-Redux app. Provider is a wrapper component wrapping React app, accessing Redux store.

```JSX
<Provider store={store} > 
    <App/> 
</Provider>
```

## Connect
Connect is a method that connects React component with Redux, taking two optional arguments like below. It allows you to provide state and dispatch. Clarify what state and action you need so that component only approaches to the state it needs.

```javascript
connect(mapStateToProps, mapDispatchToProps)(MyComponent) // replace argument with null if needed
```

- mapStateToProps : provide a specific state to Redux store
- mapDispatchToProps : provide a specific action creator to dispatch action against Redux store

State and dispatch passed by mapStateToProps and mapDispatchToProps can be accessed as props in the MyComponent. 

# React Hooks
Hooks are added in React 16.08. Hooks API are useful to 

- make stateless components with function
- do easier state management without Redux/Mobx 

Hooks do not work inside class, meaning hook and class is incompatiable. You either use hook or class. 

<br>

<p>
Before the hook is introduced, if you want to add some state but you were working on function component, you had to re-write class component to add the state. Once hook is introduced, adding state in functional component becomes available. <strong>Hook names always start with "use"</strong> and embraces clousure in Javascript.
</p>

## Types of Hooks
- useState(initial state) : declare a state variable with initial state. Returns a current state and a function to update.
- useEffect(effect function)
- useContext
- useReducer
- useCallback .. and many more

## useState and useEffect
### useState
Let's see how useState hook is defined in React offical homepage. 
```
~ useState is a new way to use the exact same capabilities that this.state provides in a class. Normally, variables “disappear” when the function exits but state variables are preserved by React. ... React will remember its current value between re-renders, and provide the most recent one to our function.
```

```javascript

// class component with 'this' : A 
class MyComonent extends React.Component { 
    constructor(props) { 
        super(props)
        this.state = { 
            count : 0
        }
    }
}

// function component with 'hook' : B 
import { useState, useEffect } from "react"
const MyComponent = () => {
    const [count, setCount] = useState(0) // declare a state variable. 
}

// Component A and B is the same. 
```

### useEffect 
useEffect lets you perform side effects(listed below) in function components. By default, it runs both after the first render and after every update. It is similar to componentDidMount and componentDidUpdate. 

```
React updates DOM => React calls useEffect
```

- data fetching or other API
- setting up a subscription
- changing DOM

By using useEffect hook, your components will do something else additionally after render. Every time we re-render, we schedule a different effect, replacing the previous one.

```javascript
import { useState, useEffect } from "react"
const MyComponent = () => {
    const [count, setCount] = useState(0)

    useEffect(()=>{ // pass a function to useEffect
        document.title = `You clicked ${count} times` // in useEffect, you can access to the count in useState.
    })
}

```

#### Dependency
Dependency of useEffect decides when the useEffect hook runs based on the depenedency.

```javascript
const MyComponent = () => { 
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log(`${count} is increased by 1`)
    }, [count]) // [count] is a dependency of useEffect. If dependency given, useEffect would run only in the case of the dependency. If given emtpy array as a dependency, it will re-render at first time(initial render).
    handleClick(
        setCount(count + 1) //
    )
    return ( 
        <div>
            <button onclick={handleClick}>Click Me</button>
            <p>Increased count : {count}</p>
        </div>
    )
}
```

## Custom hooks
To increase code reusability, you can create your own hook and import the hook in different components. Consider custom hook nothing more than importing a new module in Javascript. You write a function, export it, and import it in another file. Remember that hook's name should start with 'use'.

```javascript 
// useMyHook.js
export const useMyHook = () => { 
    return <div>I am a custom hook!</div>
}

import { useMyHook } from './useMyHook'
function MyComponent() { 
    return (
        <div>
            <h1>My First Hook</h2>
            {useMyHook()}
        </div>
    )
}
```

# How website works
## Non-React Website
1. Web browser sends an initial request to server
2. Server responds with index.html 
3. The browser sends a new request based on what user did
4. Server responds with it.
5. Continues over and over

## React Website(Single Page Application)
The website built with React do not act like the above websites. React application delegates all the routings and resources to browser only.

1. Web browser sends an initial request to server
2. Server responds with index.html <strong>and React Javascript bundle</strong>
3. React/React router takes a full control of the application

<span>Empty HTML page of React app</span><br/>
<img src="reference/react-empty-html.png" width=700 height=440 />

4. React fills the empty HTML with components we created. 
5. If user did something thus a request is generated, React prevents to deliver the request to server and lock it.
6. React instead <strong>dynamically fills the content </strong> the user wanted into the HTML. 
7. This React work flow leads to less requests to a server, making the website faster. 

## React Router
Install React router with npm to control routing.

```javascript
npm install react-router-dom --save
```

React router package consists of : 1) Router 2) Switch 3) Route

- Router : a whole routing
- Switch : contains multiple route components, making sure only one route component is shown in browser at one time. Find the route and render a component that is inside the route component.
- Route : a single route component. Takes exact path or path parameter.

<span>React routing</span><br/>
<img src="reference/router-switch-route.png" width=670 height=700 />

### React Route Parameters
We really can't hard-code route parameters since user request changes. For example, asking blog posts by posting number could be 

- /blogs/123
- /blogs/456 <===== Can't hard-code this
- /blogs/789

So we can set a dynamic route paramter with colon in React like below

```javascript 
// Set a route parameter and devlier it as props in Link component. 
<Route path="/blogs/:postingNumber">

<Link to={`/blogs/${props.postingNumber}`}>Check the post</Link>

```

## React Router Link
To avoid React application sends a request to server when link clicked, React router link should be used instead of html a tag. 

```javascript
// Without React Router Link => Still send requests to server 
const Navigation = () => {
    return (
        <div>
            <a href="/">Main</a>  
            <a href="/contact">Contact</a>  
        </div>
    )
}

// With React Router Link : not sending requests to server
import { Link } from 'react-router-dom'
const Navigation = () => { 
    // Note that a href attribute is changed to Link 'to' props. 
    return ( 
        <div>
            <Link to="/"> Main </Link> 
            <Link to="/create"> Create </Link>
        </div>
    )
}

```

## useEffect Cleanup Function
As the name implies, it is a function inside the useEffect.
<br>
<p>
Cleanup function prevents application from unintended results such as memory leaks, improving the application's performance by removing what is not necessary before the component unmounts. 
</p>

<img src="reference/why-use-cleanup.png" width=700 height=120 />

<p>
Without the cleanup function, an error like the above one could happen. As the error log suggests, 1) cancel subscriptions 2) cancel asynchronous tasks not to update React state on components unmounted. 
</p>

```javascript
// Create a AbortController instance
const abortCtrl = new AbortController()

useEffect(()=>{
    // Connect the AbortController with fetch
    fetch(myUrl, { signal : abortCtrl.signal }) { 
        // do some operation
    } 
    // Cleanup the useEffect with the AbortController
    // When abort() is called, the fetch() promise rejects with a DOMException named AbortError.
    return () => { abortCtrl.abort() }

},[myUrl])

```

## SEO for React
React has its weakness at SEO(search engine optimization) and tackles the issue in its own way. 

Required SEO data for a typical website is as follows :
- Title
- Description
- Keywords
- Alt 
- Heading
- Canonical : html element that solve duplicated content issues. For example, 
- OpeanGraph : a protocol created by Facebook, used to standardize meta data usage within a webpage. Refer HTML lectures to find out more.  

You can try below to improve SEO in React is : 
- Server side rendering : mainly used but might be challenging to migrate. Use framework like Next.js for the migration, which helps SEO in React.

## Reference
- [React.org](https://reactjs.org/docs/hooks-effect.html)
- [Free code camp - Front End Development Libraries](https://www.freecodecamp.org/learn/front-end-development-libraries/)
- [Goorm Edu - my first React (KOR)](https://edu.goorm.io/learn/lecture/12976/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-react-%EB%A6%AC%EC%95%A1%ED%8A%B8)
- [LogRocket - understanding React useEffect cleanup](https://blog.logrocket.com/understanding-react-useeffect-cleanup-function/)
- [NetNinja - Full modern React](https://youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)
- [Codedamn - SEO For React Developers](https://youtu.be/j8OUmE4Vj3M)
- [Free code campe : What is Open Graph and how can I use it for my website?](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/)