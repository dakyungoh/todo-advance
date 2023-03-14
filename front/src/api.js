import axios from "axios";

const API_URL = "http://localhost:8000/api";

async function getTodoList() {
  const response = await axios.get(`${API_URL}/todo`);
  return response.data;
}

async function postTodoItem(newTodoItemName) {
  const response = await axios.post(`${API_URL}/todo`, {
    name: newTodoItemName,
  });
  return response;
}

async function deleteTodoItem(id) {
  const response = await axios.delete(`${API_URL}/todo/${id}`);
  return response;
}

async function updateIsDoneTodoItem(id, nextIsDone) {
  const response = await axios.put(`${API_URL}/todo/${id}/is-done`, {
    isDone: nextIsDone,
  });
  return response;
}

export { getTodoList, postTodoItem, deleteTodoItem, updateIsDoneTodoItem };
