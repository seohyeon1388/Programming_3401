import "./todolist.css";
//import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
//import Button from "./components/Button.jsx";
//import Checkbox from "./components/Checkbox.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
//import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";
import { useState } from "react";

class Todo {
  constructor(text) {
    this.id = Date.now(); //id 고유의값
    this.text = text; //할일 내용
    this.isCompleted = false; //완료여부 : 미완
  }
}

function TodoListApp() {
  const [todos, setTodos] = useState([]); //할일 목록 저장 state
  function addTodo(text) {
    setTodos((todos) => [...todos, new Todo(text)]);
  }
  function toggleTodo(id) {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  }
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}
export default TodoListApp;
