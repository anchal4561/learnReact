import React from "react";
import { useState } from "react";

export default function AddTodo({ handleAdd }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Add something"
        />
        <button onClick={()=>handleAdd(text)}>ADD</button>
      </div>
    </div>
  );
}