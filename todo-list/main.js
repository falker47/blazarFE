import './style.css'
import { setupCounter } from './counter.js'

const title = document.createElement("h1");
title.textContent = "To Do List";

const input = document.createElement("input");

const add_button = document.createElement("button");
add_button.textContent = "+";

const todo_list = document.createElement("ul");
//const todo_list[];

document.body.appendChild(title);
document.body.appendChild(input);
document.body.appendChild(add_button);
document.body.appendChild(todo_list);

add_button.addEventListener("click", append_item);

function append_item(){
  const task = document.createElement("li");
  task.textContent = input.value;
  todo_list.appendChild(task);
  task.addEventListener("click", () => {task.setAttribute('style', 'text-decoration: line-through')});
  task.addEventListener("dblclick", () => {task.remove()});
}



