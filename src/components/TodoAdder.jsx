import Button from "./Button";
import { useState } from "react";

export default function TodoAdder({ addTodo }) {
  const [inputTodo, setInputTodo] = useState("");
  function handleSubmit(event) {
    event.preventDefault(); //submit 기본 동작 막자
    if (!inputTodo.trim()) {
      return;
    }
    addTodo(inputTodo.trim());
    setInputTodo("");
  }
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo__input"
        placeholder="할 일을 입력하세요."
        value={inputTodo}
        onChange={(event) => setInputTodo(event.target.value)}
      />
      <Button type="submit" className="todo__button todo__button--add">
        Add
      </Button>
    </form>
  );
}
