import "./todolist.css";
//import TodoItemEmpty from "./components/TodoItemEmpty.jsx";
//import Button from "./components/Button.jsx";
//import Checkbox from "./components/Checkbox.jsx";
import TodoHeader from "./components/TodoHeader.jsx";
import TodoAdder from "./components/TodoAdder.jsx";
//import TodoItem from "./components/TodoItem.jsx";
import TodoList from "./components/TodoList.jsx";
import { useEffect, useState } from "react";

class Todo {
  constructor(text) {
    this.id = Date.now(); //id 고유의값
    this.text = text; //할일 내용
    this.isCompleted = false; //완료여부 : 미완
  }
}
const TODOS_STORAGE_KEY = "todos";
function TodoListApp() {
  function initTodos() {
    const savedTodos = localStorage.getItem(TODOS_STORAGE_KEY);
    return savedTodos ? JSON.parse(savedTodos) : [];
  }
  const [todos, setTodos] = useState(initTodos); //할일 목록 저장 state
  useEffect(() => {
    localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);
  function addTodo(text) {
    setTodos((todos) => [...todos, new Todo(text)]);
  }
  function toggleTodo(id) {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo)));
  }
  function deleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  }
  function editTodo(id, newText) {
    setTodos((todos) => todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)));
  }
  return (
    <div className="todo">
      <TodoHeader />
      <TodoAdder addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
}
export default TodoListApp;
