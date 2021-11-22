# Learning React essentials
- What is it : Javascript UI library
- Why learn : is one of the core skill set of front end developer
- What to learn : React, JSX, Redux
- Runtime : Node JS
- Rivals : Vue, Angular
- One step further : React with Typescript
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

By building components in a component, a complicated UI component is made.
</p>

```JSX
function Bookshelf(props) {
    return <li>{props.title} is in {props.category} section.</li>
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
    <Card />, // component name : App
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

# Additional
- What is webpack : a static module bundler for large scale SPA projects
- What is babel : a JS transcompiler (ECMA6++ => ECMA5--)
