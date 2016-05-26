/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';
*/

// Declare a variable and give a value:
var myVariable = 'Bob';

// Call it
myVariable;

// Change it later
myVariable = 'Mo';

// Conditional, if you like chocolate, great, if not then bugger off
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
 alert('Yay, I love chocolate ice cream!');
} else {
 alert('Awww, but chocolate is my favourite...');
}

// Function does something like a calculation
// Function packages functionality that you want to reuse
// () after a variable means its a function
var myVariable = document.querySelector('h1');

function multiply(num1, num2) {
 var result = num1 * num2;
 return result;
}

alert('Hello');

// Event - adds interactivity like clicking on a button such as the click event

var myImage = document.querySelector('img');

myImage.onclick = function() {
 var mySrc = myImage.getAttribute('src');
 if(mySrc === 'images/1.jpg') {
 myImage.setAttribute ('src','images/2.jpg');
 } else {
 myImage.setAttribute ('src','images/1.jpg');
 }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
 var myName = prompt('Please enter your name.');
 localStorage.setItem('name', myName);
 myHeading.textContent = 'Mozilla is cool, ' + myName;
}
}
