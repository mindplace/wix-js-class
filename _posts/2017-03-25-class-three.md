---
layout: post
title: "class[3]"
description: "Control flow with <code>if</code> and <code>else</code>, loops with <code>while</code> and <code>for</code>."
permalink: /class-three
prep_work: true
slides: false
is_next: true
complete: false
---

<h2 class="header large-header">Prep work</h2>

<hr>

<h2 class="header medium-header">Control flow</h2>
The concept of `control flow` is being able to run different bits of code depending on whether some condition is met or not. The program will evaluate whether some condition is true, and if so, will run the appropriate piece of code, based on what you tell it to do.

The program will be read from top to bottom and evaluated line by line. If some condition is met, then the piece of code associated with that condition will be run. This is meant to allow you to set up requirements and safeguards so that certain code is run only when it's appropriate for it to run.

<br>

<h3 class="header small-header">IF statements</h3>

```javascript

if (true) {
  // This line will print
  console.log("passed the condition")
}

if (false) {
  // This line will never print,
  // because the only time you run things inside the `if` block
  // is if the CONDITION for the `if` block is true
  console.log("I will never print")
}

```

<br>

There are 3 parts to an `if` statement:

| the `if` keyword  | IF |
| the condition | I have cheese |
|  the `block` of code that runs if<br>condition evaluates to `true` | THEN I will eat it |


The keyword `if` starts us off. Next, we have to give it a `condition`. This `condition` must evaluate to `true` OR `truthy`, in order to allow the result, the `block`, to run.

The `block` is a `block` because of the curly braces: `{}`. Notice that you have to have both an opening and a closing brace: they must match up.

```javascript
// Examples

var iAmHungry = true;

if (iAmHungry) {
  console.log("I eat a sandwich!");
}

// iAmHungry is true, so condition is true, so block runs.

// -------------------------

var iCouldEat = true;
var iAmHungry = false;

if (iAmHungry || iCouldEat) {
  console.log("I eat a sandwich!");
}

// iAmHungry is false, but iCouldEat is true, so in the
// case of the OR operator ( \\ ), the fact that ONE of these  is true, makes the condition true.

// -------------------------

var iAmNotHungry = true;
var iAteRecently = true;

if (iAmNotHungry && !iAteRecently) {
  console.log("I eat a sandwich!");
}

// iAmNotHungry is true, but opposite of iAteRecently (thanks to the BANG (!) operator) is false,
// so in the case of the AND operator ( && ), the fact that ONE of these is false, makes the condition false.
// So this line never runs!

```

<br>


<h3 class="header small-header">ELSE statements</h3>


```javascript

var ashAge = 3;

if (ashAge < 1) {
  console.log("Ash is a puppy!")
} else {
  console.log("Ash is not a puppy...still cute though!")
}

// -----------------------------------------------------------

if (ashAge == 0) {
  console.log("Ash was just born!! Cute!!")

} else if (ashAge == 1) {
  console.log("Ash is a puppy!")

} else {
  console.log("Ash is not a puppy...still cute though!")
}

```
<br>

`else` statements allow you to do two different things:

1. Make multiple branches in our tree of possible outcomes
2. Act as a catch-all

<br>

<h3 class="header small-header">For an 'else' statement, at least parts [1, 2, 3, 7, 8] are required:</h3>

| 1 | the `if` keyword  | IF |
| 2 | the condition | I have cheese |
| 3 |  the `block` of code that runs if<br>condition evaluates to `true` | THEN I will eat it |
| 4 | the 'else if' keyword | ELSE IF |
| 5 | the second condition | I have avocados |
| 6 | the second `block` | THEN I will make guacamole |
| 7 | the 'else' keyword | ELSE |
| 8 | the `block` of code that runs if<br>all conditions evaluate to `false` | I will stay hungry and sad. |  

And you can add as many parts [4, 5, 6] as you like:

```javascript

if (hungry) {
  eatSnack();

} else if (thirsty) {
  drinkWater();

} else if (excited && feelingSmart) {
  writeSomeCode();

} else if (tired) {

    if (stillHaveWork) { // notice this is nested!
      doYourWork();

    } else {
      sleep();
    }

} else {
  figureItOut();
}

```

<br>

<h3 class="header medium-header">Reading</h3>

* <a href="http://prasadhonrao.com/javascript-series-part-11-control-flow-statements/" target="blank">Understanding control flow</a>
* <a href="https://www.w3schools.com/js/js_if_else.asp" target="blank">W3Schools if/else statements</a>


<hr>

<h2 class="header medium-header">Loops</h2>

While control flow statements like `if`, `else`, and `else if` run only once -- from top to bottom of the file -- loops are about ***running the same piece of code multiple times.*** Loops are an absolutely integral and fundamental aspect of programming. Anytime you need to do something with, or to, items in an array, or key-value pairs inside an object, it's time to use a loop.

In a loop, the program will start running the code from top to bottom. When it gets to the bottom, ***it goes back up to where the loop started***, and check if the condition for the loop is still `true`. If it is, ***the loop will run the piece of code again*** and then at the end, check again whether the condition is `true`. It will keep doing this until the condition is `false`.

<h3 class="header small-header">WHILE loops</h3>

```javascript

var thirsty = true;
var cupsOfWaterIDrank = 0;

while (thirsty) {

  cupsOfWaterIDrank = cupsOfWaterIDrank + 1; // Add 1 cup to the cups I have drunk, and remember that value

  console.log("Drinking another cup! Now I have drunk " + cupsOfWaterIDrank + " cups!");

  if (cupsOfWaterIDrank == 5) { // if I have drunk 5 glasses of water, I am no longer thirsty.
    thirsty = false;            
  }

} // Get to this line... and goes back up to the `while` line to check if condition is still met!

// How many times will the block of the `while` loop run?

```

<br>

You can use `while` loops to iterate over an array of items. Since arrays are indexed by numbers, and `while` loops need a condition upon which to stop, we can set up a counter, and stop running the loop when the counter is equal to the number of items in the array:

```javascript

var fruit = ["grapefruits", "apples", "peaches"];
var counter = 0;
var numberOfFruit = fruit.length;

while (counter < numberOfFruit ) {
  var currentFruit = fruit[counter];
  console.log(currentFruit + " are great.");

  counter = counter + 1; // Very important part! Incrementing the counter!
}

console.log("Fruit salad!")

// -------- Output --------------
//
// grapefruits are great.
// apples are great.
// peaches are great.
// Fruit salad!

```


<br>

<h3 class="header small-header">FOR loops</h3>

**This is the bread and butter of all JavaScript loops!** But the syntax is tricky.

>Many loops follow the pattern seen in the previous while examples. First, a “counter” variable is created to track the progress of the loop. Then comes a while loop, whose test expression usually checks whether the counter has reached some boundary yet. At the end of the loop body, the counter is updated to track progress.<br><br>Because this pattern is so common, JavaScript and similar languages provide a slightly shorter and more comprehensive form, the for loop.<br><br> ~ Eloquent JavaScript, <a href="http://eloquentjavascript.net/02_program_structure.html#h_oupMC+5FKN" target="blank">for loops</a>


```javascript

// Example: a for loop to loop through an array

var fruit = ["grapefruits", "apples", "peaches"];

for (var counter = 0; counter < fruit.length; counter = counter + 1) {

  var currentFruit = fruit[counter];

  console.log(currentFruit + " are great.");
} // gets to this line, goes back up to the `for` line!

console.log("Fruit salad!")

// -------- Output --------------
//
// grapefruits are great.
// apples are great.
// peaches are great.
// Fruit salad!


```

<br>

<h4 class="header small-header">Let's break it down! The parts of a `for` loop are:</h4>

| 1 | the `for` keyword  | `for` |
| 2 | the counter | `var counter = 0;` | <= the semicolon is NOT OPTIONAL!
| 3 | the condition | `counter < someNumber;` | <= the semicolon is NOT OPTIONAL!
| 4 | the counter increments | `counter = counter + 1` |  <= the semicolon optional.
| 5 | the `block` | `{ var currentFruit = fruit[counter] }` |


<br>

<h3 class="header small-header">And looping through objects, a slightly different syntax...</h3>

```javascript

// Example: a for loop to loop through an object

var fruitSentences = {
  grapefruit: "I like broiled grapefruit.",  
  apples: "Apples make awesome juice.",
  peaches: "Ever had spicy peaches? Yum!"
};

for (var fruit in fruitSentences) { // simpler syntax; but the 'fruit' is the KEY, not the VALUE!

  var currentFruit = fruit;
  var currentSentence = fruitSentences[fruit];

  console.log(currentSentence);
} // gets to this line, goes back up to the `for` line!

console.log("Fruit salad!")

// -------- Output --------------
//
// I like broiled grapefruit.
// Apples make awesome juice.
// Ever had spicy peaches? Yum!
// Fruit salad!


```

<br>

<h3 class="header medium-header">Your turn!</h3>

1. Using `if`, `else if`, and `else` statements, build out a way to determine what movie rating is appropriate for someone based on their age, represented by a variable. (Don't make this complicated!)

2. Create a variable that holds the number 0. Using a `while` loop and a counter variable, add 1 to the original number, 5 times. Print out the end result, which should be 5.

3. Make an array holding some collection. Using a `for` loop, loop over this array, picking up each item using a counter, and do something with the item, like printing it out in a sentence.

4. Make an object holding several keys and values. Using a `for` loop, loop over this object and print out its keys and its values in sentences. 



<br>

<h3 class="header medium-header">Reading</h3>

* <a href="http://www.w3schools.com/js/js_loop_for.asp" target="blank">Understanding `for` loops</a>
* <a href="http://eloquentjavascript.net/02_program_structure.html" target="blank">Eloquent JavaScript, chapter 2: Program structure</a>
* <a href="http://www.dofactory.com/tutorial/javascript-loops" target="blank">DoFactory JavaScript loops</a>
