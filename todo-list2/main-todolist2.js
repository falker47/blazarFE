// Initialize an empty array to store todo items
var todoItems = [];

// Add item to the list and display it on the screen
function addItem() {
    var todoInput = document.getElementById("todoInput");
    var todoList = document.getElementById("todoList");

    if (todoInput.value !== "") {
        // Create a new object with the todo item and its completed status
        var todoItem = {
            item: todoInput.value,
            completed: false
        };

        // Add the new object to the todoItems array
        todoItems.push(todoItem);

        // Create a new list item element and add the todo item to it
        var newLi = document.createElement("li");
        newLi.innerText = todoItem.item;

        // Add a click event listener to the list item to toggle its completed status
        newLi.addEventListener("click", function() {
            if (!todoItem.completed) {
                newLi.style.textDecoration = "line-through";
                todoItem.completed = true;
            } else {
                newLi.style.textDecoration = "none";
                todoItem.completed = false;
            }
        });

        // Append the new list item element to the todoList element
        todoList.appendChild(newLi);

        // Clear the input field value
        todoInput.value = "";
    }
}

// Remove completed items from the list
function removeCompleted() {
    // Create a new array with all uncompleted todo items
    var newTodoItems = todoItems.filter(function(todo) {
        return !todo.completed;
    });

    // Clear the todoItems array and add back only the uncompleted items
    todoItems = newTodoItems;

    // Remove all items from the todoList element
    var todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    // Add each uncompleted item back to the todoList element
    todoItems.forEach(function(todo) {
        var newLi = document.createElement("li");
        newLi.innerText = todo.item;

        newLi.addEventListener("click", function() {
            if (!todo.completed) {
                newLi.style.textDecoration = "line-through";
                todo.completed = true;
            } else {
                newLi.style.textDecoration = "none";
                todo.completed = false;
            }
        });

        todoList.appendChild(newLi);
    });
}