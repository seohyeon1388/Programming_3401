import Checkbox from "./Checkbox.jsx";
import Button from "./Button.jsx";
import { useState } from "react";

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, seteditText] = useState(todo.text);
  function handleEditClick() {
    if (!isEditing) {
      setIsEditing(true);
      seteditText(todo.text);
    } else {
      const trimmedText = editText.trim();
      if (trimmedText !== "" && trimmedText !== todo.text) {
        editTodo(todo.id, trimmedText);
      }
      setIsEditing(false);
    }
  }
  return (
    <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
      {!isEditing && (
        <Checkbox id={todo.id} onChange={() => toggleTodo(todo.id)}>
          {todo.text}
        </Checkbox>
      )}
      {isEditing && (
        <input
          type="text"
          className="todo__item--edit"
          value={editText}
          onChange={(event) => seteditText(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") handleEditClick();
          }}
          autoFocus
        />
      )}
      <Button className="todo__button todo__button--edit" onClick={handleEditClick}>
        {isEditing ? "💾" : "✏️"}
      </Button>
      <Button className="todo__button todo__button--delete" onClick={() => deleteTodo(todo.id)}>
        ❌
      </Button>
    </li>
  );
}
