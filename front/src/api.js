import axios from "axios";

const API_URL = "http://localhost:8000/api";

async function getTodoList() {
  const response = await axios.get(`${API_URL}/todo`);
  return response.data;
}

async function getTodoItem(id) {
  const response = await axios.get(`${API_URL}/todo/${id}`);
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

async function updateNameTodoItem(id, nextName) {
  const response = await axios.put(`${API_URL}/todo/${id}/name`, {
    name: nextName,
  });
  return response;
}

export {
  getTodoList,
  getTodoItem,
  postTodoItem,
  deleteTodoItem,
  updateIsDoneTodoItem,
  updateNameTodoItem,
};
