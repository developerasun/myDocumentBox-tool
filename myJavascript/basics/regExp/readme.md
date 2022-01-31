# Learning regular expression basics
> Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

## Basics
Regular epxression is used to find a string match. Note that quotes are not required for regular expression. 

```js
const firstRegularExpression = /first/
```

Or, you can invoke regular expression constructor.

```js
const pattern_test_regExp = new RegExp('a'); // create a regular expressioninstance
```

### Extract match
You can extract a string you want with regular expression method 'match'. The match returns an array containing the results of that search, or null if no matches are found.

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; 
let result = extractStr.match(codingRegex); // ["coding"]
```

### Union match
Create a union regular expression to match multiple expressions with one search. For example, 

```js
const description = "Hello human Jake!"
const unionMatch = /human|Jake/
unionMatch.test(description)
```

Note that below two are different. 

```js
const unionMatch1 = /human|Jake/
const unionMatch2 = /human | Jake/
```

### Flags
Flags are extra search options in regular expression. For example, flag 'i' will ignore letter cases such as upper/lower cases. 

```js
const iFlag = /cutecat/i // will match to CuteCat, cuteCat ... 
```

#### Multiple matches with flag g
Set flag g to a regular expression to find multiple matches. For example, 

```js 
const multipleMatch = /time/ig // set multiple flags
const paragraphs = "Time is running. Your time, my time, both."
const result = paragraphs.match(multipleMatch) // find multiple mathes
console.log(result)
```



## Reference 
- [Regular expressions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6)