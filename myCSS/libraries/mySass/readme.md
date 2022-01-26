# Learning Sass essentials
Took below course and summarized essentials. 

- [Free code camp - Sass](https://www.freecodecamp.org/learn/front-end-development-libraries/#sass)

Sass can be called CSS having Javascript-like features. 

Install Sass through npm. 
```shell
$npm install -g sass 
$npm install sass --save
```

## Table of Contents 
- Variable 
- Nesting
- Mixin 
- Conditional : @if @else if @else
- Iteration : @for, @while, @each
- Partial : importing modules
- Extend

### Variable
In sass, you can declare and assign variable just like Javascipt. The variable is defined with '$'.

```scss
$heading-color : lightblue;
```

Use it like below. Using variable in sass gives us an advantage to improve code reusability.

```scss
$text-color : red;

h1, p, .content { 
    color : $text-color;
}
```

### Nesting
As a project is getting bigger, CSS lines will be more larger. Sass helps this with enabling **nesting CSS rules**. For example, **child** style rules can be nested in **parent** element in Sass. 

```Scss
$bg-color : beige;
$paragraph-color : gray; 

body {
    background-color : $bg-color;
    font-size: 2rem; 
    .intro {
        color : $paragraph-color;

        .title {
            width : 100%;
        }
    }
}
```

### Mixin
A mixin is a group of CSS declarations for reusability. Consider the mixin as a function in CSS. Useful to **remove repetition** when writing vendor prefix rules. 

```scss
// mixin declaration
@mixin (custom name) (parameters) // parameters are optional
@mixin hello-mixin ($color, $font-size) {
    color : $color;
    font-size : $font-size;
}

// mixin called with @include
.myMixIn {
    @include hello-mixin (red, 2rem); 
}
```

### Contional statement
If and else statement works in Sass just like they do in Javascript. **Do not add parenthesis** for conditions. For example, 

```scss
// Incorrect
@if ($param == 1) { 
    font-size : 1rem; 
}

// Correct
@if $param == 1 {
    font-size : 1rem;
}
```
### For, Each, and While
#### For
Add styles in a loop through for directive in Sass. 

```scss
@for (variable) from start to/through end { SCSS rules }
```

For loop in Sass has two ways : 
- from (start) through (end) : including end
- from (start) to (end) : excluding end

```scss
// syntax : CSS tag + #{$variable}
@for $i from 1 through 12 { 
    // calculated class name and width with sass for statement
    .col-#{$i} { 
        width : 100%/12 * $i; 
    }
}
```

#### Each
Sass also provides **@each** directive, which **iterates over each item** in a list or map. 

In the case of a list, 
```scss 
@each $size in 1rem, 2rem, 3rem {
    .myFontSize-#{$size} { 
        font-size : $size;
    }
}

```

In the case of a map, declare the **map as varaible** first and then **call key and value** in @each directive

```scss
$colorList : (1: red, 2: blue, 3: green); 

@each $key, $color in $colorList { // note that key and value both called
    .myColor-#{$color} {
        color : $color;
    }
} 
```

#### While
Creates CSS rules until a certain condition is met. 

```scss
$x : 1; 
@while $x < 6 {
    .div-#{$x} { 
        margin : 10px + $x;
    }
    $x : $x + 1; 
}

```

## Partial
Partial is **a Sass module** that can be imported to other Sass files. 
Simply prefix underscore to your partials then Sass will understand it is a module and **won't convert it into CSS**. 

```scss
_myMixin.scss
```

Import above partial with @import. Once the partial is imported, all the mixins and variables can be approached. **Should not include underscore** when importing a partial

```scss
@import 'myMixin'
```

### Extend
Extending in Scss enables easily **scale a style** to another element, **copying properties from source and add a new style** to scale the style.  

```scss
.info {
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
}
.info-important { 
    @extend .info;
    background-color : magenta;
}
```

## Reference
- [Free code camp - Sass](https://www.freecodecamp.org/learn/front-end-development-libraries/#sass)