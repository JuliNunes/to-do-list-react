import React, { useState } from "react";
import "../../public/styles.css";

export default function ToDoItem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="item">
      <li
        onClick={handleClick}
        style={{ textDecoration: isDone ? "line-through" : "none" }}
      >
        {props.text}
      </li>
      <p
        onClick={() => {
          props.onCheck(props.id);
        }}
      >
        x
      </p>
    </div>
  );
}
