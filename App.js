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


function TodoForm({ todos, setTodos }) {
  const [toDoText, setToDoText] = useState("");

  const addTodo = text => {
    const newTodo = {
      text,
      isCompleted: false
    }
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setToDoText("");
  }



  return ( 
    <div className="buttonAdd">
        <input
          type="text"
          className="input"
          value={toDoText}
          onChange={e => setToDoText(e.target.value)}
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

  const toggleAlphabet = () => {
    let listAlphabet = [...todos];
      listAlphabet.sort((a, b) => {
        if(a < b) {
          return -1;
        }
        if(a > b) {
          return 1;
        }
        return 0; 
      })
      setTodos(listAlphabet)    
  }

 
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
       <TodoForm  todos={todos}
                  setTodos={setTodos} />
     </div>
     <div>
        <button onClick={toggleAlphabet}>Sort</button>
      </div>
   </div>
  );
}

export default App;