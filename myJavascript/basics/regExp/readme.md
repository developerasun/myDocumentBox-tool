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

### Wildcard : .
> The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. 

```js
const wildcard = /ca./ // cat, cap, can, car ... 
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

### Character classes
> Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.
> For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. z**The [aiu] is the character class** that will only match the characters a, i, or u.

```js
const characterClass = /b[aiu]g/ // bag, big, bug
```

#### Hyphen character
> Inside a character set, you can define a range of characters to match using a hyphen character: -. For example, to match lowercase letters a through e you would use [a-e].

```js 
const alphabetClass = /[a-z]/
```

> Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers. For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

```js
const oneToFive = /[1-5]/
```

Then, you can combine both letter and number like below. 

```js 
const letterAndNumber = /[a-z0-9]/ // a to z, 0 to 9
```

#### Negated character set
> Place a caret character (^) after the opening bracket and before the characters you do not want to match. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^a^e^i^o^u]/gi; // Exclude number 0 to 9 and vowels a, e, i, o, u. 
let result = quoteSample.match(myRegex); 
```

#### Repeated characters
> Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated. You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.

```js
const repeated = "Mississippi"
const findS = /s+/ig
repeated.match(regExp) // [ss, ss]

const findSandP = /s+|p+/ig
repeated.match(regExp) // [ss, ss, pp]
```

> There's also an option that matches characters that occur zero or more times. The character to do this is the asterisk or star: *.

```js
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); 
gPhrase.match(goRegex); // occured once, ["g"]
oPhrase.match(goRegex); // occured zero, null
```

#### Greedy match and Lazy match
> In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. ... Regular expressions are by default greedy.
> The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern. ... You can use the ? character to change it to lazy matching.

```js
const TARGET = "titanic"

// greedy match
const greedy = /t[a-z]*i/
const TARGET.match(greedy) // ["titani"]

// lazy match
const lazy = /t[a-z]*?i/ // ["ti]
```

For example,

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex); // [<h1>]
```

## Reference 
- [Regular expressions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6)