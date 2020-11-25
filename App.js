import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index, completeTodo }) {
  return (
    <div 
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
      <div>
        <input type="checkbox" onClick={() => completeTodo(index)} checked={todo.isCompleted} />
      </div>
      {todo.text}
    </div>
  );
};


function TodoForm(props) {
  const [toDoText, setValue] = useState("");

  const addTodo = text => {
    const newTodos = [...props.todos, { text }];
    setTodos(newTodos);
  }


  return (
    <div className="buttonAdd">
        <input
          type="text"
          className="input"
          value={toDoText}
          onChange={e => setValue(e.target.value)}
        />
      <div>
        <button onClick={() => addTodo(toDoText)}>Toevoegen</button>
      </div>
    </div>
  );
}

function App() {
  const [todos, setTodos] = useState([]);

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  // const toggleAlphabet = () => {
  //   const listAlphabet = { ...props.Todo };
  //   Todo.sort((a, b) => )
  // }

  return (
   <div className="app">
     <div className="todo-list">
       {todos.map((todo, index) => (
         <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
          />
       ))}
       <TodoForm  todo={todo} />
     </div>
   </div>
  );
}

export default App;
