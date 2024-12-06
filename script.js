//get HTML elements with different types of functions i.e. getElementById, -Class, loop-selection, querySelector(?)

// [0] gets the first checkbox element
const checkbox = document.getElementsByName('divStyle')[0]; //NodeList
console.log(checkbox);

const textFields = document.querySelectorAll('.textfield'); //Nodelist
console.log(textFields)

// [0] gets the first button element
const button = document.getElementsByTagName('button')[0]; //HTML Collection
console.log(button);

const emptyDiv = document.getElementById('empty-div'); //HTML Collection
console.log(emptyDiv);

// A fuction that works when user leaves outside the textFields
// e is a parameter that automatically recieves a value using the DOM API
function handleBlur(e) {
    // Writes to the console which of the textFields, the target, generated the event
    console.log('handleBlur, eventobject: ', e);
    // Gets the name attribute and writes it to the fieldName variable
    const fieldName = e.target.name;
    // Gets the value attribute and writes it ti the fieldValue variable
    const fieldValue = e.target.value;
    // Interpolates the written text and writes it to the divText variable
    const divText = `<p>The field ${fieldName} has the value ${fieldValue}</p>`;
    
    // If the user writes in the textField 'content' the string in divText variable is written
    if (fieldName === 'content') {
        emptyDiv.innerHTML = divText;
    }
}

// An anonymous function connected as an eventListener
// The function is executed when changes to the checkbox occure, using the event 'change'
// No parameter is written because no value is recieved
checkbox.addEventListener('change', () => {
    // Gets the 'color' textField and writes it to the colorField variable 
    const colorField = document.getElementById('color');

    // Changes the background color of the div-element with the value written in the colorField variable
    emptyDiv.style.backgroundColor = colorField.value;
});

// Loops through every textField in the textFields' NodeList
// Every textField gets an eventlistener that uses the previously created function when the user leaves ouside the textField
textFields.forEach((field) => field.addEventListener('blur', handleBlur));

// An anonymous function connected as an eventListener
// The function is executed when the button is clicked, using the event 'click'
// e is a parameter that automatically recieves a value using the DOM API
button.addEventListener('click', (e) => {
    // Prevents the page from reloading to allow the code to run
    e.preventDefault();
    // Removes the div-element
    emptyDiv.remove();
});