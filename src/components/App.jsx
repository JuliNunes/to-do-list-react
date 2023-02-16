import React, { useState } from "react";
import Header from "./Header";
import ToDoItem from "./Item";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((items, i) => {
        return i !== id;
      });
    });
  }

  return (
    <div className="container">
      <Header />
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((itemToList, i) => (
            <ToDoItem key={i} id={i} onCheck={deleteItem} text={itemToList} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
