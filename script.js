//get HTML elements with different types of functions i.e. getElementById, -Class, loop-selection, querySelector(?)

const checkbox = document.getElementsByName('divStyle'); //Nodelist
console.log(checkbox);

const textFields = document.querySelectorAll('.textfield'); //Nodelist
console.log(textFields)

const button = document.getElementsByTagName('button'); //HTML Collection
console.log(button);

const emptyDiv = document.getElementById('empty-div');
console.log(emptyDiv);