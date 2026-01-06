import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);
  // Mapping always occur in arrays not objects

  function addItem(title, content) {
    setItems((prevItems) => {
      return [...prevItems, { title: title, content: content }];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((toDoitem, index) => (
        <Note
          key={index}
          id={index}
          text={toDoitem}
          onDelete={deleteItem}
          title={toDoitem.title}
          content={toDoitem.content}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
