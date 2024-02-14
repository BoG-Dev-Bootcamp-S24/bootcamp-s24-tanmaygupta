import React, { useState /* Hint 1: Import useState from React */ } from 'react';
import './TodoList.css';

function TodoList() {
  // Hint 2: Initialize two state variables using useState. 
  // One for the list of todos and another for the current task input.

  const [todoList, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Hint 3: Define the addTodo function which will be called on button click.
  // - Check if 'task' is not empty. If not, proceed to add the task.
  // - Use setTodos to add the new task to the todos array.
  // - The new task should be an object of the form: { task: string, completed: boolean }
  // - Reset the task input field after adding the task.
  function addTodo() {
    if (input.trim() !== '') {
      setTodos([...todoList, {task: input, completed: false}]); //cannot use push since it doesn't return anything
      setInput('');
    }
  }

  // Hint 4: Define the toggleComplete function to toggle the completion status of a todo item.
  // - Use setTodos with the map function to create a new array.
  // - In the map function, check if the current todo item's task matches the one received in the function's argument.
  // - If it matches, toggle its 'completed' property.
  // - Otherwise, return the todo item as is.
  function toggleComplete(task) {
    // setTodos(todoList.map((todo) => {
    //   if (todo.task === task) {
    //     todo.completed = !todo.completed;
    //   } 
    //   return todo;
    // }))
    setTodos(todoList.map(todo => todo.task === task ? { ...todo, completed: !todo.completed } : todo));
  }

  // Hint 5: Define the removeTodo function to remove a todo item.
  // - Use setTodos with the filter function to create a new array.
  // - In the filter function, return only those todo items whose task doesn't match the one received in the function's argument.
  function removeTodo(task) {
    setTodos(todoList.filter((todo) => todo.task !== task))
  }
  
  return (
    <div className="todo-list">
      <input
        type="text"
        // value={/* Hint 6: Bind this input to the task state variable */}
        // onChange={/* Hint 7: Update the task state variable as the input changes */}
        value = {input}
        onChange = {(e) => setInput(e.target.value)}
        placeholder="Add new task"
      />
      {/* <button type="submit" onClick=Hint 8: Attach the addTodo function here>Add</button> */}
      <button type="submit" onClick={addTodo}>Add</button> 
      
      {/* Hint 9: Use the map function to iterate over the todos array and render each todo item.
          - Each todo item should be a div with a conditional class name based on its 'completed' status.
          - Include a span to display the task and a button to remove the todo item.
          - Attach toggleComplete and removeTodo functions to the appropriate events in each todo item. 


          <div className={`todo-item condtional complete class`}>
          <span onClick={() => function to complete or uncomplete}>{todo.task}</span>
          <button onClick={() => function to remove}>Remove</button>
          </div>
      */}

      {
        todoList.map(todo => {
        return (
          <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <span onClick={() => toggleComplete(todo.task)}>{todo.task}</span>
          <button onClick={() => removeTodo(todo.task)}>Remove</button>
          </div>
        )
      })
      }
    </div>

  );
}

export default TodoList;

