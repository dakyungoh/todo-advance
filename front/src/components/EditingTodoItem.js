import { updateNameTodoItem } from "../api";

export default function EditingTodoItem({
  setEditingName,
  setEditingIndex,
  fetchTodoList,
  editingName,
  todoItem,
}) {
  function onClickCancelButton() {
    setEditingIndex(-1);
    setEditingName("");
  }

  async function onClickSaveButton(id, name) {
    await updateNameTodoItem(id, name);
    setEditingIndex(-1);
    setEditingName("");
    fetchTodoList();
  }

  return (
    <>
      <input
        value={editingName}
        onChange={(e) => {
          setEditingName(e.target.value);
        }}
      />
      <button
        className="delete-button"
        onClick={() => {
          onClickCancelButton();
        }}
      >
        취소
      </button>
      <button
        className="edit-button"
        onClick={() => {
          onClickSaveButton(todoItem.id, editingName);
        }}
      >
        SAVE
      </button>
    </>
  );
}
