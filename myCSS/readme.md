# Learning CSS3 Essentials
Took below courses and summarized essentials. 

- [Free code camp : CSS Flexbox](https://www.freecodecamp.org/learn/responsive-web-design/#css-flexbox) 
- [Free code camp : CSS Grid](https://www.freecodecamp.org/learn/responsive-web-design/#css-grid) 

## Tablet of Contents 
- [Learn by doing]()
- [CSS Flexbox]()
- [CSS Grid]()

## Learn by doing 
Summarized what I learned in a block quote form. 

### Basics
> CSS : selector { declaration }
```css
h1 {
    color: red;
}
```

You can **chain class name** to find a specific html element. 

```css
/* find p tag that has "test" class */
p.test {
    color: green;
}

/* find a p tag that has "test" and "experiment" class */
p.test.experiment {
    color: orange;
}
```

> Cover is often used for background-size property. It **scales the image as large as possible**. Image will be stretched if needed.

```css
h1 { 
    background-size: cover;
}
```

> position in CSS : 1) static(default) 2) fixed 3) absolute 4) relative 
> position: relative - the element now can move.
> position: absolute - search **parent element that has a relative position**.

> **Box model** in CSS: a box that wraps a HTML element around. 1. border : added to define space between elements 2. margin : outside the border 3. padding : inside the border 4. content : text and image 

> box-sizing default: **content-box**. Set box size as much as content size. **border-box**: box size bocomes content + padding + border.

> Setting **width and height in CSS** means setting the width and height of **content area**. Thus, a full size of an element becomes all the sum of the element(content), margin, padding, border

### Responsive design
> PPI : pixel per inch, DIP : dots per inch. Image might be seen as **lower PPI in high resolution display device** such as iMac and MacBook Pro. Simplest way to tackle this is half your image width and height. 

```css
img { 
    /* half original sizes */
    width: 100px; 
    height: 100px;
}
```

> Making images responsive with CSS is actually very simple. The **max-width of 100%** will make sure the image is never wider than the container it is in, and the **height of auto** will make the image keep its **original aspect ratio**.

```css
.responsive-img { 
    max-width: 100%;
    height: auto;
}
```

> **Media Queries** are a new technique introduced in **CSS3** that change the presentation of content based on different viewport sizes.

```css
p {
    font-size: 20px;
}
@media screen and (max-height: 800px) {
    p {
        font-size: 10px;
    }
}
```

> **Viewport** units are relative to the **viewport dimensions** (width or height) of a device, and **percentages** are relative to the size of the **parent** container element. 
> **vmin** (viewport minimum): 70vmin would be 70% of the **viewport's smaller dimension** (height or width)

```css
h2 { 
    width: 80vw;
}
p { 
    width: 75vmin;
}
```

> Vendor-prefixed properties are set to integrate inconsistencies between each browsers:  1) -webkit(Chrome, Safari) 2) -moz(FireFox) 3) -o(Opera) 4) -ms(Internet explorer)

```css
* {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
}
```

> Inline property **ignores the height and width** even when they are set. inline-block recognizes the height and width unlike inline property.

```css
.myProps { 
    display:inline-block;
    width: 40px;
    height: 40px;
}
```

> Positive margin farthers each element. **Negavtive margin closes each element**.

```css
.myProps { 
    margin : -1rem;
}
```
> Units in CSS : absolute unit, relative unit. 
- Relative units - em(by capital M width), ex(by lowercase x height), px, %(by default font), **rem : root element's font size**. fr: shrots for fraction. set available space within grid container as fraction. 

```css
.myProps { 
    font-size: 1em;
}

/* first column : auto, second : 100px, third : 1fr(1/3), fourth : 2fr(2/3) */
.gridContainer {
    grid-template-columns : auto 100px 1fr 2fr;
}
```

> **Cascading priority** in CSS : Inline style(strong) >>>> id >>>> class name >>>> tag(weak)  
```css
/* Add "!important" keyword to increase priority to the first. */
li  { 
     color: powderblue !important;
 }
```

> If a content has margin/padding/border set, measuring the content's size becomes somewhat difficult. Thus box-sizing property has become important.

```css
/* box-sizing:border-box is more convenient to align each element that has different box properties. */
.myProps { 
    box-sizing : border-box;
    color : blue;
}
```

> parent margin > child margin => parent margin. child margin > parent margin => child margin 

> Note that pseudo element like ::before, ::after do not work in SEO. **Search engine will ignore the pseudo elements' content**. Do not give a space between pseudo class and selector in CSS.

```css
/* correct */
.myProps::before {
    content: "hello";
    color: tomato;
}
/* incorrect */
.myProps ::before {
    content: "hello";
    color: tomato;
}
```

> float : Other element around the image will not penetrate the image. 
> clear : ignoring the float effect.

## CSS flex box
Flex is the one of the core functionalities in CSS for layout. Usually a container, items, and display(flex) are used to implement flex box. Note that **container property** and **item property** are divided.

```css
.item{
    /* flex-basis property sets a flex-item's size depending on main axis
    if main axis (row) -> set width size
    if main axis(column) -> set height size */
    flex-basis: 300px;

    /* flex-grow property tells the flex box items that how much left space 
    they can additionally take */
    flex-grow: 1;

     /* flex-shrink property sets a limitation that how much space the flex box
    items should keep. It adds a horizontal scroll bar when set 0. */
    flex-shrink: 0;
} 
```

```css
#box1 {
    /* align-self property sets the oneself's cross axis alignment */
    align-self: flex-start;

    /* order property changes the items' order  */
    order: 3;
}
```

## CSS grid
### What is CSS grid model? 
As flex box in CSS gets more universal and commonly used, more advanced form of flex box came out - CSS grid model for two-dimensional grid-based layout. It has been standardized by W3C(World Wide Web Consortium - global organization for web standard). 

[Check the latest CSS grid standard by W3C here](https://www.w3.org/TR/css-grid-1/)

> repeat(number of columns/rows, the column width we want);

### How is it different from CSS flex box? 
Flex box distributes its box items by main axis - when there is no more space to use in the axis, the container moves the next items based on cross axis. Compared to Flex box, **Grid allows developers to set each item location from the very first place** using grid-template-columns(rows) property. Developers can designate width, height, and etc when needed. Both layout can be applied and used altogether in one program - they are not exclusive. 