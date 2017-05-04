---
layout: post
title: "class[7]"
description: "Modules, APIs, and Ajax."
permalink: /class-seven
complete: false
is_next: true
prep_work: true
slides: false
---

<h1 class="large-header">Class Materials and Content</h1>

<div class="button-wrapper">
  <a class="get-slides-link" href="#"><button>Class slides</button></a>

  <a class="get-slides-link green-color" href="{{ site.baseurl }}/materials/class-seven.zip"><button>Get the Code</button></a>
</div>

<h2 class="header large-header">Prep work</h2>

<h2 class="header medium-header">Modules</h2>

So far, we've been writing ES5 standard JavaScript code. That means we've been working with a version of JavaScript that was meant to be implemented by 2015 on all browsers.

There's now a new standard, the ES6 standard, which incorporated many new concepts and big changes.

The reason we haven't used it in this class is because no browsers actually support it natively. So in order to use the ES6 standard, we have to include a special library that takes the ES6 code we write as input, and returns to us the same code but 'translated' to the ES5 standard. Read more about the standards and the differences <a href="https://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/" target="blank">here</a>.

One of the new concepts brought in with ES6 are `modules`.

A `module` is a self-contained, small, independent bit of code, often in its own file. It is included in other files, and then those files have access to the module's code. The module's code is wrapped up as an object or a function, which can be used by the files that pull in that module.

You're dealing with a module anytime you see the `export` or `import` statements.

<br>

<h3 class="header small-header">Resources</h3>
* <a href="https://spring.io/understanding/javascript-modules" target="blank">Understanding JavaScript Modules</a>
* *Exploring JavaScript*, chapter 6: <a href="http://exploringjs.com/es6/ch_modules.html" target="blank">Modules</a>
* *Eloquent JavaScript*, chapter 10: <a href="http://eloquentjavascript.net/10_modules.html" target="blank">Modules</a>

<hr><br>

<h2 class="header medium-header">Intro to APIs</h2>

`API` stands for `Application Programming Interface`.

Does that sound very broad and general? It is! <a href="https://ffeathers.wordpress.com/2014/02/16/api-types/" target="blank">There are many different types of APIs</a>.

The main ones we care about are `library APIs` and `web service APIs`.

<br>
<h3 class="header small-header">Library APIs</h3>

A library API is a file someone else wrote that you can include into your project. You include this external library in your code, which gives you access to the functionality included in the library.

Let's say we want to use the awesome library `lodash.js`. This is a library that allows us to use common programming functionality for arrays, such as different ways of sorting them.

```html
<!-- Our HTML page -->

<head>

  <!-- Lodash CDN, included BEFORE the file I intend to use Lodash in -->
  <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>

  <!-- My own JavaScript file -->
  <script src="main.js"></script>

</head>
```

After loading the library, I am able to use its functions / functionality: this is the API part, that there's things my code is able to access within this library to make a request to something and get something back.

```javascript
// main.js

// our array object
var myArray = ["Ash", true, undefined, 21, false]

// loading Lodash into this file
var _ = require('lodash');

// using Lodash functionality: keep only items that aren't falsey
var myCompactArray = _.compact(myArray)

console.log(myCompactArray)
// => ["Ash", true, 21]
```

<br>

<h3 class="header small-header">Web service APIs</h3>

Web service APIs are where programs, instead of users, can make requests for information.

You can think of it as your computer browsing the internet, rather than you personally.

When you try to access a website online, you are actually make a request for some files. Those files are returned to your browser and you get to view and interact with them. (This is the essence / basis of the internet.)

When a program or computer asks for information from another program or computer, it does so in a slightly different way. Just as you have a way of entering a website (using your URL), so does your program or computer have ability to access a web server's interface by using different kinds of requests, and having the address of where to send the request.

The most common requests are:

* `GET` requests. These ask for information, such as a web page.
* `POST` requests. These ask that certain information be created or updated, such as a username and password.

There are lots of web service APIs, and most big websites like <a href="https://dev.twitter.com/overview/api" target="blank">Twitter have their own open APIs that are accessible by programs and computers</a>, rather than users. Have you ever seen a Twitter feed on another site? That's a program asking the Twitter API for information.  

<br>

<h3 class="header small-header">Ajax API requests</h3>

Although there's several ways to make GET requests with JavaScript, probably the most popular one is `AJAX`.

<blockquote>
  <p>AJAX is a developer's dream, because you can:</p>

  <ul>
    <li>Update a web page without reloading the page</li>
    <li>Request data from a server - after the page has loaded</li>
    <li>Receive data from a server - after the page has loaded</li>
    <li>Send data to a server - in the background</li>
  </ul>

  <p>~ W3Schools, <a href="https://www.w3schools.com/xml/ajax_intro.asp" target="blank">AJAX Introduction</a></p>
</blockquote>
<br>

AJAX stands for `Asynchronous JavaScript and XML`. It's a way of making a request to an API without refreshing the page on the user side.

The easiest way for us to make an AJAX request is to use jQuery's `$.ajax()` method.

```javascript
var animal = "SeaLion";

// API I want to use: Encyclopedia of Life API http://eol.org/api
// I make an Ajax request specifying my animal within the URL (this URL is the address of the API)
$.ajax({
  method: "GET",
  url: "http://eol.org/api/search/" + animal + ".json"

}).done(function(response){
  // I get back a response, which is an object

  // This object has a property 'results', which is an array of results
  var listOfResults = response.results;
  var numberOfResults = listOfResults.length;

  // Every result within the array 'results' has information like content and
  // the link to the page where the user can find out about that animal
  var firstResult = listOfResults[0];

  var nameOfAnimalType = firstResult.content;
  var urlToCheckOut = firstResult.link;

  console.log(numberOfResults + " results found.")
  console.log("Learn about the " + nameOfAnimalType + " on this page: ")
  console.log(urlToCheckOut)
});

// => "30 results found."
// => "Learn about the Californian sea lion on this page:"
// => "http://eol.org/328615?action=overview&controller=taxa"
```

<br>
<h3 class="header small-header">Resources</h3>
* Mozilla Developer Network, <a href="https://developer.mozilla.org/en-US/docs/AJAX" target="blank">Ajax</a>
* TeamTreehouse, <a href="https://www.codementor.io/sheena/ajax-tutorial-web-development-du107rzaq" target="blank">Ajax tutorial</a>
* W3Schools, <a href="https://www.w3schools.com/xml/ajax_intro.asp" target="blank">Ajax Introduction</a>
