import { useNavigate } from "react-router-dom";
import { deleteTodoItem } from "../api";

function TodoItem({
  todoList,
  todoItem,
  index,
  setEditingIndex,
  setEditingName,
  fetchTodoList,
}) {
  const navigate = useNavigate();

  function onClickEditButton(index) {
    setEditingIndex(index);
    setEditingName(todoList[index].name);
  }

  async function onClickDeleteButton(id) {
    await deleteTodoItem(id);
    fetchTodoList();
  }

  return (
    <>
      <span
        className={
          todoItem.isDone ? "todo-item-name-line-through" : "todo-item-name"
        }
        onClick={() => {
          navigate(`/todo/${todoItem.id}`);
        }}
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
      <button
        className="edit-button"
        onClick={() => {
          onClickEditButton(index);
        }}
      >
        EDIT
      </button>
    </>
  );
}

export default TodoItem;
