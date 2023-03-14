import { useEffect, useState } from "react";

import {
  deleteTodoItem,
  getTodoList,
  postTodoItem,
  updateIsDoneTodoItem,
} from "./api";

function App() {
  const [newTodoItemName, setNewTodoItemName] = useState("");
  const [todoList, setTodoList] = useState([]);

  // useEffect(함수, [변수목록배열])
  // useEffect는 변수목록배열로 받은 변수 중 한가지라도 값이 바뀌면 함수 영역을 실행시켜준다.
  // 변수 목록 배열로 빈 배열을 넘기면, 컴포넌트 최초 실행시에만 함수가 실행된다.
  useEffect(() => {
    fetchTodoList();
  }, []);

  async function fetchTodoList() {
    const nextTodoList = await getTodoList();
    setTodoList(nextTodoList);
  }

  async function onClickAddButton() {
    if (newTodoItemName.length === 0) {
      return;
    }
    await postTodoItem(newTodoItemName);
    setNewTodoItemName("");
    fetchTodoList();
  }

  async function onClickDeleteButton(id) {
    await deleteTodoItem(id);
    fetchTodoList();
  }

  async function onClickCheckbox(id, isDone) {
    await updateIsDoneTodoItem(id, !isDone);
    fetchTodoList();
  }

  return (
    <div className="App">
      <div className="App-title">TODO LIST</div>
      <div className="">
        <input
          type="text"
          className="input-box"
          placeholder="내용을 입력하세요."
          value={newTodoItemName}
          onChange={(event) => {
            setNewTodoItemName(event.target.value);
          }}
        />
        <button className="add-button" onClick={onClickAddButton}>
          ADD
        </button>
      </div>
      <div className="App-todo-list">
        {todoList.map((todoItem) => {
          return (
            <div className="todo-item" key={todoItem.id}>
              <input
                className="todo-item-checkbox"
                type="checkbox"
                checked={todoItem.isDone}
                onChange={() => {
                  onClickCheckbox(todoItem.id, todoItem.isDone);
                }}
              />
              <span
                className={
                  todoItem.isDone
                    ? "todo-item-name-line-through"
                    : "todo-item-name"
                }
              >
                {todoItem.name}
              </span>
              <button
                className="delete-button"
                onClick={() => {
                  onClickDeleteButton(todoItem.id);
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
