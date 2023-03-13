console.log("start server");

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const bodyParser = require("body-parser");

const data = require("./todo-list.json");
// const todoListWriter = fs.createWriteStream("./todo-list.json");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 8000;

// TODO
// 1. TODO 조회 (V)
// 2. TODO 추가 ( )
// 3. TODO 삭제 ( )
// 4. TODO 변경 ( )
//   4.1. 할 일 내용 변경(텍스트) ( )
//   4.2. 했는지 여부 변경(체크박스) ( )

app.get("/", (req, res) => {
  res.send({ value: "Hello World!" });
});

app.get("/todo-list", (req, res) => {
  console.log("get todo list");
  res.send(JSON.stringify(data));
});

app.post("/todo-item", (req, res) => {
  console.log("post todo item", req.body);
  const newTodoItem = {
    title: req.body.title,
    isDone: false,
    comments: [],
  };

  data.todoList.push(newTodoItem);
  console.log(data);
  // todoListWriter.write(JSON.stringify(data));
  res.send("Got a POST request");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
