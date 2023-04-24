let todoItems = [];

function createNewTodoItem(text) {
    return {
        item: text,
        completed: false
    };
}

function addTodoToList(todoItem) {
    todoItems.push(todoItem);
}

function createListItemWithTodoData(todoItem) {
    const newLi = document.createElement("li");
    newLi.innerText = todoItem.item;
    return newLi;
}

function applyToggleEventToListItemClick(newLi, todoItem) {
    newLi.addEventListener("click", function () {
        if (!todoItem.completed) {
            newLi.style.textDecoration = "line-through";
            todoItem.completed = true;
        } else {
            newLi.style.textDecoration = "none";
            todoItem.completed = false;
        }
    });
}


function clearInputValue(todoInput) {
    todoInput.value = "";
}

function addItemToListAndDisplayOnScreen() {
    const todoInput = document.getElementById("todoInput");
    const todoList = document.getElementById("todoList");

    if (todoInput.value !== "") {
        
        const todoItem = createNewTodoItem(todoInput.value);

        addTodoToList(todoItem);

        const newLi = createListItemWithTodoData(todoItem);

        applyToggleEventToListItemClick(newLi, todoItem);

        todoList.appendChild(newLi);

        clearInputValue(todoInput);
    }
}

function removeCompletedItemsFromList() {
    // Create a new array with all uncompleted todo items
    const newTodoItems = todoItems.filter(function(todo) {
        return !todo.completed;
    });

    // Clear the todoItems array and add back only the uncompleted items
    todoItems = newTodoItems;

    // Remove all items from the todoList element
    const todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    // Add each uncompleted item back to the todoList element
    todoItems.forEach(function(todo) {
        const newLi = createListItemWithTodoData(todo);

        applyToggleEventToListItemClick(newLi, todo);

        todoList.appendChild(newLi);
    });
}