import React from "react";
import db from "./firebase";

function Todo(props) {
  return (
    <div>
      <li className="list-group-item text-left">
        <div>
          {props.todo.todo}
          <button
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
            className="btn-danger"
          >
            Delete
          </button>
        </div>
        <div>🧭 {props.todo.time}</div>
        {console.log(props.todo)}
      </li>
    </div>
  );
}

export default Todo;
