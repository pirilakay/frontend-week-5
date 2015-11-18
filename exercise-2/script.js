// Required part:

// Step 1:
// Add items to the list with unique ID's.
// Function to hold the nested function and initialize the counters.
// Nested Function to add the items and change ID's of items.
// Each item has a unique ID, you can use a counter to implement that.
// Initialize the counter in the parent function.
// In the nested function, incremenet the counter by 1.
// Step 2:
// Changed checked boxex to crossed out.
// To do that, Use the event "Change" for the check box
// When changed, test if it is checked or not checked using "checked" attributed.
// If Checked, change the class of the checkbox to "done" so It matches the class that cross items out in the css.
// This event listener should reside in the nested function.
// Check https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// Step 3:
// This should be done when you test fo checked/unchecked.
function addTodoItem(event) {
  event.preventDefault(); // necessary to prevent the submitting of a form
  var todolist    = document.getElementById("todolist");
  var item        = document.getElementById("item");
  var li          = document.createElement("li");
  var label       = document.createElement("label");
  var checkbox    = document.createElement("input");
  checkbox.type   = "checkbox";
  label.appendChild(checkbox)
  label.appendChild(document.createTextNode(item.value));
  li.appendChild(label)
  todolist.appendChild(li);
  item.value = "";
}

form = document.getElementById("the-form");
form.addEventListener("submit", addTodoItem);

// BONUS 1

// Add three buttons to the HTML File (Static, no necessary to add them dynamically in the js file).
// For Each button, add event listener.
// To implement that, you need to define three functions.
// To check if you should hide or show the element, test the class name.
// You changed the class name for all checked element above already.

// BONUS 2
    
// Add "delete" button next to each element in the list.
// Implement that in the nested function of the first part.
// add elevent listener for each button.
// append the button to li
// in the event listener, define anonymous function to delete the item.
// in the function, delete the closest <li> element to the button.
// Check http://stackoverflow.com/questions/3387427/remove-element-by-id for more.

