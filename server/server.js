const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const FILE_NAME = "todo-list.json";

const app = express();
app.use(cors());
app.use(express.json());

// GET all items
app.get("/api/todo", (req, res) => {
  const todoList = getTodoList();
  res.send(todoList);
});

// GET an item by ID
app.get("/api/todo/:id", (req, res) => {
  const todoList = getTodoList();
  const todoItem = todoList.find((item) => item.id === req.params.id);
  if (!todoItem) {
    return res.status(404).send("The item with the given ID was not found.");
  }
  res.send(todoItem);
});

// POST a new item
// req.body = { name: string, isDone?: boolean, comments?: string[] }
app.post("/api/todo", (req, res) => {
  const todoList = getTodoList();
  const todoItem = {
    id: uuidv4(),
    name: req.body.name,
    isDone: req.body.isDone || false,
    comments: req.body.comments || [],
  };
  todoList.push(todoItem);
  saveTodoList(todoList);
  res.send(todoItem);
});

// PUT (update) an item by ID
// req.body = { name: string, isDone: boolean, comments: string[] }
app.put("/api/todo/:id", (req, res) => {
  const todoList = getTodoList();
  const todoItem = todoList.find((item) => item.id === req.params.id);
  if (!todoItem) {
    return res.status(404).send("The item with the given ID was not found.");
  }
  todoItem.name = req.body.name || todoItem.name;
  todoItem.isDone = req.body.isDone || todoItem.isDone;
  todoItem.comments = req.body.comments || todoItem.comments;
  saveTodoList(todoList);
  res.send(todoItem);
});

// PUT (update) an name field of an item by ID
// req.body = { name: string }
app.put("/api/todo/:id/name", (req, res) => {
  const todoList = getTodoList();
  const todoItem = todoList.find((item) => item.id === req.params.id);
  if (!todoItem) {
    return res.status(404).send("The item with the given ID was not found.");
  }
  todoItem.name = req.body.name || todoItem.name;
  saveTodoList(todoList);
  res.send(todoItem);
});

// PUT (update) an isDone field of an item by ID
// req.body = { isDone: boolean }
app.put("/api/todo/:id/is-done", (req, res) => {
  const todoList = getTodoList();
  const todoItem = todoList.find((item) => item.id === req.params.id);
  if (!todoItem) {
    return res.status(404).send("The item with the given ID was not found.");
  }
  todoItem.isDone = req.body.isDone || todoItem.isDone;
  saveTodoList(todoList);
  res.send(todoItem);
});

// PUT (append) an comment for an item by ID
// req.body = { comment: string }
app.put("/api/todo/:id/comment", (req, res) => {
  const todoList = getTodoList();
  const todoItem = todoList.find((item) => item.id === req.params.id);
  if (!todoItem) {
    return res.status(404).send("The item with the given ID was not found.");
  }
  todoItem.comments.append(res.comment);
  saveTodoList(todoList);
  res.send(todoItem);
});

// DELETE an item by ID
app.delete("/api/todo/:id", (req, res) => {
  const todoList = getTodoList();
  const todoItemIndex = todoList.findIndex((item) => item.id === req.params.id);
  if (todoItemIndex === -1) {
    return res.status(404).send("The item with the given ID was not found.");
  }
  const todoItem = todoList[todoItemIndex];
  todoList.splice(todoItemIndex, 1);
  saveTodoList(todoList);
  res.send(todoItem);
});

function getTodoList() {
  const data = fs.readFileSync(FILE_NAME);
  return JSON.parse(data).todoList;
}

function saveTodoList(todoList) {
  const data = JSON.stringify({ todoList }, undefined, 2);
  fs.writeFileSync(FILE_NAME, data);
}

const port = 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
