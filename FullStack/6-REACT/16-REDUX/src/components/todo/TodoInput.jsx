import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ekle } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const [inputVeri, setInputVeri] = useState("");
  const heyGarson = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    //ekle
    heyGarson(ekle(inputVeri));
  };
  return (
    //ekle fonksiyonu
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setInputVeri(e.target.value)}
      />
      <button type="submit" className="add-button">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
