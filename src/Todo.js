import React from "react";

function Todo(props) {
  return (
    <div>
      <li className="list-group-item text-left">
        <div>{props.text}</div>
        <div>🧭time</div>
      </li>
    </div>
  );
}

export default Todo;
