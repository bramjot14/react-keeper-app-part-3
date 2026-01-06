import React, { useState } from "react";

function CreateArea(props) {
  const [inputText, setInputText] = useState("");
  const [inputText2, setInputText2] = useState("");

  function handleChange(event) {
    setInputText(event.target.value);
  }
  function handleChange2(event) {
    setInputText2(event.target.value);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          placeholder="Title"
          value={inputText}
        />
        <textarea
          name="content"
          onChange={handleChange2}
          placeholder="Take a note..."
          rows="3"
          value={inputText2}
        />
        <button
          type="button" //stops refresh of page
          onClick={() => {
            props.onAdd(inputText, inputText2);
            setInputText("");
            setInputText2("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
