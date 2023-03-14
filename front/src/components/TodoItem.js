import { deleteTodoItem } from "../api";

function TodoItem({
  todoList,
  todoItem,
  index,
  setEditingIndex,
  setEditingName,
  fetchTodoList,
}) {
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
