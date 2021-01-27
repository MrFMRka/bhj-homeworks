const input = document.getElementById("task__input");
const button = document.getElementById("tasks__add");
const tasks__list = document.getElementById("tasks__list");
input.onkeydown = function(e) {
    input.value.trim();
    let enter = String(e.key);
    if (enter === "Enter" && (input.value !== "")) {
        toDo();
    }
}

button.onclick = function(e) {
    e.preventDefault();
    input.value.trim();
    if (input.value !== "") {
        toDo();
    }
}

function toDo() {
    const todo = document.createElement("div");
        todo.className = "task";
        todo.innerHTML = `<div class="task__title">${input.value}</div><a href="#" class="task__remove">&times;</a>`;
        tasks__list.insertAdjacentElement("beforeend", todo);
        document.forms[0].reset();
        const elementRemove = todo.lastChild;
        elementRemove.onclick = function() {
            todo.remove();
        }
}