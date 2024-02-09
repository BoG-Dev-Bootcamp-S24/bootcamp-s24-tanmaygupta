//solution

document.getElementById('add-button').addEventListener('click', function() {
    let toDoList = document.getElementById('todo-list');
    let toDoInput = document.getElementById('todo-input');
    let newTodo = toDoInput.value;

    if (newTodo.trim() !== "") {
        let listItem = document.createElement('li');
        listItem.textContent = newTodo;
        toDoList.appendChild(listItem);
        toDoInput.value = "";
    } else {
        alert("Please enter a task before trying to add it");
    }
})