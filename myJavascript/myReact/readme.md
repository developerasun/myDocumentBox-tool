# Learning React essentials
- What is it : Javascript UI library
- Why learn : is one of the core skill set of front end developer
- What to learn : React, JSX, Redux
- Runtime : Node JS
- Rivals : Vue, Angular
- One step further : React with Typescript, React with Node JS 
- Goal : refactoring Meow Canvas with React/JS or React/TS

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

# What is element in React
the smallest unit in React codes. It shows what is displayed in screen. 

- Immutable, meaning can't add or change once react element is created. 
- Updated in virtual DOM and reflected to actual DOM. 
- [What is Virtual DOM in React?](https://www.codecademy.com/articles/react-virtual-dom)

<details>
    <summary>DOM comparison(click to unfold) </summary>
    <img src="reference/virtual-dom-browser-dom.png" width=660 height=450/>
</details>

```JSX
// element in react
const element = <h1> Hello React </h1>

// Root DOM node : one and only. manages all the child elements
<div id="root"></div>

// ReactDom.render(element, container) - redners a React element and returns a referecne to that. Only mutate partial DOM if the previous element needs an update. 
ReactDom.render(
    element, 
    document.getElementById('root')
); 

```

# Components and Props(properties)
Component and property is the building blocks of React.
- Javascript : input => function => output
- React : property => component => element

## Component 
<p>
Component is an important subject in React since React is component-based. Think of it as class in Python, function in Javascript, meaning it is a template used to make objects. Component should act like pure functions, maintaining props. Component name should always start with Capital. 

- name starts with lower case => tag 
- name starts with upper case => component

</p>

<p>
Types of React components is as follows : 

- function component
- class component

Stacking too many elements in a component is a overkill. By spliting elements in a component, a reusuable UI component can be made. Classify related elements and make them a component for future reuse. 
</p>

<p>
If a component returns null, it won't be rendered. For example, look at below codes.
</p>

```JSX
function MyComponent(props) { 
    if (!props.shouldRender) {
        return null;
    } 
    return ( // parenthesis() are used to return an object. not required to express a single line. curly braces {} are used to evaluate JS expression. 
        <h1>Component rendered!</h1>
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

### Controlled component
Form elements that are controlled by React, meaning that the state of the elements is stored in a state and only can be changed with setState method. It has a merit that a developer can control user input with the setState method. For example, 

```JSX
handleChange(event) {
    this.setState( {
        value: event.target.value.toUpperCase() // change what user typed into uppercase. 
    });
}

``` 

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

# State and lifecycle
## State
<p>
State is a very important concept in React. State is the state of React component, meaning the component's data(the object in Javascript). It is defined by developer and should only include the data related to rendering. 
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

    return e(
        'button',
        { onClick:()=>this.setState({ opened:true }) },
        'Close the door'
    )
}

```

</details>

## Lifecycle
React component's lifecycle and React's corresponding lifecycle method is as follows.
- mounting(create) : componentDidMount
- updating(update) : componeetDidUpdate
- unmounting(delete) : componentWillUnmount
- <img src="reference/react-component-lifecycle.png" width=900 height=400/>

<details>
    <summary>Code example (tab to unfold)</summary>

```JSX
    componentDidMount() {
        console.log(`${this.props.id} componentDidMount() called`);
    }

    //componentDidUpdate : Called immediately after updating occurs. 
    // Not called for the initial render.
    componentDidUpdate() {
        console.log(`${this.props.id} componentDidUpdate() called`);
    }

    // Called immediately before a component is destroyed. 
    // Perform any necessary cleanup in this method
    componentWillUnmount() {
        console.log(`${this.props.id} componentWillUnmount() called`);
    }

```

</details>

when components created, the order of a list of methods called is as follows. 
- <img src="reference/component-did-mount.png" width=440 height=280/>

when components deleted, the order of a list of methods called is as follows.
- <img src="reference/react-component-lifecycle.png" width=460 height=400/>

Note that every componentDidUpdate method is called right after a new component is created/deleted.

# React App browser configuration
Open React app in Chrome to exploit React developer tools. 

- [Download React dev tools here](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

And then, follow below instructions to set Chrome browser for npm start. 

<ol>
    <li>Create a new file named .env in your project folder</li>
    <li>Type followings and save it : BROWSER=chrome</li>
    <li>npm start</li>
</ol>

<img src="reference/react-dev-tool.png" width=800 height=700/>

# Conditional rendering
Depending on control logic, what is render would vary.  

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

# Additional
- What is webpack : a static module bundler for large scale SPA projects
- What is babel : a JS transcompiler (ECMA6++ => ECMA5--)

# Reference
[Goorm Edu - my first React (KOR)](https://edu.goorm.io/learn/lecture/12976/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-react-%EB%A6%AC%EC%95%A1%ED%8A%B8)

