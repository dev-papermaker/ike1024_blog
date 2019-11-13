# Web developer bootcamp

### s1-introduction to this course

### s2-introduction to front end development

12. introduction to the web
    https://www.youtube.com/watch?v=qEdv_pem-JM

13. the front end holy trinity
    HTML/ CSS/ JAVASCRIPT

### s3-introduction to HTML

18. introdunction to MDN

19. HTML boilerplate and comments

20. basic tags

```
(1)
<h1></h1>
<h2></h2>

(2)
<p></p>

(3)
make text look bold
<strong></strong>
<b></b>
//<strong> means more than <b>

make text look italic
<em></em>
<i></i>
//<em> means more that <i>

```

block elements/ inline elements
semantic markup

21. lists

```
(1) unordered
<ul>
    <li></li>
    <li></li>
</ul>

(2) ordered
<ol>
    <li></li>
    <li></li>
</ol>
```

22. HTML list assignment

23. HTML LIST ASSIGNMENT:SOLUTION

    > SHORTCUT: OPTION+SHIFT+DOWN

24. divs and spans

    > divs are block elements
    > spans are inline elements

25. HTML attributes
    Adding additional information to tags, format is key-value pair
    The most often used attributes are just some of them. Can use MDN reference to search.

```
<img src=""> is a self-closed tag
<a href=""></a>
```

relative path or http links

26. recreate webpage assignment

### s4-intermediate HTML

28. unit objectives

    - table
    - form
    - input

29. HTML tables

```
<table>
    <thead>
        <tr>
            <th></th>
            <th></th>
        </tr>
    </thead>

    <tbody>
        <tr>
            <td></td>
            <td></td>
        </tr>
        <tr>
            <td></td>
            <td></td>
        </tr>
    </tbody>
</table>
```

30. Table Pokemon exercise

31) Table Pokemon exercise: solution

32) Introduction to Forms

- FORM
  > attr: action/ method
  > action: the URL to send form data to
  > method: the type of HTTP request, POST/GET, default is a get method
  > until we use Back end, the form won't actually do anything

> form tag is a shell or container for inputs

- INPUT
  > attr: type/ name/ placeholder
  > type: self closed tag

33. Playing with inputs

34. The form tag

    > form is a block
    > input type is submit, it will refresh the page when no action takes
    > after we submit the data, we get a query string after a ? in the current URL, which contains the name and value of the input

35. Labels

    > attr: for
    > to connect an input with a label, we need to set an id of input equal to a for of label, or just nest an input inside a label

36. Form validations
    > input attr: required, wich validates that an input is not empty

> using an input of type email to validates the email inputs

37. Dropdowns and Radio buttons
    > radio is for single choice
    > checkbox is for multi choices
    > if a button is the last elements of a form, it will submit the form, which has the same funciton as input submit

```
<label for="dogs">Dogs: </label>
<input name="petChoice" id="dogs" type="radio" value="DOGS">
```

> select tag creates dropdown menus

```
<select name="moodChoice">
    <option value="happy">:)</option>
    <option value="neutral">:|</option>
    <option value="sad">:(</option>
</select>
```

> textarea tag

```
<textarea name="paragraph" rows="" cols-""></textarea>
```

38. Form exercise

- use HTML5 to validates the password input

40. Form exercise: sulution

- How to break inputs into different lines?

  - put in a div
  - put in a p

- How to set name and value for select tag?

  - name: put name attr in select tag
  - value: if you want values different than that between option tags, add attr value in option tag

- What does required title attr in inputs mean?

  - required title is going to put the its values into the notification message for users put no valid values

- How to set a label for multi inputs?

  - Only one of the selects can be matched up to the label, in this case a fieldset tag with a legend would probably be better suited for labeling the group of select tags, then giving each one it's own label would also help.
  - add fieldset include m/d/y together, then set a label for each select input

- How to make radio inputs a single choice?

  - set the same name for these group of radio inputs

- Using what format to make id and name look different?

  -

-

### s5-Introduction to CSS

41. Unit Objectives

    1. rule
    2. css connect to html
    3. select elements by tag name, class, ID
    4. style elements with basic properties like color and background
    5. use chrome CSS inspector to debug HTML and CSS

42. CSS basics
    > 'ZEN GARDEN' recommand book

```
selector {
    property: value;
    anotherProperty: value;
}
```

43. Our first stylesheet

- where to write styles?
  - inline (unefficient/ not separate from html file)
  - style tag in head tag (not separate from html file)
  - using `<link rel="stylesheet" type="text/css" href="style.css">`

45. CSS colors

- way to value colors?
  - use words like green, gold,etc.
  - use format like # + string of 6 hexadecimal numbers from 0 to F. (between #000000 and #FFFFFF)
  - use format like rgb(255, 255, 0), which containing 3 channels, which are red, green and blue. Each range from 0 - 255.(the dimension values are between 255 and 0)
  - use format called RGBA, like rgb(255, 255, 0, 0.7), just like RGB but with an alpha (transparency) channel. Ranges from 0.0 to 1.0.

```
1. Hexademical
#FF0000

2. RGB
rgb(255, 0, 255)

3. RGBA
rgba(255, 0, 255, 0.7)
```

46. Background and border

- background

  - background: can be color or url()
  - background-repeat: can be non-repeat
  - background-size: can be cover

- border
  - border-color:
  - border-width:
  - border-style:

> or we can give color, width, style all in a border property

48. Selectors basics todo list

- basics: element, ID, Class

```
1. select elements
p {

}

2. select an only ID
#thisElement{

}

3. select a class
.this-class{

}
```

> text-decoration(CSS property):

49. Introduction to Chrome inspector

- view page source
- inspect element

50. More advanced selectors

- element

```
li {

}
```

- ID

```
#hello {

}
```

- class

```
#name {

}
```

- star: select every element

```
* {

}
```

- descendant selector

```
ul li a {

}
```

- adjacent selector

```
h4 + ul {

}
```

- attribute selector

```
a[href="http://www.google.com"] {

}

input[type="checkbox"] {

}
```

- nth of type

```
ul:nth-of-type(3) {

}

li:nth-of-type(3) {

}
```

52. Specificity and the cascade

- inline(value=1000) > ID(value=100) > class/attributes/pseudo-classes(value=10) > element(value=1)
- the more specific selector wins
- type selectors

```
li {

}
li a {

}
li + a {

}
```

- class/ attribues/ pseudo-class selectors

```
.hello {

}
input[type="text"] {

}

below are pseudo-class selectors
a:hover {

}
input:checked {

}
```

- ID selectors

```
#hello {}
```

### s6-Intermediate CSS

56. Unit objectives

    1. manipulate common font and text properties using CSS
    2. include external fonts using Google fonts
    3. define and manipulate the 4 components of the box model
    4. exercise
       - tic tac toe board
       - image gallery portfolio site
       - minimalist blog site

57. text and fonts
    > lorem ipsum is a kind of random normal looked paragraphs

- font-family: what kind of font

- font-size: set the size of font, the font-size unit can be px or em, em is representing a relative font size.
  > em = desired element pixel value / parent element font-size in pixel
  > default browser font-size is 16px

58. More text and fonts

- font-weight: how thick the font are, values can be bold and so on. The value number that can be set depends on different font-family
- line-height: height of given line
- text-align: how text align in the space, on the right, left or centre ,etc.
- text-decoration

60. Using Google fonts

- using link tag to include external font file

61. Introduction to the box model

- content: width and height
- padding
- border
- margin: when giving 4 values to margin, it starts from top, right, bottom, left. Margin is between the current border and the other element's border, which is between the elements basically.
  - `margin: 0 auto 0 auto`, this could set the left and right
  - `margin: 20px, 50px`, this could set the top and bottom to be 20px, and left/ right to be 50px

62. Creating a Tic Tac Toe Board

63) Creating a Tic Tac Toe Board: solution

- it's better to use class to give the selected elements the same css properties
- `.these:nth-child(-n+5)` the select the elements from the 1st to the 5th
- `.these:nth-child(n+6)` the select the elements from the 6th to the last
- css file's name can not start with number
- table tag is a block element, but it will not take the whole line
- h1 tag is block, and it will take the whole line, using text-align css property to make it center

64. Note about image gallery code along
    https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/2670526

65. Image gallery code along-pt1

- float
- calculate the parts of space between elements and set a margin

66. Note about changes to Google Fonts

67. Image gallery code along-pt2

- include goooge fonts using link tag
- text-transform: uppercase

68. CSS bolg exercise

69. CSS bolg exercise: solution-pt1

- use max-width to set a maximum limit, and also set a width using % to measure, so that the element width would change as the browser window change, but when the window size goes too far, the element will stay at the max-width. But the element will shrink as the window size get narrow
  > use max-width and width together

70. CSS bolg exercise: solution-pt2

- use a div to contain a post of content, then use a class to mnange every post the same way
- letter-spacing: use px/ em/ rem as a unit for value
  - em: the value will depend on the parent element, which is relative
  - rem: the value have nothing to do with parent element

```
body {
    font-size: 2rem;
}

.inside-body {
    font-size: 2rem;
}

<!-- the font-size for the 2 elements are the same -->
```

- word-spacing:

71. CSS bolg exercise: solution-pt3

- hr tag- hr tag style can be changed

### s7-Bootstrap

72. Unit objectives

    1. What Bootstrap is? What library is? How does it work?
    2. Include Bootstrap locally and by using a CDN
    3. Use common Bootstrap components like navs and buttons
    4. Build a layout using the Bootstrap grid system

    - 2 projects
      - protfolio site
      - startup landing page

73. What's bootstrap

- Bootstrap is the most popular HTML, CSS, JS framework for developing responsive, mobile first projects on the web. Bootstrap is a single CSS file and JS file.
- reasons to use Bootstrap:
  - popular
  - quick develop
- in this unit, just simply go through the CSS and Component part

75. Adding Bootstrap to a project

- bottons: we can use button classes on `<a>, <button>, <input>`, the classes order added on the elements donot matter
- style classes
- size classes
- status classes: like active
- disabled attribute: `disabled="disabled"`
- Bootstrap class can be overwritten by yourself

76. forms and inputs

- be good at accessing information to develop. Memorize some of them and be quick when searching the others
- Jombotron: it's a lightweight, flexible component that can optionally extend the entire viewport to showcase key content on your site
- container class has a padding left and right
- form-group and form-control classes are making elements look good
- form-group class is for optimum spacing for elements inside
- form-inline class: all elements inside will be in the same line
- container class:

77. Nav bars

- navbar class
- navbar-default class
- collapse class
- search bootstrap example and get pieces of the code, which you actually need into your code

79. The grid system

- objectives
  - understand the purpose of grid system
  - understand the 4 different sizes
  - write nested grids
- divided into 12 columns

```
<div class="container">
    <div class="row">
        <div class="col-lg-10"></div>
        <div class="col-lg-2"></div>
    </div>
</div>
```

80. Grid system-pt.2

- 4 sizes: xs, s, md, lg
- xs for mobile
- s for tablets
- md for desktops
- lg for bigger desktops
- when the split way is the same for large and medium size, just mention in medium size like `col-md-3` and no need to mention again in large size like`col-lg-3`, it will aplly to large size using the way divided in medium size automatically

81.

- Additionally, students have reported having trouble with the grid when using images of varying sizes. See below for a few solutions:
  - If you don't mind the images being of varying heights, but want to get rid of the white space bug then see here[https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/1989586]
  - If you're looking for Pinterest-like presentation of thumbnails of varying heights and/or widths, you'll need to use a third-party plugin such as **Masonry, Isotope, or Salvattore**.
  - If you want to crop all of the images to the same size then see an example of this here[https://codepen.io/nax3t/pen/MJwpdb]
  - Last, but not least, if you're having trouble with the glyphicons (they're not showing up, but showing a rectangle instead) then see here[https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/2395046] for a solution.

82. Bootstrap Image Gallery-pt.1
    > # how to set the elements on the same horizontal line?
        1. vertical-align: middle;
        2.

> # how to set a margin between images even when the layout change along with the window size?

    1. use the class img-thumbnail on the image

> # how to set a responsive jumbotron?

- jumbotro class div inside a container class div
- navbar-inverse class to make the background of navbar become black
- use div with thumbnail class to put image inside and get image proper border and margin

  > CMD+D to highlight all the same words in the file

- navbar-fixed-top

83. Note about font-awesome

- font-awesome is a font/icon library

84. Bootstrap Image Gallery-pt.2

- use inspect to get the css selector and change it using equal or higher priority

85. Creating a startup landing page code along
    > # How to make sure background image cover the entire screen all the time?

```
body {
    background-image: url();
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

use:
1. let the html height cover the window, or background height will end at the last content in html
html {
    height: 100%;
}

2. use background-attachment: fixed
```

```
1. background
html {
  background: url(images/bg.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

2. image
img {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

3. image: but does not center the image
image {
  position: fixed;
  top: 0;
  left: 0;

  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}

4. image inside a div
<div id="bg">
  <img src="images/bg.jpg" alt="">
</div>
#bg {
  position: fixed;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
}
#bg img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  min-width: 50%;
  min-height: 50%;
}

5. background
html {
  background: url(images/bg.jpg) no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
```

> # how to make elements inside a div center?

- gather all the same CSS property on several elements in one {} using , to seperate them in a line
- make hr tag a shadow

```
hr {
    width: 400px;
    border-top: 1px solid #f8f8f8;
    border-bottom: 1px solid rgb(0,0,0,0.2);
}
```

- text-shadow CSS property: it has 4 parameters, which are offset-x, offset-y, blur-radius and color

```
h1 {
    text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
                 0px 8px 13px rgba(0,0,0,0.1);
                 0px 18px 23px rgba(0,0,0,0.1);
}
```

- If you want your bootstrap styled website to be responsive on mobile then be sure to add the following meta tag to your head element, above the title tag:

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### s8-Bootstrap 4

88. A history of Bootstrap 4

- the software development stages: alpha, beta, stable release

89. The Bootstrap 4 Documentation

90. Changes from Bootstrap 3 to 4

- flexbox is enabled by default, before we use sth like float
- switch from px to rem as primary CSS unit
- global font-size increase from 14px to 16px
- grid system options change to `.col- .col-sm- .col-md- .col-lg- .col-xl-`

91. Bootstrap 4 code/solutions download

92. Getting Started With Bootstrap 4

- colors

93. Bootstrap 4 Colors and backgrounds

94. Typography

- rem: r stands for root

95. New Fancy Spacing Utilities

- m- stands for margin, p- stands for padding
- t-, b-, l-, r- ,x- ,y-
- size from 0 to 5, and auto

96. Responsive Breakpoints

- {property}-{sides}-{breakpoint}-{size} for sm, md, lg and xl, no breakpoint stands for extra small

97. Bootstrap4 Navbars

- navbar has been entirely written in flexbox
- navbar-expand-{breakpoint}
- bg- can set background color
- classes like navbar-dark only affect on text color

98. The new display utility

- d-{value} or d-{breakpoint}-{value}

### s9-Bootstrap4: Flexbox and Layout

99. Bootstrap4: Flexbox and Layout

- flexbox is a model for positioning content inside of a box basically
- set class on the container element
- justify-content: main access
- aligh-items: cross access
- At default, vertically, top is start. Horizontally, left is start

100. Flexbox utilities-pt.2

- flex-row is default, flex-column changes the main access(justify content) to vertical way
- flex-row-reverse or flex-column-reverse reverses the order of the items and also the order on the main access
- When reverse, for flex-row-reverse, the order of the items reverses and right side is start. For flex-column-reverse, the order of the items reverses and bottom side is start
- align-self: align on item

101. Navs and flexbox

- navs are rewrote with flexbox
- .nav, -nav-items, nav-links

102. The Bootstrap4 Grid

- container-fluid make element all across the screen

103.  Pattern project-pt.1
      > # how to center content in jumbotron?
           1. use flexbox, flex-column, align-items-center

- Take justify-content for example, the difference between around and between is between set the items taking all space of container, the first and last item to hit the start and end of the container, so the margin between them are larger. While as for around, the margin between the items are smaller.

> # how to make margin between items in flexbox?

> # how to make the text in navbar lighter?

    1. use navbar-dark, if the a tag just under the navbar-dark div, which looks like this ```<a class="nav-link active" href="#">Active</a>```, the text in the link will stay on the style that nav-link offers and will not be affected by navbar-dark, so does a tag wihout any classes, it will stay the default Bootstrap a tag style.

- we can make the settings all in background property

```
    background: url(https://images.pexels.com/photos/1092364/pexels-photo-1092364.jpeg?cs=srgb&dl=bricks-brickwall-brickwork-1092364.jpg&fm=jpg) center center / cover no-repeat;
```

- we can use text-center in the jumbotron div and do not need to use a container div inside jumbotron

```
    <section id="header" class="jumbotron text-center">
        <h1 class="display-3">PATTERN</h1>
        <P class="lead">dfa adfasfaf adfasfdsfd adsfsdfasd sdfsdf,hnjk,njcnk,vzcxef,vxcbreergvxz,</P>
        <a href="" class="btn btn-primary">Do Something</a>
        <a href="" class="btn btn-success">Another Thing</a>
    </section>
```

104. Pattern project-pt.2

- look up in the document and code yourself
- need to add btn-sm or other size to adjust the size of button
- better to use grid to implement the card sections instead of flexbox
- you need to get a div with class like col-lg-4 outside the card div, or if you add col-lg-4 on the card div itself, it will have wierd padding and the image will not just fit in the card div
- also, the margin class like mb-4 have to be add on the div with col-lg-4 class

105. The Grid + Flexbox

- With 3 col-md-3 divs inside a row div, when the window size shrink to smaller screen size, the col-md-3 divs will each take a whole row, it's like the effect of col-12
- default align-items is stretch
- align-self

106. Museum of Candy Project-pt.1-introduction to project

- fixed-top: make navbar fixed to top
- aria-label: label a tag with a meaningful name to developers
- always give a useful and meaningful ID to main tags

107. Note about Museum of Candy Project-pt.2

- media query

108. Museum of Candy Project-pt.2-making navbar

109. Museum of Candy Project-pt.3-making the first context section

110. Museum of Candy Project-pt.4-making context section

- it has enabled flex display along with row tag
- use row inside a col to make things easy to center

```
<div class="col-md-6 text-center order-1 order-md-2">
                <div class="row justify-content-center">
                    <div class="col-10 col-lg-8 blurb">
                        <h2>MUSEUM OF CANDY</h2>
                        <i class="far fa-circle d-none d-lg-inline"></i>
                        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In feugiat sem tempor,
                            egestas neque in, facilisis neque. Nam posuere dignissim velit quis iaculis. Mauris in
                            sapien quis ligula scelerisque lacinia. Suspendisse eros leo, laoreet a ex eu, consectetur
                            tincidunt est. Vestibulum placerat egestas mi id porta. Proin quis aliquam lacus, eget
                            semper est. Integer sodales condimentum nulla, vitae imperdiet enim rhoncus scelerisque.
                            Praesent nec dui sit amet urna dictum eleifend vitae id elit. Nam euismod in elit nec
                            tristique.
                        </p>
                    </div>
                </div>
            </div>
```

111. Museum of Candy Project-pt.5-adjust spacing for section and toggler background change when scrolled

- use toggleClass and scroll through jQuery
- transition: CSS property

- review CANDY MUSEUM-pt.1

  - when changing an element using BOOTSTRAP class style, need to use a more specific selector to select the element, for example, you need to select its parent element before its class name
  - need to include the library before use them
  - remember how to use collapse navigation with BOOTSTRAP

  ```
      <nav id="mainNavbar" class="navbar narbar-dark bg-transparent fixed-top navbar-expand-md py-0">
      <a href="" class="navbar-brand">CANDY</a>
      <button class="navbar-toggler" data-toggle="collapse" data-target="#navLinks" aria-label="Collapse Toggler">
          <span class="navbar-toggler-icon"></span>
      </button>

      <div class="navbar-collapse collapse" id="navLinks">
          <ul class="navbar-nav">
              <li class="nav-item">
                  <a href="" class="nav-link">HOME</a>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link">ABOUT</a>
              </li>
              <li class="nav-item">
                  <a href="" class="nav-link">TICKETS</a>
              </li>
          </ul>
      </div>
  </nav>
  ```

### s10-Introduction to JavaScript

112. Unit Objectives

     1. evaluate JS using the developer console
     2. list the 5 JS primitives
     3. define variables with the **var** keyword
     4. write code using console.log, alert and prompt

113. JS console

- it's used for testing things out
  > JS console: CMD+ALT+J

114. Primitives

- numbers
  - modulo: remainder operator
- strings
  - concatenation
  - escape characters start with "\"(backslash)
  - .length
  - access individual characters using [] with an index
- booleans: true/false
- null
- undefined

115. Primitives exercises

```
"\\" is "\"
```

116. Variables

- JS has dynamic typing
- how to name?
  - camel case. `camelCaseName`
  - snake case. `snake_case_name`
  - khabab case or dash case. `dash-case-name`
- JS variables should be camel cased

117. Null and undefined

- null: explicitly nothing
- undefined: variables that are declared but not initialized

```
var currentPlay = "Cat";
currentPlay = null; //game over
```

118. Useful built-in methods

- console.log
- alert
- prompt

```
var userName = prompt("what's your name?");
```

119. Writing JS in a seperate file

120. JS stalker exercise
121. JS stalker exercise: solution

122. Age calculator exercise

123. Age calculator exercise: solution

### s11-JavaScript Basics: Control flow

124. Unit Objectives

     1. Evaluate complex logical expressions
     2. with 3-part conditional statements(if/else if/else)
     3. write JS while loops and for loops
     4. translate between while and for loops

125. Boolean logic

- comparison operators: >, >= ,< ,<= ,== ,!= ,=== ,!==
  - ==: equal to
  - ===: equal value and type
  - !==: not equal value or equal type
  - == performs type coercion, while === does not

```
var v = 99;
x == "99"; //true
x === "99"; //false

var y = null;
y == undefined; //true
y === undefined; //false

some interesting cases:
true == "1"; //true
0 == false; //true
null == undefined; //true
NaN == NaN; //false
```

126. Note about logical operators lecture

127. Logical Operations

- &&: and
- ||: or
- !: not
- values are inherently truthy or falsey when evaluated in a boolean context

```
!!NaN stands for false
NaN stands for false
```

- falsy values:
  - false
  - 0
  - ""
  - null
  - undefined
  - NaN
- Everything else is truthy

```
"false" is truthy
```

128. Conditionals

```
if (age<18){}
else if (age >18 && age <21){}
// this can be rewritten as below
if (age<18){}
else if (age <21){}
```

> # how to test in JS if a parameter is a square number?
>
> # is 0 negative? Answer: 0 is neither positive or negative

- !== and === are strict comparison, and == / != are loose comparison. It's best to use strict comparison.

130. Guessing Game

- Math.random: generate a random number from 0(inclusive) up to but not including 1(exclusive)
- Math.floor():
- Math.ceil():

131. Note about Introduction to loops

132. Introduction to loops

- DRY: do not repeat yourself
- keep code cleaner

133. 3 While exercises

134. While loops problem set

135. While loops problem set: solution

- number = number + 2 can be written as number += 2

136. Annoy-O-Matic

- str.includes(): return true or false;
- str.indexOf(): str.indexOf("yes"), return the index;

137. Note about Intro to For Loops

138. Intro to For Loops

- contrast: an obvious difference between two or more things
- for loops

```
for(init; condition; step){
    // run some code
}
```

129. For loops quick exercises

130. Loops problem set

- repeat method:

```
console.log("$",repeat(i));

str.repeat(3);
```

### s12-Javascript Basics: Functions

142. Unit Objectives

     1. Write function declarations and function expressions
     2. Explain the difference between console.log and return
     3. Define functions that take multiple arguments

143. Introduction to Functions

- functions are one of the building blocks of JS
- declare function

```
function doSomething () {
    //some code
}
- call function
```

144. Arguments

145. Note about Function Declaration vs. Function Expression

- difference between a Function Declaration and a Function Expression[https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/]

- function delaration

```
function bar() {
    return 3;
}
```

- function expression: Functions defined via Functions Expressions can be named or anonymous. Function Expressions must not start with “function”
- The function name (if any) is not visible outside of it’s scope (contrast with Function Declarations).

```
//anonymous function expression
var a = function() {
    return 3;
}

//named function expression
var a = function bar() {
    return 3;
}

//self invoking function expression
(function sayHello() {
    alert("hello!");
})();
```

- Function declarations and function variables are always moved (‘hoisted’) to the top of their JavaScript scope by the JavaScript interpreter
- Variable Declarations get hoisted but their Assignment Expressions don’t.

```
var bar = function() {
    return 3;
};

//**Simulated processing sequence for Question 2**
function foo(){
    //a declaration for each function expression
    var bar = undefined;
    var bar = undefined;
    //first Function Expression is executed
    bar = function() {
        return 3;
    };
    // Function created by first Function Expression is invoked
    return bar();
    // second Function Expression unreachable
}
alert(foo()); //3
```

146. return keyword

- console.log is get data print to the console
- return: we can capture the value coming back from the function
- function has to return sth, if a function do not mention what to return, it will return undefined
- capitalizes the first char in a string

```
str.charAt(0).toUpperCase() + str.slice(1);
```

- typeOf
- function declaration vs. function expression

147. Function Quiz

- if return is executed, the function will stop executing the following code

148. Functions Problem set

- isEven() function exercise
- factorial() function exercise
- replace() method:
  `string.replace("search_value","new_value")`

149. Functions Problem set: solution

- If you are replacing a value (and not a regular expression), only the first instance of the value will be replaced. To replace all occurrences of a specified value, use the global (g) modifier

```
var str = "Mr Blue has a blue house and a blue car";
var res = str.replace(/blue/g, "red");
```

150. Scope Code Along

- global scope: outside function
- sth inside the function can access outside the function, but the opposite is not true

151. Scope Quiz

- every function has its own scope and they are not shared between functions

152. Higher order functions

- higher order function: either take a function as an argument or return another function

```
// call sing function every 1000ms, as we just need to pass the function name and the code inside of it to setInterval, it's not our job to call the sing funciton, it's setInterval's job to call

setInterval(sing, 1000);

// when setInterval(sing, 1000) executed, it return a number 2
// we need to use the returned number to clear interval

clearInterval(2);

// pass an anonymous function to a function, we do not define a separate function ahead of time
setInterval(function(){}, 1000);
```

### s13-Javascript Basics: Arrays

153. Unit objectives

- data structures are ways of storing data, ways of holding information using Javascript
  1. define and add data to arrays
  2. utilize built-in array methods
  3. exercise: console todo list

154. Intro to arrays

- array let us group data in a list

```
colors = ["red", "blue","green"];
colors[10] = "violet";
colors = ["red", "blue","green",undefined*7, "violet"];
```

- how to define an array:

```
1. initialize an empty array
var friends = [];

2. uncommon
var friends = new Array();

```

- arrays can hold any type of data
- .length

155. Array methods\*6

- .push() and .pop(): for the last item.
  - .push() will return the length of the array
  - .pop() will return the removed item
- .unshift() and .shift()
  - .unshift() will return the length of the array
  - .shift() will return the removed item
- .indexOf(): check the item's index
- slice(): slice return the copy of the sliced items, it does not change the original array. The first parameter is the start of the slice, it's contained in the slice items. The second parameter is the end of the slice, it's not included in the slice itmes

156. Array quiz

157. Note about Todo List Code Along
     > Chrome browser behaves a little strangely when using alert, prompt, or confirm functions. It doesn't display the HTML on the page until after the popup has been closed. This is problematic since our HTML contains instructions for the user to be able to use the app we're building. You can avoid this by wrapping your JS code in the following setTimeout function:

```
window.setTimeout(function() {
  // put all of your JS code from the lecture here
}, 500);

var todos = ["Buy New Turtle"];
window.setTimeout(function() {
  // put all the rest of your JS code from the lecture here
}, 500);
```

158. Todo List

159. Array iteration

- for loop: may need to use .length() to get the length of the array
- .forEach(): `arr.forEach(someFunction);`
- when need to put a function name as parameter in .forEach(). we donot need to add parentheses.
  > JS will execute the function when the function follows by parentheses

```
arr.forEach(function(i){
    // this code will execute every time the function is called and take an item out of array
})
```

- while loops can work but it's not common and too troublesome

160. Quick Array Iteration Challenge

161. Note about Todo List Code Along-pt2
     [https://www.udemy.com/the-web-developer-bootcamp/learn/v4/t/lecture/7517852?start=0]

> .forEach takes a callback function, that callback function is expected to have at least 1, but up to 3, arguments. The arguments are in a specific order:

- The first one represents each element in the array (per loop iteration) that .forEach was called on.
- The second represents the index of said element.
- The third represents the array that .forEach was called on (it will be the same for every iteration of the loop).

You have a couple options when calling .forEach on an array:

- You can pass in an anonymous function:

```
[1,2,3].forEach(function(el, i, arr) {
  console.log(el, i, arr);
});
```

- Or you can pass in a pre-written, named function.

```
function logNums(el, i, arr) {
  console.log(el, i, arr);
}

[1,2,3].forEach(logNums);
```

162. Todo List Code Along-pt2

- .splice(): `arr.splice(index, number_of_items_start_from_index_to_be_deleted)`
- organize into functions to make code more structured

163. Array Problem Set

     > return: end the function and return a value, we cannot use return in forEach, it will return nothing.

164. Array Problem Set: solution

- forEach(): There is no way to stop or break a forEach() loop other than by throwing an exception. The return will just exits the current function, but the iterations keeps on.

165. OPTIONAL: Building Our Own ForEach

```
Array.prototype.myForEach = function(func){
    for (var i = 0;i<this.length;i++){
        func(this.arr[i]);
    }
};
```

### s14-Javascript Basics: Objects

166. Introduction to Objects

```
var person = {
    name: "Cindy",
    age: 32,
    city: "Brisbane"
};
```

- store data in key-value pairs
- retrieving data:
  - dot notation: person.name
  - bracket:person["name"];
- difference between bracket notation and dot notaion:
  - if the key property starts with a number, you cannot use dot notation
    ```
    someObject.1blah //invalid
    ```
  - you can lookup using a variable with bracket notation
  ```
  var str = "name";
  someObject[str]; //valid
  someObject.str; //does not look for "name" in this case
  ```
  - cannot use dot notation for key property name with spaces in it
  ```
  someObject["this name"]; //valid
  someObejct.this name; //invalid
  ```
- updating data: access a property and reassign it
- creating objects:

```
1. make an empty object and then add to it
var person = {};
person.name = "Kat";

2. all at once
var person = {
    name: "Cindy",
    age: 32,
    city: "Brisbane"
};

3. another way of initializing an object
var person = new Object();
person.name = "Kat";
```

- objects can hold all sorts of data

167. Comparing Objects and Arrays

168. Nested Objects and Arrays

169. Objects Quiz

170. Movie Database Exercise

171. Adding Methods to Objects

- adding methods to an object
  - help organise the code
  -
- namespacing
  > we can have properties and functions and methods named in the same way but stored in different objects, it group the code and help make code organised

```
var dogSpace = {};
var catSpace = {};
dogSpace.speak = function (){
    return "WOOF!";
}
catSpace.speak = function (){
    return "MEOW!";
}

<!-- run the methods -->
dogSpace.speak();
catSpace.speak();
```

172. The Keyword This

- library underscore.js is an object
- writing this inside of a method it refers to the object that the method is defined in

### s15-DOM Manipulation

173. Note About DOM Manipulation Lectures

174. Introduction to the DOM

- DOM example: game, scrolling effects, dropdown menus, form validations, interactivity, animations, every awesome site ever
  [https://www.patatap.com/]

175. Defining the DOM

- DOM: document object model, is the interface between your JAVASCRIPT and HTML and CSS
- the browser turns every HTML tag into a JAVASCRIPT object that we can manipulate, everything is stored inside of the document object

176. Select and Manipulate

- console.dir(): shows JS objects

177. Note about UI changes in new versions of Chrome

- differences between NodeList and HTMLCollections:
  > Both interfaces are collections of DOM nodes. They differ in the methods they provide and in the type of nodes they can contain. While a NodeList can contain any node type, an HTMLCollection is supposed to only contain Element nodes.
  > An HTMLCollection provides the same methods as a NodeList and additionally a method called namedItem.

178. Important Selector Methods
     1. document.getElementById();
     2. document.getElementsByClassName();
        - it returns a list, not an array, so it cannot use forEach() function


    3. document.getElementsByTagName();
        - for getting an HTMLCollection, even it just contains only one element, it still returns a list
    4. document.querySelector();
        - returns the first element that matches a given CSS-style selector
        - only return one element

    5. document.querySelectorAll();
        - returns a list of elements that matches a given CSS-style selector

179. selector exercise

180. Manipulating style

- DOM manipulation
  - changing an element's style
  - adding/ removing classes
  - changing the content of a tag
  - changing attributes (src, href, etc.)
- ways of manipulate the style
  1. .style property
  2. .classList
     - .classList.add()
     - .classList.remove()
     - .classList.toggle(): if the element has this class, take it off, or just add it on

182. Manipulating Text and Content
     1. .textContent: return a string of all the text contained in a given element


    2. .innerHTML: returns a string of all the HTML contained in the element. It treats input and output as HTML, and render it on the page if it could

183. Manipulating Attributes

- getAttribute()
- setAttribute(): the first parameter is an attribute name, the second parameter is the attribute's value
  > they only work on individual element
- for adding url in src or href, just add `http://` before, since it's an absolute path which means just go to this URL don't try and add it onto the end of where we are

184. Note about changing the Google logo in next lecture

- changing the logo on the google website using the src attribute no longer works. Just instead use the srcset attribute to change the logo image.

- Additionally, if you're visiting google.com and getting redirected to your country's version of google, then try visiting this link instead. - [https://www.google.com/ncr]

185. Playing With Google Code Along

- when manipulating a collection of elements:
  - select them all in a list
  - loop through the collection
  - do something to individual element inside the loop, which repeat to all of them

### s16-Advanced DOM Manipulation

186. Introduction to Events
     `theElement.addEventListener("click", function(){});`

187. Color Toggle Exercise
     > move the script tag to the bottom of the body
     > `document.body`

```
1. use if to check the background color
var isPurple = false;
if (isPurple){
    //change the background color to white
    isPurple = false;
} else {
    //change to purple
    isPurple = true;
}

2. change the var isPurple after the if statement
isPurple = !isPurple;

3. use .classListToggle("purple-class")
```

188. Score Keeper Project Part 1
     > # How to pass parameter to call back function in eventlistener?
     >
     > # Research about event target and event?

- event change vs event input
- use a variable to check if the game is over
- use a function to make code reusable

189. Note about Score Keeper Project-pt2

190. Score Keeper Project-pt2

191. Other Types of Events: Todo List

192. Note regarding counting events exercise

193. Counting Events Exercise

### s17-Color Game Project
### my solution summary 
> prepare HTML structure first, then function, style next
> # how to make a navigation bar? Using ul or table or sth else?
[https://www.w3schools.com/css/css_navbar.asp]
- with display: inline, the width, margin-top, margin-bottom and float properties have no effect

> # how to center menu links?
- fixed width on a tag in li tag

```
ul {
    list-style-type:none;
    margin:0;
    padding:0;
}

li {
  float: left;
}

a {
  display: block;
  padding: 8px;
  background-color: #dddddd;
}

// or 
li {
  display: inline;
}
```

> # how to set a certain number of items in a row when using flex box?

- Math.random(): from 0 to 1, not include 1

> # can we declare a variable but not give another value? 
ANSWER: Sure

> # Difference between the display property and the visibility property?
ANSWER:
- display will release the space 
- visibility just hide the element, it still take up the space
- just hide the container, if the elements in it are still visible, they will not be hidden

### course solution summary
- use an array to store all 6 squares' RGB
- pick one from the array to be the guessing RGB
- if we click on the wrong color square, its backgroundColor will change to the container's 
- write a separate function to change all the squares to certain color
- write a separate function to randomly pick a guessing RGB from the RGB array, we will use Math.floor() and Math.random()

- write a function to generate 6 random RGB and put in an array
- write a function to generate random RGB 
- 

194. Notes regarding color game

195. Creating the Color Game-pt1

196. Creating the Color Game-pt2
- use style.backgroundColor instead of style.background, which is more compatible with more browsers
- 

197. Creating the Color Game-pt3

198. Creating the Color Game-pt4
- if you put no spaces between comma and the next parameter, looks like ```rgb(r,g,b)```, and you set this value to a color or background property, CSS or DOM automatically add spaces between comma and the next parameter. In this situation, use double equals will not fix it.
- 

199. Creating the Color Game-pt5

201. Creating the Color Game-pt7
- transition: CSS property
```
transition: background 0.6s; //just happens when background changes

transition: all 0.6s; // happens when any of the CSS properties changes
```
- easyMode: generate 3 colors in the array, but there are still 6 squares in the list. When using loops, if there the index of suqare is beyond the index of color, hide it.
- hardMode: Since the length of colors equals to the length of squares, make sure all the squares are visible and added on color.
- browser support: 
    - -webkit-
    - -moz-
- span display: inline-block

202. Creating the Color Game-pt8
- outline: none
```
this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
```
- shorten the code

203. Creating the Color Game-pt9
> design patterns: ways of structuring your code
- module design patterns: add properties into object
    - keep things structured and organized
    - avoid name collisions
> books: "JavaScript: The Good Parts", "Learning JavaScript Design Patterns"

### s18-Intro to jQuery
204. What is jQuery? 
- it comes with a bunch of useful methods to things like:
    - select elements
    - manipulate elements
    - create elements
    - add event listeners
    - animate elements
    - add effects
    - make HTTP requests (AJAX)

205. Why Use jQuery?

206. Including jQuery
- download jQuery and link to it locally
- link to a CDN (a hosted copy)

208. Selecting with jQuery
- ```$("")``` works like document.querySelectorAll()
- manipulating style
```
1.
$("#special").css("border", "2px solid red");

2. 
var styles = {
    background: "red",
    fontWeight: "bold"
}

$("#special").css(styles);

3.
$("li").css({
    fontSize: "10px",
    border: "2px solid purple",
    background: "rgba(45, 54, 67, 0.5)"
});

```
- when jQuery select a list of elements, it will manipulate all these elements

209. Selector Exercise

210. Text and HTML

211. Attr and Val

212. Manipulating Classes
- addClass()
- removeClass()
- toggleClass()

### s19-Advanced jQuery
213. jQuery Events: Click

215. jQuery Events: Keypress

216. jQuery Events: On

217. jQuery Effects

### s22-Backend Basics
240. Introduction to Backend

241. HTTP in Depth
- get request: just retrieve data, donot take changes to database
- query string
- postman

242. Backend Workflow-pt1
243. Backend Workflow-pt2

244. Note about Cloud9 signup - IMPORTANT!!! Please Read!
245. Introduction to Cloud 9
246. Setting Up Cloud9


### s23-The Command Line
247. A NOTE ON SOLUTIONS!
[https://ide.c9.io/learnwithcolt/webdevbootcamp]

248. Introduction to the Command Line
- "Getting to Know the Command Line": [https://www.davidbaumgold.com/tutorials/command-line/]
- "Survival Guide for Unix Newbies": [http://matt.might.net/articles/basic-unix/]

249. CD and LS
- ```ls```: stand for list. Show all files and folders of current folder
- ```cd```: change directories
- ```cd..``` goes to the upper folder
> when use ```cd``` to change directories, you can inert the first several letters and then press TAB to auto complete the folder name
- you can use ```ls``` to list files and folders in other folder, like ```ls color```, but you won't change directories

250. Touch and Mkdir
- ```touch```: make a new file, which can be any types of file
- ```mkdir```: make a new directory

251. Removing Files and Folders
- ```rm```: delete specific individual file
- ``` rm -rf```: delete entire directory. ```rf``` stands for recursive force, ```rf``` is a modifier or called a flag for ```rm``` command

252. Command Line Exercise

### S24-Node JS
253. Introduction to Node

254. Using node
    1. interact with node
    - type ```node``` in console to get into node editor
    - type ```control + c``` twice to quit node
    2. executes node file 
    - ```node <filename>```

255. Node Echo Exercise

256. Node Average Exercise

257. Introduction to NPM

259. Installing NPM Packages
- use ```npm install``` to install a package under a directory
- use ```require()``` to include a package in js file

261. NPM Faker Exercise

### s25-Server Side Frameworks
262. Introduction to Express
263. Note about Our First Express App
264. Our First Express App
- routes
- listen: need to be added to the bottom of every express application
```
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Now serving your app!")
})
```
- res.send()

265. The Package.json
- ```--save```: when downloading the package or library, and add it to the dependencies of package.json
- what is a package.json file? Answer: It is file containing meta data about an application or a package
- use ```npm init``` to create a package.json

266. How to automate server restart
[https://www.youtube.com/watch?v=GvLvrlOqq9g&feature=youtu.be]

```npm i -g nodemon```

267. Route Params
- route matcher `*`: it's like an else in if else group
```
app.get("*", function(req, res){
    res.send("This is a regular response!");
})
// need to put this at the bottom
```

- route parameters/ path variables
```
app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    var params = req.params;
    res.send();
})
```

- route order
```
var express = require("express");
var app = express();


// "/" => "Hi there!"
app.get("/", function(req, res){
    res.send("Hi there!");
});
```
269. Express Basics Exercise: SOLUTION
- use objects to keep the data in a pattern 
- use for loops to repeat the repeated message certain times

### s26-Intermediate Express
270. Note about Templates and EJS

271. Templates and EJS
- res.render("home.ejs"): need to install ejs package first, ejs stands for embedded javascript, which enables us to have dynamic templates HTML
- use ```<%= some js code %>``` in HTML to take js code
- use ```res.render("home.ejs", {thingVar: thing})``` to pass data to a template

272. EJS: Conditionals and Loops
- examples of control flow in EJS templates
- write if statements in an EJS file
- write loops in EJS file
- 2 types of tags in EJS

```
1. render the code inside to HTML
<%= %>

2. evaluate the code but not show in HTML, which can be used for logic
<% %>

3.
<%- %>
```

273. Serving Custom Assets
- create public directory and put stylesheets, scripts in it
```
// add below code into app.js
app.use(express.static("public"));
```
- dont need to write .ejs after file name when mentioning other ejs file if use code below:

```
app.set("view engine","ejs");
```
- use partials to keep HTML templates such as ```footer.ejs, header.ejs ``` to be used by pages
```
// need to include templates in pages

<% include partials/header %>

<% include partials/footer %>

// need to add a slash before external stylesheet or script files when including them
<link rel= "stylesheet" type= "text/css" href="/app.css">
```


274. Post Requests Part 1
- write post routes, and test them using Postman
- use a form to send a post request
- use body parser to get form data

- add ```form``` in the friends list page
```
<form action="/addfriend" method="POST">
    <input type="text" placeholder="name">
    <button>New Friend!</button>
</form>
```

275. Post Requests Pt. 2
- then get form data out of form
- add the data to database
- refresh and show in the page

> need to convert request body to javascript object through a package
```
// in terminal
npm install body-parser --save

// then add code below to app.js, need to read some docs to know more about the usage
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
```

### s27-Working With API's
277. Intro to API's
[programmable web] it's an API platform

Generally communicate via HTTP

278. JSON and XML
Make an HTTP request to an API, and get some data back. API does not respond with HTML, API respond with data, not structure
- XML does not describe presentation like HTML does
- JSON: JSON looks like JS objects, but everything is a string

279. Making API request with Nodes
- install request package first

280. Note about Sunset Time API Example

281. Sunset Time API Example
```
// turn string into object
JSON.parse(body);
```
282. JSON Placeholder API Example
- JSON Placeholder API
- npm package 'locus'
```
// in terminal
npm i -D locus

// when insert this code below, it can freeze the code and get access to all the variables
eval(require('locus'));
```

- syntax/ template literals/ arrow functions/ promises

283. Note about Movie API lectures
So everything is exactly the same as Colt explains in the following videos, except you must append ```&apikey=thewdb``` to the end of your url.

284. 

> How to move a folder to another folder???

```
mv dir1 dir2
```

- set a local host:
```
// local IP is 127.0.0.1
// set a port
server.listen(3030, '127.0.0.1');
```

```
// close an open port, type in terminal
kill -9 port_number
```

### s28-YelpCamp Basics
288. YelpCamp: Initial Routes
- add landing page
- add campgrounds page that lists all campgrounds
- each campground has: name/ image

289. YelpCamp: Layout
- create our header and footer partials
- add in bootstrap

290. YelpCamp: Creating Campgrounds
- setup new campground POST route
- add in body-parser
- setup route to show form
- add basic unstyled form

## convention 协定

- several types of convention
```
1. show all data
app.get("/campgrounds", function(req, res){});

2. create a new data
app.post("/campgrounds", function(req, res){});

3. show the form that send the data to the post route
app.post("/campgrounds/new", function(req, res){});
```

291. Note about YelpCamp: Styling Campgrounds Lecture
If you want to migrate from version 3 to 4 after completing the app then checkout:
[https://www.youtube.com/watch?v=NHHh0sj1uKY]

292. YelpCamp: Styling Campgrounds
- add a better header/title
- make campgrounds display in a grid

293. YelpCamp: Styling Nav and Forms
- add a navbar to all templates
- style the new campground form

### s29-Databases
294. What is a Database?
- what's a database: 
    - A collection of information/ data
    - Has an interface
- SQL(relational) VS. NoSQL(non-relational)
    - SQL: a flat database, everything is tabular

295. Note about installing MongoDB


296. Installing MongoDB
- what is MongoDB
- why are we using it
- let's install it
- MEAN stack: mongo/ express/ angular/ node
    - MEN stack: mongo/ express/ node

## ?How to use Mongodb when not on C9? Also mongo demon?
[https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/]

297. Mongo Shell Basics
- mongod
- mongo
- help
- show dbs
- use
- insert
- find
- update
- remove
    - remove certain numbers of data: [https://stackoverflow.com/questions/19065615/how-to-delete-n-numbers-of-documents-in-mongodb/19066328#19066328]



> CRUD: create/ read/ update/ delete

298. Notes about Mongoose


299. Introduction to Mongoose Pt. 1
- what is Mongoose: object data mapper
- why are we using it
- interact with a Mongo database using Mongoose

300. Introduction to Mongoose Pt. 2
- most things to do with Moogoose involve a callback function, that's because this takes time

### s30-YelpCamp: Data Persistence

301. YelpCamp: Adding Mongoose
- install and configure mongoose
- setup campground model
- use campground model inside of our routes

302. How to Avoid Potential Issues with Mongoose
```
// 27017 is the port that our mongo demon or mongod is running on 
mongoose.connect("mongodb://localhost:27017/yelp_camp", {
    useNewUrlParser: true
});
```

303. YelpCamp: Campground Show Page Part 1
- review the RESTful routes we've seen so far
- add description to our campground model
- use ```db.collection.drop()```
    - collections are in the certain DB, this command will delete all data within the collection
- add a new route/ template

> we need to have 2 routes to send a post request: one is to show the form and then that form to submit somewhere which is our second route, create route.

- RESTful routes

name    |   url         |    verb    |    desc.                             | method
--------|---------------|------------|---------------------------------------------------------
INDEX   |    /dogs      |    GET     |    display a list of all dogs        |    Dog.find()    
NEW     |   /dogs/new   |    GET     |    display form to make a new dog    |   N/A
CREATE  |    /dogs      |    POST    |    add new dogs to DB    |   Dog.create()
SHOW | /dogs/:id | GET | shows info about one dog   |   Dog.findById()
EDIT    | /dogs/:id/edit |  show edit form for one dog  | Dog.findById()
UPDATE  | /dogs/:id |  update particular dog, then redirect somewhere | Dog.findByIdAndUpdate()
DESTROY | /dogs/:id |  delete particular dog, then redirect somewhere | Dog.findByIdAndRemove()

304. Yelp Camp: Campground Show Page Part 2


### s31-RESTful Routing
# Database can only run on certain server and network

305. Intro to REST
- define REST and explain why it matters
    - REST stands for representational state transfer
    - REST is a pattern for defining our routes, it's an architecture for mapping our HTTP routes to CRUD functionality(create/ read/ update/ destroy).

- list all 7 RESTful routes
- show example of RESTful routing in practice


306. RESTful Blog App: INDEX
- setup the blog app
- create the blog model
- add INDEX route and template
- add simple nav bar

307. Note about Blog App: Layout


308. Blog App: Layout
- add header and footer partials
- include semantic UI
- add simple nav 


309. Note about RESTful Blog App: New and Create

310. RESTful Blog App: NEW and CREATE

311. Note about RESTful Blog App: SHOW
> / means go back to the root folder, then traverse forward/downward.

> ./ means begin in the folder we are currently in (current working directory) and traverse forward/downward in the tree.

> ../ means go up one directory, then begin the traverse.

312. RESTful Blog App: SHOW
```
1. run the code and render the result, it's not safe
<%- %>

2. run the code but not show the code, and can include file
<% %>

<% include ./partials/app.css %>

3. show the content
<%= %>

--------------
datePara.toDateString()
---------------
stringPara.substring()
```

313. RESTful Blog App: EDIT AND UPDATE
- add edit route
- add edit form
- add update route
- add update form
- add method-override
    - HTML doesnt support method other than GET/ POST request, so we need to use npm to install method-override
```
Blog.findByIdAndUpdate(id, newData, callbackFunction);
```

314. RESTful Blog App: DESTROY

315. Note about RESTful Blog App: Final Touches


316. RESTful Blog App: Final Touches
- sanitize blog body
    - app.use(expressSanitizer) must go after bodyParser
- style index
- update REST table 

### s32-Data Associations
317. Introduction to Associations
- define associations
- discuss one:one, one:many, many:many relationships
- 2 ways to connect different models using mongoose: embedding data/ referencing data

318. Embedded Data

319. Note About Object References

320. Object References

321. Module.exports

### s33-YelpCamp: Comments

322. YelpCamp: Refactoring App.js
- create a models directory
- use module.exports
- require everything correctly

323. Note about Seeding the Database


324. YelpCamp: Seeding the Database
- add seeds.js file
- run the seeds file every time the server starts

325. Note about comment model lecture


326. YelpCamp: Comment Model
- make our errors go away
- display comments on  campground show page
 
327. Note about Comments Lecture


328. YelpCamp: Creating Comments Pt. 1
- comment NEW/ CREATE
    - discuss nested routes
    - add the comment new and create routes
    - add the new comment form

>Why getting error mongod dead but subsys locked and Insufficient free space for journal files on Linux?

> ```mongod --dbpath /data/db --smallfiles```

329. YelpCamp: Creating Comments Pt. 2



330. YelpCamp: Styling Comments Pt 1

331. Note about YelpCamp: Styling Comments Pt 2


332. YelpCamp: Styling Comments Pt 2


### s34-Authentication

333. Note about authentication section

334. Introduction to Authentication
- what tools we are using?
    - passport
    - passport local
    - passport local mongoose
- walk through auth flow
- discuss sessions
    - express-session


335. Secret Page Code Along Pt. 1
- setup folder structure
- install needed packages
- add root route and template
- add secret route and template


336. Secret Page Code Along Pt. 2
- create user model
- configure passport

337. Secret Page Code Along Pt. 3
- add registrater routes
- add registrater form

338. Secret Page Code Along Pt. 4
- add login routes
- add login form

339. Secret Page Code Along Pt. 5
- add logout route
- add isLoggedIn middleware

### s35-YelpCamp: Adding Authentication
340. YelpCamp: Adding Auth Pt. 1
- install all packages needed for auth
- define user model 

341. YelpCamp: Adding Auth Pt. 2
- configure passport
- add register routes
- add register template

342. YelpCamp: Adding Auth Pt. 3
- add login routes
- add login template


343. YelpCamp: Adding Auth Pt. 4
- add logout route
- prevent user from adding a comment if not signed in
- add links to navbar


344. YelpCamp: Adding Auth Pt. 5
- show/hide auth links correctly


### s36-YelpCamp: Cleaning Up
345. YelpCamp: Refactoring Routes

## refactor 重构
## substantial 大量的

346. YelpCamp: User Associations: Comment
- associate users and comments
- save author's name to a comment automatically

347. YelpCamp: User Associations: Campground
- prevent an authenticated user from creating campgrounds
- save username+id to newly created campground

### s37-YelpCamp: Update and Destroy
348. Intro to New YelpCamp Features
- campgrounds can be deleted/ edited by their author
- comments can be deleted/ edited by their author
- UI improvement on show/ login/ logout/ landing page, etc.

349. Campground Edit and Update
- add Method-Override
- add Edit Route for Campgrounds
- add link to edit page
- add update route
- fix $set problem


350. Campground Destroy
- add destroy route
- add delete button

351. Notes about Campground Destroy & Campground Authorization

352. Campground Authorization Part 1
- user can only edit his/her campgrounds
- user can only edit his/her campgrounds
- hide/ show edit and delete buttons

> ```req.user._id``` is a mongoose object
> ```foundCampground.author.id``` is String

353. Campground Authorization Part 2

354. Comment Edit and Update
- add edit route for comments
- add edit button
- add update route

355. Note about Comment Destroy lecture

356. Comment Destroy
- add destroy route
- add delete button

> Cannot DELETE /campgrounds/5cb5c40933b2f55955832aae?_method=DELETE

> 1. wrong type; 2. ```:id``` instead of ```id```

357. Comment Authorization
- user can only edit his/her comments
- user can only delete his/her comments
- hide/show edit and delete buttons
- refactor middleware



### s38-YelpCamp: UI Improvements

358. Refactoring Middleware
- refactor middleware

> ```index.js``` in the middleware will be the default included file even when just use ```var middleware = require("../middleware");```

359. Flash Messages: Installation
- demo working version
- install and configure connect-flash
- add bootstrap alets to header

360. Note about Flash Messages
> The following lectures produce a small bug where you have to click the register button twice to see the flash message:
[https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/5937302#questions/1700812]

361. Flash Messages: Adding Bootstrap

362. Flash Messages: Helpful Errors

363. Note about error handling
[https://www.youtube.com/watch?v=eDWPJAzlBfM&feature=youtu.be]


364. Landing Page Refactor - Part One

365. Landing Page Refactor - Part Two

366. Dynamic Price Feature


367. Note about further YelpCamp improvements
[https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/6754188#content]


### s39-Git and Github
368. Intro To Git
- What's git?
- what's github?
- why should you care?
- novel writing analogy
- installing git(not really)

369. Git Init, Add, and Commit
- git init
- git status
- git add
- git commit
```git commit -m "Put the commit message here using present tense."```

```rm -rf folder_name```

> every time we commit, we need to first tell git which files to add to that commit!
```
git add file_name
git commit -m "This is a commit"
```

> one project per repo

370. Git Log and Checkout
- git log
```:q``` to quit git log

- git checkout: used to check branches, previous commit
```git checkout commit_id```

```git -revert --no-commit 42334rr423425..HEAD```

## prompt 提示

371. GITHUB
- first pra by writing a novel using github


### s40-Deploying
372. Intro to Deploying and Heroku
- server: amazon/ azure/ heroku

1. cloud9 is not designed for actually deploying applications
2. not good idea to have the copy of application that you are working on that is the same copy of the application that is being served

- deploying: running your application 24/7 on a server

373. Deploying a Simple App Part 1


374. Note about Heroku CLI


375. Deploying a Simple App Part 2
> heroku comes with cloud9 for free

```
0. need to add "start": "node app.js"
1. git add sth
2. git commit -m "message in it"
3. git push to heroku master
```

376. Deploying YelpCamp: Basics

377. Note about MongoLab


378. Deploying YelpCamp: MongoLab
```
// use below to run mongod
./mongod

```
> not able to get into campground pages?
update every dependencies to lasted version!

379. Environment Variables

> local development environment: node.js/ mongodb/ IDE/ terminal
> localhost not able to get into campgrounds page?
- try update all dependencies and mongodb,etc.


### s41-JavaScript: The Tricky Stuff
379. Keyword This 1 - Introduction and Global
- four rules:
1. global
- when the keyword `this` is outside of an object, its value is the global object which in the case of the browser is the window object.
```
console.log(this); //window
```

2. object/implicit(suggested or understood without being stated directly)
3. explicit(expressed in a way that is very clear and direct)
4. new 

-------------------

Note about further YelpCamp improvements
Last updated 06/27/19

Hi Everyone!
I've been working on some additional features for the YelpCamp project. You can view the source code here. So far I've included the following features: 

CSS3 background animation on landing page 

Fuzzy Search 

Campground location with Google Maps

Campground cost 

Footer 

Home link in navigation 

Authentication flash messages 

Display time since post was created with Moment JS 

User profile 

Password reset 

Image upload with multer and cloudinary 

Migration/upgrade instructions for Bootstrap 4

Refactor callbacks with Async/Await

In-app notifications

*See below for all tutorial links as well as additional tutorials provided by Zarko

Ratings and reviews

Comments on the campground show page

Pagination in campgrounds index

- UI Improvements (login and signup, nav-bar, registration flash message) - http://slides.com/nax3t/yelpcamp-refactor-ui

- Pricing feature - http://slides.com/nax3t/yelpcamp-refactor-pricing

UPDATED!!! - Google Maps location - https://www.youtube.com/watch?v=B4OuCjQLJ9k

- Time since created w/ Moment JS - http://slides.com/nax3t/yelpcamp-refactor-moment

- Admin role (user roles) - https://www.youtube.com/watch?v=somc45pnM2k

- User profile - https://youtu.be/6ar77jZ_ajc

- Password reset - https://youtu.be/UV9FvlTySGg

- Fuzzy Search - https://youtu.be/9_lKMTXVk64

- Image upload - https://youtu.be/RHd4rP9U9SA

- Migrating to Bootstrap 4 - https://www.youtube.com/watch?v=NHHh0sj1uKY

- Refactor callbacks in seeds.js to use Async/Await - https://youtu.be/D_q-sQCdZXw

- In-app Notifications - https://www.youtube.com/watch?v=Tt9orKnUiEU



Tutorials by Zarko:

--------------------------

NEW! - YelpCamp Slugs (semantic campground URLs) - https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/6754188#questions/6472948

NEW! - YelpCamp Like Button - https://www.udemy.com/the-web-developer-bootcamp/learn/lecture/5102520#questions/6751932

- Ratings and Reviews - https://github.com/zarkomaslaric/yelpcamp-review-system/blob/master/readme.md

- Comments on the show page - https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/3190558

- Pagination on campgrounds index - https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/3190496

Additional Student Resources: 
-------------------------------------------

- Useful links from the course - https://www.udemy.com/the-web-developer-bootcamp/learn/v4/questions/3839394

- More useful links - https://docs.google.com/spreadsheets/d/1UHbhgZrpY7UwPbJqMlQjCLrxmReLhWH_bZeQIosYa4w/edit#gid=0

- Complete course notes - https://drive.google.com/drive/folders/12jCkOQCAtXoxxpwfevuWDlYgWj6ryh3N

Have a YelpCamp tutorial that you'd like featured? Please contact me in a direct message with a link to the tutorial.

-------
Thanks,
Ian

