import axios from "axios";

async function getTodoList() {
  const response = await axios.get("http://localhost:8000/todo-list");
  return response.data.todoList;
}

export { getTodoList };
