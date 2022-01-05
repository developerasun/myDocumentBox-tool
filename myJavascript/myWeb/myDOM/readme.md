# Learning DOM essentials

Read MDN docs and summarzied essentials 

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

## Table of Contents
- Introduction to the DOM
- Using the W3C DOM Level 1 Core
- Traversing an HTML table with JavaScript and DOM 
- Interfaces
- Locating DOM elements using selectors
- How to create a DOM tree
- Introduction to events
- How whitespace is handled by HTML, CSS, and in the DOM
- Examples of web and XML development using the DOM

## Introduction to DOM
Document Object Model is an interface of a web page with object model perspective so that programming language can manipulate the web page. 

- Web page(document) <====== DOM <===== Javascript

Note that DOM is not a programming language but rather a web API to create websites. DOM is programming-language-independent, meaning it can be built with any language. 

```python 
import xml.dom.minidom as myDOM
doc = myDOM.parse(r"C:\Projects\Py\chap1.xml"))
# do something else 
```

- document object : a web page itself
- table object : implements HTMLTableElement DOM interface

### Understanding DOM data types
1. Document : any web page loaded in a browser. For example, HTML, XML, SVG, and more. APIs are available based on their document type.

- HTML implements HTMLDocument interface.
- XML/SVG implements XMLDocument interface. 

A document is created with Document constructor. 
- document = new Document()

2. Node : Every object within a document is the one type of Node. 

- Element Node
- Text Node
- Attribute Node

3. Element is based on the Node. An element object implements DOM Element interface and the primitively, Node interface. 

- element object <==== Element interface <====== Node interface <==== Document interface 

4. NodeList : an array of elements. Nodelist has a single method called item. For example, list.item(1)

5. Attr : a special interface for attributes. Commonly referred as an attribute. 

### Understanding DOM interfaces
Since the hierarchy of the DOM data types is inter-related, meaning one object in DOM can implement several types of DOM interfaces, there may have been confusions. For example, 

- HTML form element implements HTMLFormElement, getting its name property 
- HTML form element implements HTMLElement, gettting its className property.