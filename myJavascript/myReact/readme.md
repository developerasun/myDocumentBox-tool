# Learning React essentials
- What is it : Javascript UI library
- Why learn : is one of the core skill set of front end developer
- What to learn : React, JSX, Redux
- Runtime : Node JS
- Rivals : Vue, Angular
- One step further : React with Typescript, React with Node JS 
- Goal : refactoring Meow Canvas with React/JS or React/TS

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
React component's lifecycle is as follows.
- mounting
- updating
- unmounting

<img src="reference/react-component-lifecycle.png" width=900 height=400/>

# Additional
- What is webpack : a static module bundler for large scale SPA projects
- What is babel : a JS transcompiler (ECMA6++ => ECMA5--)

# Reference
[Goorm Edu - my first React (KOR)](https://edu.goorm.io/learn/lecture/12976/%EC%B2%98%EC%9D%8C-%EB%A7%8C%EB%82%9C-react-%EB%A6%AC%EC%95%A1%ED%8A%B8)

