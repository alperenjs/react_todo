import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./Todo";
import firebase from "firebase";
import db from "./firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //when app loads, listen db and fetch todos as added/removed
  useEffect(() => {
    //this code fire when app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // when todos change this fires
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            time: doc.data().time,
            todo: doc.data().todo,
          }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();
    let [hour, minute, second] = new Date()
      .toLocaleTimeString("en-US")
      .split(/:| /);
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      time: hour + ":" + minute + ":" + second,
    });

    setInput(""); //clear after add todo
  };

  return (
    <div className="App container">
      <h1 style={{ color: "white", backgroundColor: "red" }}>Todo React 🚀</h1>
      <form action="">
        <div className="form-group">
          <input
            className="form-control"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <button
            disabled={!input}
            className="btn btn-primary"
            type="submit"
            onClick={addTodo}
          >
            Add Todo
          </button>
        </div>
      </form>
      <ul className="list-group">
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
