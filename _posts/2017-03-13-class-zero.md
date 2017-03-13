---
layout: post
title: "class[0]"
description: "First class: introduction to current state of JavaScript, why HTML and CSS is necessary, and setting up a development environment."
status: "Some resources to get you prepared for this class. Class content (slides, etc) coming soon."
---

<h2 class="header medium-header">Current state of JavaScript and class context</h2>

JavaScript was built in a mere 10 days for use in the Netscape browser; the creator of JavaScript eventually became the CEO/CTO of Mozilla Firefox (and that's still the company that puts out the best documentation for JavaScript). (<a href="https://www.w3.org/community/webed/wiki/A_Short_History_of_JavaScript" target="blank">Read more of its history here.</a>) JavaScript has no connection with Java; it was named JavaScript to take advantage of Java's popularity at the time!

JavaScript at its core is just another programming language, like PHP, Python, Ruby, Java, C#, etc. The reason JavaScript so widely used is because browsers allow JavaScript code to run natively inside them, as opposed to the other languages. That is the primary reason for its extreme popularity and widespread use.

These days, web applications and websites rely enormously on JavaScript for everything from delivering single-page applications (React or AngularJS), building complete mobile applications  (React Native), listening for user actions such as button clicks (jQuery), running tasks both in the browser and on local computers (Grunt or Gulp), wrapping around databases (Node.js and Express.js), and generally providing interactive functionality for web pages.

What we'll be learning is going to hardly touch on any of this, however, although we will be doing some jQuery. The focus of this class will be on JavaScript basics and fundamentals.

<hr>

<h2 class="header medium-header">Setting up your development environment</h2>

<h3 class="header small-header">Create a folder on your computer where you'll keep programming files.</h3>

Just create that folder wherever makes sense to you.

<h3 class="header small-header">Download a code editor.</h3>

You'll need a way to write HTML, CSS, and JavaScript code on your personal computer. While web browsers already have this functionality (Chrome, Firefox, Safari, etc) it would be unproductive to rely solely on them.

Just as you write regular documents in a text editor like Microsoft Word or even something super simple like Notepad, you need a program that will let you write code. Microsoft Word etc will not do this properly, because text editors add a lot of markup (additional characters) to the text saved in them, which would effectively corrupt the code you write.

Download [Atom](https://atom.io/) or [Sublime Text](https://www.sublimetext.com/download). These are some of the best rated (and free!) code editors around. If you already have a code editor, use that. The important thing is to be able to create and edit files ending in `.js`, `.html`, `.css`, `.md`, etc. *My recommendation: use **Atom**.*

<h3 class="header small-header">Download Chrome.</h3>

The <a href="https://www.google.com/chrome/browser/desktop/" target="blank">Google Chrome browser</a> is the industry's standard for web development, because of its great <a href="https://developers.google.com/web/tools/chrome-devtools/" target="blank">dev tools</a< that allow us insight into what code is loaded, running, affecting, etc on a given page.

We'll be using Chrome in this class, but other browsers have their own development tools as well. Check out <a href="https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/GettingStarted/GettingStarted.html" target="blank">Safari's dev tools</a> or <a href="https://developer.mozilla.org/en-US/docs/Tools" target="blank">Mozilla Firefox's dev tools</a>.

<h3 class="header small-header">Install Node.js.</h3>

<a href="https://nodejs.org/en/" target="blank">Node.js</a> is a JavaScript library used for back-end development. We're only going to be using it to run JavaScript code locally on your computer, so you don't really need to know more about it than that.

To install on a Mac:

1. Open your Terminal. (You can find it under Applications/Utilities/Terminal, or you can press  command + space, type 'terminal', and press Enter.)

    Is this the first time you've seen the <a href="http://www.macworld.co.uk/feature/mac-software/get-more-out-of-os-x-terminal-3608274/" target="blank">Terminal</a>? You'll be using probably for every class, so it's a good idea to get a handle on what it is. Get started <a target="blank" href="http://stackforyourself.com/comp-sci/2016/10/01/command-line/">here</a>.

2. Type the following into your terminal and pressing Enter:

    ```
    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    ```

    This is to install Homebrew. Homebrew is a package manager for Mac; that means it's sort of like the app store for the Terminal.

    After it finishes executing and you get your prompt back, type this and press Enter:

    ```
    echo "export PATH='/usr/local/bin:$PATH'" >> ~/.bash_profile
    ```

    And after that's done, type this and press Enter:

    ```
    brew install node
    ```

    You should now have Node installed. If you type `node -v` into your Terminal and press Enter, you should see output something like this: `v6.9.2`.

<hr>

<h2 class="header medium-header">HTML and CSS, and why you need to know them</h2>

We may not get to cover HTML and CSS in any depth. That said, these are possibly more important than JavaScript for web development, in that HTML and CSS actually define the content on any webpage from any website. If you want to manipulate page elements using JavaScript, you cannot do so without at least a basic understanding of HTML and CSS.

<h3 class="header small-header">HTML</h3>

HTML is the content on a given web page. It's a bunch of nested tags that contain the material meant to appear on the page. Here's an example:

. Get started learning more <a href="" target="blank">here</a>.

<h3 class="header small-header">CSS</h3>

CSS is the . Get started learning more <a href="" target="blank">here</a>.

<hr>

<h2 class="header medium-header">Homework</h2>

- Make sure you have a code editor installed (see above).
- Make sure you have Node installed (see above).
- Take the <a href="https://learnpythonthehardway.org/book/appendixa.html" target="blank">Terminal crash course</a> to get familiar with this text-based, rather than visual, way to use your computer.
- Take <a href="https://www.codecademy.com" target="blank">Codecademy's HTML and CSS</a> courses.

You've gotten this far? Awesome! If you're hungry for more, check out <a href="http://learn.shayhowe.com/html-css/" target="blank">Learn to Code HTML & CSS</a>.
