function TodoListApp() {
  return (
    <div>
      <h1>Todo List</h1>
      <form action="">
        <input type="text" />
        <button type="submit">add</button>
      </form>
      <ul>
        <li>
          <input type="checkbox" id="chk-1" />
          <label htmlFor="chk-1">지각하기</label>
          <button>수정</button>
          <button>삭제</button>
        </li>
        <li>
          <input type="checkbox" id="chk-2" />
          <label htmlFor="chk-2">집가기</label>
          <button>수정</button>
          <button>삭제</button>
        </li>
      </ul>
    </div>
  );
}

export default TodoListApp;
