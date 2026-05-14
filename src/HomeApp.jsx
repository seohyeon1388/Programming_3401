import { useState } from "react";
import CounterApp from "./CounterApp.jsx";
import TodoListApp from "./TodoListApp.jsx";
function ButtonPageApp({ setPage }) {
  return (
    <>
      <h1>App 목록</h1>
      <ul>
        <li>
          <button onClick={() => setPage("counterapp")} style={{ fontSize: "2rem", width: "100px", height: "100px" }}>
            🔢
          </button>
        </li>
        <li>
          <button onClick={() => setPage("todolistapp")} style={{ fontSize: "2rem", width: "100px", height: "100px" }}>
            ✅
          </button>
        </li>
      </ul>
    </>
  );
}
export default function HomeApp() {
  const [page, setPage] = useState("home");
  return (
    <>
      {page === "home" && <ButtonPageApp setPage={setPage} />}
      {page !== "home" && (
        <button
          onClick={() => setPage("home")}
          style={{
            position: "fixed",
            left: "10px",
            bottom: "10px",
            cursor: "pointer",
            borderRadius: "8px",
            padding: "8px 12px",
            backgroundColor: "#eee",
            border: "none",
          }}
        >
          🏠
        </button>
      )}
      {page === "counterapp" && <CounterApp />}
      {page === "todolistapp" && <TodoListApp />}
    </>
  );
}
