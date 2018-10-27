# Learn JavaScript in **selftics**

### The JavaScript Language
আমরা একদুম শুন্য থেকে শুরু করে OPP-এর মত advanced ধারনা গুলো শিখার চেষ্টা করবো!

---

[JS HOME]()
JS Introduction
JS Where To
JS Output
JS Statements
JS Syntax
JS Comments
JS Variables
JS Operators
JS Arithmetic
JS Assignment
JS Data Types
JS Functions
JS Objects
JS Events
JS Strings
JS String Methods
JS Numbers
JS Number Methods
JS Arrays
JS Array Methods
JS Array Sort
JS Array Iteration
JS Dates
JS Date Formats
JS Date Get Methods
JS Date Set Methods
JS Math
JS Random
JS Booleans
JS Comparisons
JS Conditions
JS Switch
JS Loop For
JS Loop While
JS Break
JS Type Conversion
JS Bitwise
JS RegExp
JS Errors
JS Scope
JS Hoisting
JS Strict Mode
JS this Keyword
JS Let
JS Const
JS Debugging
JS Style Guide
JS Best Practices
JS Mistakes
JS Performance
JS Reserved Words
JS Versions
JS Version ES5
JS Version ES6
JS JSON

JS Forms
JS Forms
Forms API

JS Objects
Object Definitions
Object Properties
Object Methods
Object Accessors
Object Constructors
Object Prototypes
Object ECMAScript 5

JS Functions
Function Definitions
Function Parameters
Function Invocation
Function Call
Function Apply
Function Closures

JS HTML DOM
DOM Intro
DOM Methods
DOM Document
DOM Elements
DOM HTML
DOM CSS
DOM Animations
DOM Events
DOM Event Listener
DOM Navigation
DOM Nodes
DOM Collections
DOM Node Lists

JS Browser BOM
JS Window
JS Screen
JS Location
JS History
JS Navigator
JS Popup Alert
JS Timing
JS Cookies

JS AJAX
AJAX Intro
AJAX XMLHttp
AJAX Request
AJAX Response
AJAX XML File
AJAX PHP
AJAX ASP
AJAX Database
AJAX Applications
AJAX Examples

JS JSON
JSON Intro
JSON Syntax
JSON vs XML
JSON Data Types
JSON Parse
JSON Stringify
JSON Objects
JSON Arrays
JSON PHP
JSON HTML
JSON JSONP

JS Examples
JS Examples
JS HTML DOM
JS HTML Input
JS HTML Objects
JS HTML Events
JS Browser
JS Exercises
JS Quiz
JS Certificate

JS References
JavaScript Objects
HTML DOM Objects













---

## Index
An Introduction to JavaScript
Numbers
Booleans
Operators
Variables
Functions
Conditionals
Arrays
Objects

---
1 JavaScript Basics
Overview
Syntax Basics
Operators
Basic Operators
Operations on Numbers & Strings
Logical Operators
Note
Comparison Operators
Conditional Code
Note
Truthy and Falsy Things
Conditional Variable Assignment with The Ternary Operator
Switch Statements
Loops
The for loop
The while loop
The do-while loop
Breaking and continuing
Reserved Words
Arrays
Objects
Functions
Using Functions
Self-Executing Anonymous Functions
Functions as Arguments
Testing Type
The this keyword
Note
Scope
Closures . .

***
## Chapter 01: An Introduction to JavaScript
What is JavaScript
Why JavaScript


Code Editors
IDE

Lightweight Editors
* Visual Studio code
* Atom
* Sublime text
* Notepad++

Developer Console
Google Chrome
Firefox

---
## Chapter 02: JavaScript Data Types
1. Strings
2. Numbers
3. Booleans

Strings: <br/>
Strings are values made up of text and can contain letters, numbers, symbols, punctuation, and even emoji.

Strings are contained within a pair of either single quotation marks '' or double quotation marks "".


Enclosing quotation marks: <br/>
Let’s say you’re trying to use quotation marks inside a string. You’ll need to use opposite quotation marks inside and outside. That means strings containing single quotes need to use double quotes and strings containing double quotes need to use single quotes.




Booleans: <br/>
Booleans are values that can be only one of two things: true or false.
Anything “on” or “off,” “yes” or “no,” or temporary is a usually good fit for a boolean. It’s useful to store booleans in variables to keep track of their values and change them over time.

EXAMPLE
var kitchenLights = false;
kitchenLights = true;
kitchenLights;
OUTPUT
true
Booleans are essential for conditionals to work.

***
## Chapter 03: JavaScript Operators
Operators: <br/>
Operators are the symbols between values that allow different operations like addition, subtraction, multiplication, and more.
JavaScript has dozens of operators, so let’s focus on the ones you’re likely to see most often.
+ Arithmetic
+ Grouping
+ Concatenation
+ Assignment
+
***
## Chapter 04: JavaScript Variables
Variables: <br/>
Variables are named values and can store any type of JavaScript value.

Using variables: <br/>
After you declare a variable, you can reference it by name elsewhere in your code.


Reassigning variables: <br/>
You can give an existing variable a new value at any point after it’s declared.

Naming variables: <br/>
Variable names are pretty flexible as long as you follow a few rules:
* Start them with a letter, underscore \_, or dollar sign $.

* After the first letter, you can use numbers, as well as letters, underscores, or dollar signs.
* Don’t use any of JavaScript’s reserved keywords.

## Chapter 05: JavaScript Loops
JavaScript Loops: <br/>
Loops are handy, if you want to run the same code over and over again, each time with a different value.

Different Kinds of Loops: <br/>
JavaScript supports different kinds of loops:

+ For Loop
+ For/In
+ While
+ Do/While

***
## Chapter 06: JavaScript Functions
Functions are blocks of code that can be named and reused. <br/> <br/>

__Parameter and Arguments of a function__

Example 01:
```javascript
function hello(){
  console.log("Welcome to Selftics");
}
//Calling the hello function
hello();
hello();
```
**Output**<br/>
Welcome to Selftics <br/>
Welcome to Selftics <br/>


Example 02:
```JavaScript
function hello(){
  return "Hello World!";
}
console.log(hello());
```


Example 03: <br>
Parameter and Arguments of a function
```javascript
function add(x,y){      //Here x and y are parameters of the function add
  return x+y;
}
console.log(add(20,30));   //Here 2 and 3 are arguments of the function add
```

Example 04:
```javascript
function helloLearner(name){
  console.log("Hello "+ name +"!"+" Welcome to Selftics.");
}

helloLearner("Anis");
helloLearner("Rashed");
helloLearner();
helloLearner("");
```
**Output**<br/>
Hello Anis! Welcome to Selftics.<br/>
Hello Rashed! Welcome to Selftics.<br/>
Hello undefined! Welcome to Selftics.<br/>
Hello ! Welcome to Selftics.<br/>

Example 05: <br>
Passing a default value of the parameter
```javascript
function welcome(name="Anonymous"){
  console.log("Hello "+name);
}

welcome("Rafiq");
welcome(' ');
welcome('');
welcome();

```
Output: <br/>
Hello Rafiq <br/>
Hello       <br/>
Hello       <br/>
Hello Anonymous <br/>



Example 06: <br/>
Applying condition:
```javascript
function welcome(name){
  if(name){
    console.log("Welcome "+name);
  }else {
    console.log("How are you?");
  }
}

welcome("Rafiq");
welcome(' ');
welcome('');
welcome();
```
Output: <br>
Welcome Rafiq <br>
Welcome   <br>
How are you? <br>
How are you? <br>

Example 07: <br/>
Passing multiple parameters

```javascript
function hi(name="Anonymous", age="unknown"){
  console.log("Hi "+name+", you are "+age+" years old.");
}

hi("Rafiq", 20);
hi();
hi("",);
```
Output: <br/>
Hi Rafiq, you are 20 years old. <br/>
Hi Anonymous, you are unknown years old.  <br/>
Hi , you are unknown years old. <br/>


Example 08: <br/>
Checking even or not:

```javascript
function isEven(number){
  if(number % 2 == 0){
    return true;
  }
  return false;
}

//Calling isEven Function
console.log(isEven(12));
console.log(isEven(13));
console.log(isEven(18));
```
Output: <br>
true <br>
false <br>
true <br>

## JavaScript Scope
Scope determines the accessibility (visibility) of variables.

JavaScript Function Scope
In JavaScript there are two types of scope:

Local scope
Global scope
JavaScript has function scope: Each function creates a new scope.

Scope determines the accessibility (visibility) of these variables.

Variables defined inside a function are not accessible (visible) from outside the function.

Local JavaScript Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables have Function scope: They can only be accessed from within the function.


### JavaScript Hoisting





***
## Chapter 07: JavaScript Conditionals
Conditionals control behavior in JavaScript and determine whether or not pieces of code can run.
if The most common type of conditional is the if statement, which only runs if the condition enclosed in parentheses () is truthy.

if statement:

else statement:

else if statement:



***
## Chapter 08: JavaScript Arrays



***
## Chapter 09: JavaScript Objects




***
## Chapter 10:



***

age-and-stage.js        do-while.js                  loopbreak.js
array.js                factorial.js                 math.js
array_copy.js           factorial_1to10.js           math2.js
array_merge.js          fibonacciSeries.js           movieRating.js
array_slice.js          floor-ceil.js                multiplication-table.js
array_sorting.js        forloop.js                   nestingif.js
array_splice.js         forLoop2.js                  numberCheck.js
array_traversing.js     forLoopMultipleStatement.js  number-series.js
array_traversing2.js    function.js                  odd.js
arrayDelete.js          function2.js                 operator.js
arrayManipulation.js    function3.js                 orOperator.js
assignmentOperator.js   hoisting.js                  ternaryOperator.js
atom.js                 increament.js                variable01.js
atom.sublime-workspace  increament-decreament.js     welcome.js
basics.html             index.html                   while2.js
calendar.js             learning.js                  whileLoop.js
divisors.js             logicalOperator.js           whileloop2.js










Resources:
* https://www.javascript.com/learn
* https://javascript.info/
* https://www.w3schools.com/js/
https://developer.mozilla.org/en-US/docs/Web/JavaScript
*  https://www.youtube.com/watch?v=y0uT4izH8F0&list=PLoR56CteKZnAdVtfTbAbUqT2thG4S-Anv
