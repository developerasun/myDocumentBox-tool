# Learning Sass essentials
Sass can be called CSS having Javascript-like features. For example, 
Sass has 

- Variable declared with $
- Function called mixin
- Nesting

## Variable
In sass, you can declare and assign variable just like Javascipt.
The variable is defined with '$'.

```scss
$heading-color : lightblue;

```

Use it like below. Using variable in sass gives us an advantage to improve
code reusability.

```scss
$text-color : red;

h1, p, .content { 
    color : $text-color;
}

```

## Nesting
As a project is getting bigger, CSS lines will be more larger. Sass helps this with enabling nesting CSS rules. For example, child style rules can be nested in parent element in Sass. 

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

## Mixin
A mixin is a group of CSS declarations for reusability. Consider the mixin as a function in CSS. Useful to remove repetition when writing vendor prefix rules. 

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

## Contional statement
If and else statement works in Sass just like they do in Javascript. 
