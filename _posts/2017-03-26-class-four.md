---
layout: post
title: "class[4]"
description: "Functions, built-in methods, and lots of practice!"
permalink: /class-four
prep_work: true
slides: false
complete: false
is_next: true
---

<h2 class="header large-header">Prep work</h2>

<h2 class="header medium-header">Functions</h2>

In JavaScript (and most other languages) a `function` is a way of packaging up some code, to run on command as many times as you choose, or not run at all.

A function takes `arguments`, also known as `parameters`: variables that are given to the `function` which the `function` can use.

<h3 class="header small-header">There are 4 parts to a function</h3>

|1 | the `function` keyword  | `function` |
|2 | the name of the `function` | `printOutHelloPlusName` | *this is optional for `anonymous functions`, more on this later!* |
|3 |  the arguments, in parenthesis | `(name)` | *Arguments are optional, the parenthesis are not.* |
|4 | the block that is the `function`'s body | `{ var fullSentence = "Hello, " + name + "!"}` |

```javascript
function printOutHelloPlusName(name) {
  var fullSentence = "Hello, " + name + "!"
  console.log(fullSentence)
}
```

<h3 class="header small-header">calling functions</h3>

You can create as many `functions` as you like, but you have to tell them when they should execute. A `function` won't run its `block` until it's told to. You can `call` the `function` as many times as you like, and it will execute that many times.

```javascript
// This is the function declaration / definition
function printOutHelloPlusName(name) {
  var fullSentence = "Hello, " + name + "!"
  console.log(fullSentence)
}

// This is calling the function to run
printOutHelloPlusName("World")
//=> "Hello, World!"

printOutHelloPlusName("dog")
//=> "Hello, dog!"
```

<h3 class="header small-header">Assigning functions to variables</h3>

In JavaScript, `functions` are considered `first class citizens`, which means you can move them around like `objects`. That means you can assign `functions` to `variables`!

```javascript
// This is the function declaration / definition
var printOutHelloPlusName = function(person) { // notice this function has no name!
  var fullSentence = "Hello, " + person + "!"
  console.log(fullSentence)
}

printOutHelloPlusName("World")
//=> "Hello, World!"
```

<h3 class="header small-header">passing callbacks</h3>

Remember that `functions` can be moved around like `objects`? That leads to a fundamental concept in JavaScript: the `callback`.

A `callback` is a `function` that runs when some other `function` calls it to run. You have to pass the `callback` to the `function` that will use it:

```javascript
// Defining the function that we will use as our callback
function printOutSentence(sentence) {
  console.log(sentence)
}

function buildSentence(firstAction, secondAction, callback) {
  var sentence = "I like to " + firstAction + " when I " + secondAction + "!"

  callback(sentence);
}

buildSentence("sing", "cook", printOutSentence)
//=> "I like to sing when I cook!"
```

<h3 class="header small-header">Return values vs Print values</h3>

One thing we haven't discussed yet is the concept of `returning`, rather than `printing` (`console.log()`), things.

When you `print` something to the console, you print out its value in the terminal. But when you `return` a value, you are passing the value back to where it was originally requested. This concept becomes very important with JavaScript:

```javascript
function addOne(number) {
  return number + 1;  
  // Doesn't print anything: returns this to where the function was called.
}

function printOut(number) {
  console.log("The number is " + number + ".")
  // Doesn't return anything: therefore returns 'undefined'!
}

var originalNumber = 10;
var newNumber = addOne(10); // newNumber is the RESULT of addOne() returning a value.

printOut(newNumber)
//=> "The number is 11."

```

It's important to understand that since `functions` themselves are `object`-like in the sense that you can move them around, you will get different results if you `call` vs pass, a `function`:

```javascript
printOutHelloPlusName("World") // Calling the function to run
//=>  "Hello, World!"

printOutHelloPlusName // RETURNS the function itself - doesn't get it to run

console.log(printOutHelloPlusName)
//=>  the function itself OR [function printOutHelloPlusName]
```

<hr>

<h3 class="header medium-header">Scope</h3>

You may have been noticing that we have been declaring `variables` inside the functions. But, if we were to try to do anything to those `variables` **OUTSIDE** the functions, this doesn't work!

```javascript
function helloWorld() {
  var sentence = "Hello, world!"
}

console.log(sentence)
//=> Uncaught ReferenceError: sentence is not defined
```

We get an error! That is because `functions` encapsulate their own **`scope`**. Stuff you **MAKE** inside a `function` is not accessible outside of it, unless you specifically `return` it:

```javascript
function helloWorld() {
  var sentence = "Hello, world!";
  return sentence;
}

var returningSentence = helloWorld();
console.log(returningSentence)
//=> "Hello, world!"
```

But `functions` are able to access the `variables` that are `declared` **IN THE SAME SCOPE as the function itself**:

```javascript
var sentence = "Hello, world!";

function helloWorld() {
  console.log(sentence + " from inside a function!")
}

helloWorld()
//=> "Hello, world! from inside a function!"
```

The place you write your code is one level of **SCOPE**.

Everything you put into that area is accessible to everything else.

Then you introduce `functions`, which have their own `scope`.

`functions` access their own `scope`, as well as stuff outside of themselves.

Additional `functions` **DEFINED** inside of the first `functions` have access to their own `scope`, as well as the `scope` of their parent functions!

```javascript

var sentence = "global scope"

function firstFunction(){
  var ownSentence = ", plus inside firstFunction"
  console.log(sentence + ownSentence)

  function secondFunction(){
    var anotherSentence = ", plus inside secondFunction"
    console.log(sentence + ownSentence + anotherSentence)
  }

  secondFunction();
}

firstFunction()
//=> "global scope, plus inside firstFunction"
//=> "global scope, plus inside firstFunction, plus inside secondFunction"
```

When you are passing around `callbacks`, however, the `callback` is not defined INSIDE of the `function` that's calling it, so it doesn't have access to that `function`'s `scope`:

```javascript
var sentence = "global scope"

function firstFunction(callback){
  var ownSentence = ", plus inside firstFunction"
  console.log(sentence + ownSentence)
  callback();
}

function secondFunction(){
  var anotherSentence = ", plus inside secondFunction"
  console.log(sentence + ownSentence + anotherSentence)
}

firstFunction(secondFunction)
//=> ReferenceError: ownSentence is not defined at secondFunction
```

<h3 class="header medium-header">Reading</h3>

* <a href="http://www.w3schools.com/js/js_scope.asp" target="blank">Understanding scope</a>, or, local vs global variables
* <a href="http://www.w3schools.com/js/js_functions.asp" target="blank">Understanding functions</a>
* <a href="http://eloquentjavascript.net/03_functions.html" target="blank">Deeper dive into functions</a>

<hr>

<h3 class="header medium-header">Methods</h3>

<h3 class="header small-header">Methods vs Functions</h3>

A **function** is not related to anything else. It just exists on its own:

```javascript
function ashBarks(){
  console.log("bark! bark! bark!")
}

ashBarks()
//=> "bark! bark! bark!"
```

A **method** is also a `function`, but it is defined specifically for some `object`. This means that that `object` knows how to execute that `method` and is able to call it using the `.` notation:

```javascript

var ash = {
  cute: true,
  bark: function(){
    console.log("bark! bark! bark!")
  }
}

ash.bark()
//=> "bark! bark! bark!"
```

<h3 class="header small-header">Built-in methods</h3>

These are `methods` that are already written for you for different `objects` in JavaScript! They provide the basic functionality you can use to manipulate all sorts of things, like `arrays`, `objects`, etc.

<h3 class="small-header header">Some essential built-in methods to know</h3>

```javascript
// Array

var myArray = ["this", "that", "other"];
myArray.length
// => 3

myArray.indexOf("this")
//=> 0

myArray.indexOf("something else entirely")
//=> -1   (couldn't find it!)

myArray.push("something else") // permanently alters array!
//=> 4    (new length of array)

console.log(myArray)
//=> ["this", "that", "other", "something else"]

myArray.concat(["yes", "no", "maybe so"]) // doesn't permanently alter array!
//=> ["this", "that", "other", "something else", "yes", "no", "maybe so"]

console.log(myArray)
//=> ["this", "that", "other", "something else"]

var joinedArray = myArray.join(" ")

console.log(joinedArray)
//=> "this that other something else"
```

```javascript
// String

var myString = "something great happens"

myString.split(" ")
//=> ["something", "great", "happens"]

myString.split("e")
//=> ["som", "thing gr", "at happ", "ns"]

myString.length
//=> 23

myString.toUpperCase()
//=> "SOMETHING GREAT HAPPENS"

var anotherString = "How Do You Do?"

anotherString.toLowerCase()
//=> "how do you do?"
```

<h3 class="header small-header">Cheatsheet of JavaScript methods!</h3>

<a href="http://overapi.com/javascript" target="blank">
  <img class="full-width-image" src="{{ site.baseurl }}/assets/production/images/js_cheatsheet.jpg">
</a>


---

<h1 class="large-header">Class materials/content</h1>

*Coming soon!*
<!-- <a class="get-slides-link" href="{{ site.baseurl }}/class-three-slides"><button>Class slides</button></a> -->
