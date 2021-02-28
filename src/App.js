import React, { useState } from 'react';
import './App.css';

function App() {

  const [todos, setTodos] = useState(['Take dogaas for a walk' ,'Çöpleri at']);

  return (
    <div className="App">
    <h1>Hello Todo List</h1>
    <input type="text"/>
    <button>Add Todo</button>

    <ul>
      {todos.map(todo => (
        <li>{todo}</li>
      ))}
    </ul>

    </div>
  );
}

export default App;
