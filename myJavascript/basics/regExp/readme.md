# Learning regular expression basics
> Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

## Basics
Regular epxression is used to find a string match. Note that quotes are not required for regular expression. 

```js
const firstRegularExpression = /first/
```

Or, you can invoke regular expression constructor.

```js
const pattern_test_regExp = new RegExp('a'); // create a regular expression instance
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
> For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. **The [aiu] is the character class** that will only match the characters a, i, or u.

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

#### Shorthand character classes
> The closest character class in JavaScript to match the alphabet is \w. This shortcut is equal to [A-Za-z0-9_]. This character class matches upper and lowercase letters plus numbers(alphanumerics). Note, this character class also includes the underscore character (_).

```js
const alphabet = /\w+$/ // shorthand for [A-Za-z0-9_]
const sentence = "Pat the cute cat"
sentence.match(alphabet) // cat
```

> A natural pattern you might want to search for is the opposite of alphanumerics. You can search for the opposite of the \w with \W. Note, the opposite pattern uses a capital letter. This shortcut is the same as [^A-Za-z0-9_].

```js
const notAlphabet = /\W+/
const sentence = "Feed the cute cat!!"
sentence.match(notAlphabet)
```

> The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.

```js
const findDigit = /\d/g
const sentence = "New year 2022 has come"
setence.match(findDigit) // 2022
```

> You can also search for non-digits using a similar shortcut that uses an uppercase D instead. The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.

```js 
const findNonDigit = /\D/g
const sentence = "Feb 2022"
sentence.match(findNonDigit)
```

#### White space
> You can search for whitespace using \s, which is a lowercase s. This pattern not only matches whitespace, but also carriage return, tab, form feed, and new line characters. You can think of it as similar to the character class [ \r\t\f\n\v].

```js
const whiteSpace = "Find blank here"
const regExp = /\s/g
whiteSpace.match(regExp)
```

> Search for non-whitespace using \S, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class [^ \r\t\f\n\v].

#### Negated character set
> Place a caret character (^) after the opening bracket and before the characters you do not want to match. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9^a^e^i^o^u]/gi; // Exclude number 0 to 9 and vowels a, e, i, o, u. 
let result = quoteSample.match(myRegex); 
```

> Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```js 
const happy = "Jake is happy"
const regExp = /^Jake/ // is "Jake" at the beginning of sentence?
console.log(regExp.test(happy)) // true

const notHappy = "not happy Jake is"
console.log(regExp.test(notHappy)) // false
```

> There is also a way to search for patterns at the end of strings. You can search the end of strings using the dollar sign character(or anchor character) $ at the end of the regex.

```js 
const sentence = "There is a cute cat"
const regExp = /cat$/
regExp.test(sentence) // true
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

> Quantity specifiers are used with curly brackets ({ and }). You put two numbers between the curly brackets - for the lower and upper number of patterns.

```js
const sentence = "goooal" 
const quantityRegExp = /o{1,3}a/
sentence.match(quantityRegExp)
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
const lazy = /t[a-z]*?i/ // ["ti"]
```

For example,

```js
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex); // [<h1>]
```

## Reference 
- [Regular expressions](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6)