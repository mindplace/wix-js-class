---
layout: post
title: "class[5]"
description: "Introduction to the DOM, selecting and altering HTML elements, and using DevTools."
permalink: /class-five
complete: false
is_next: true
prep_work: true
slides: false
---
<h1 class="large-header">Class Materials and Content</h1>

<div class="button-wrapper">
  <a class="get-slides-link" href="{{ site.baseurl }}/class-five-slides"><button>Class slides</button></a>

  <a class="get-slides-link green-color" href="{{ site.baseurl }}/materials/class-five.zip"><button>Get the Code</button></a>
</div>

<h2 class="header large-header">Prep work</h2>

<h2 class="header medium-header">Using DevTools</h2>

An essential aspect of front-end development is using in-browser developer tools. It is nearly impossible to understand why something you are building is not working without being able to look at the code in the browser and understand where the issue or bug is happening.

Most browsers have their own, but the industry standard are the <a href="https://developer.chrome.com/devtools" target="blank">Chrome DevTools</a>.

To open the DevTools, open any website in Chrome, right-click, and select 'Inspect'.

<img src="{{ site.baseurl }}/assets/production/images/chrome-devtools.jpg">

<hr><br>

<h2 class="header medium-header">Do you know your way around HTML and CSS?</h2>

If you have never written any, the rest of this prep work won't make sense.

<div class="button-wrapper">
  <a class="get-slides-link green-color" target="blank" href="https://www.codecademy.com/learn/learn-html-css"><button>Codecademy's tutorial</button></a>

  <a class="get-slides-link green-color" target="blank" href="http://learn.shayhowe.com/html-css/building-your-first-web-page/"><button>Shayhowe's tutorial</button></a>
</div>

<br>

<h2 class="header medium-header">The Document Object Model</h2>

The Document Object Model, also known as the DOM, is how the web pages we view are structured.

The DOM is a tree of nodes, where each HTML element is a node. A node is connected to its parent node (the node which it is inside of), and is aware of sibling nodes (nodes which have the same parent).

<div class="flex-wrapper">
  <img src="{{ site.baseurl }}/assets/production/images/dom-example.jpg">
  <img src="{{ site.baseurl }}/assets/production/images/dom.gif">
</div>

<br>

<h2 class="header medium-header">Manipulating DOM elements with JavaScript</h2>

This is the main reason for JavaScript's popularity and remains JavaScript's most popular use: altering the DOM and its elements.

In practice, what this means is one of two things:

* Selecting and altering DOM elements (<a href="https://jquery.com/" target="blank">jQuery</a>)
* Keeping a model of the 'real' DOM in memory and updating the visible page based on changes (JavaScript frameworks like <a href="https://facebook.github.io/react/" target="blank">React</a>)

For the purposes of this class, we won't be talking about the 2nd use case (even though it's becoming hugely popular and altering the way front-end programming is happening).

<br>

<h3 class="header small-header">What does 'manipulating DOM elements' mean?</h3>

The initial DOM is whatever is loaded when the page is loaded and its main root node is called `document`.

The `document` is really just an `object`: it has keys and values, and many of those values are themselves objects. The keys are HTML element names, and the values are the elements themselves.

It would take too long to write code that hunted through each child node starting from `document`, so there's faster ways of getting elements from the `document` object: specifically, by `targeting` them.

We can `target` elements by the type of element they are (e.g., `'ul'` or `'div'`), by the classes they have (e.g. `'large-button'`), or by the IDs that they have (e.g. `'payment-button'`).

That is, we can say:<br>Hey, you element, I want to grab you. I know who you are because of the type of element you are, because I know your class, or because I know your ID. I know you're an element in the DOM so you'll be inside of `document`. Then I want change your margin, padding, position, color, whether you're visible or not, etc. Or maybe I want to append child nodes (inner elements) to you to hold, or manipulate the child nodes you already hold.

| targeting | Hey, you element, I want to grab you.<br>I know who you are because of the type of element you are, because I know your class, or because I know your ID.<br>I know you're an element in the DOM so you'll be inside of `document`. |
| manipulating | Then I want to change you, like change your margin, padding, position, color, whether you're visible or not, etc.<br>Or maybe I want to append child nodes (inner elements) to you to hold, or manipulate the child nodes you already hold. |

<br>

<h3 class="header medium-header">Practice</h3>

Open Chrome DevTools by right-clicking this page and selecting 'inspect'.

Get the console open. If you don't see the console, click the triple-dot menu at the top right of the DevTools and click 'Show console drawer':

<img src="{{ site.baseurl }}/assets/production/images/console.jpg" style="width:400px;">

<br>

Into the console, type `document` and press enter.

<img src="{{ site.baseurl }}/assets/production/images/console-two.jpg" style="width:400px;">

You'll get back something like `#document`, click on that and see what you get. It's the page you're currently on, represented by all the HTML nodes on the page.

Grab all the paragraphs, `p` tags, on the page:

```javascript
// Targeting
var paragraphs = document.querySelectorAll('p')

```

`paragraphs` is now an array, where each element is one of the paragraphs on the page. Now, make all the paragraphs change their text color to red:

```javascript
// Manipulating
for (var i=0; i < paragraphs.length; i++) {
  var currentParagraph = paragraphs[i];
  currentParagraph.style.color = 'red';
}
```

<br>

<h3 class="header small-header">Events</h3>

Another very important thing that the DOM has is the ability to 'listen' for events in the browser: whether a user is scrolling, clicking, hovering, etc. When the event happens, it triggers the `callback` function that was waiting to be told to run.

Let's write a listener that waits for the user to click anywhere on the page. Then, when the user clicks, it makes a pop-up with a message for the user.

In your console, write out the listener:

```javascript
function makePopUp(){
  alert("Hey, I saw you clicked on something!")
}

document.addEventListener("click", makePopUp)
```

Need a refresher on `callbacks`? Check out <a href="{{ site.baseurl }}{% post_url 2017-03-26-class-four %}" target="blank">class[4] prep work</a>.

<br>

<h3 class="header small-header">Resources</h3>

* Tutsplus, <a href="https://code.tutsplus.com/tutorials/javascript-and-the-dom-series-lesson-1--net-3134" target="blank">JavaScript and the DOM: Lesson 1</a>
* W3Schools, <a href="https://www.w3schools.com/jsref/dom_obj_document.asp" target="blank">The HTML DOM Document Object</a>: a reference for different `document` methods (functions defined on the `document` object)
* W3Schools, <a href="https://www.w3schools.com/js/js_htmldom_eventlistener.asp" target="blank">JavaScript HTML DOM EventListener</a>
* Mozilla Developer Network, <a href="https://developer.mozilla.org/en-US/docs/Web/API/document" target="blank">Document</a>
