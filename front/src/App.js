import { useState, useEffect } from "react";

import { getTodoList } from "./api";

function App() {
  const [todoList, setTodoList] = useState([]);

  // useEffect(함수, [변수목록배열])
  // useEffect는 변수목록배열로 받은 변수 중 한가지라도 값이 바뀌면 함수 영역을 실행시켜준다.
  // 변수 목록 배열로 빈 배열을 넘기면, 컴포넌트 최초 실행시에만 함수가 실행된다.
  useEffect(() => {
    fetchTodoList();
  }, []);

  async function fetchTodoList() {
    const todos = await getTodoList();
    console.log(todos);
    setTodoList(todos);
  }

  return (
    <div className="App">
      <div className="App-title">TODO LIST</div>
      <div className="App-todo-list">
        {todoList.map((todoItem) => {
          return (
            <div className="todo-item" key={todoItem.title}>
              <input
                className="todo-item-checkbox"
                type="checkbox"
                checked={todoItem.isDone}
                onChange={() => {
                  console.log("click checkbox");
                }}
              />
              <span
                className={
                  todoItem.isDone
                    ? "todo-item-text-line-through"
                    : "todo-item-text"
                }
              >
                {todoItem.title}
              </span>
              <button
                className="delete-button"
                onClick={() => {
                  console.log("click checkbox");
                }}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
