console.log("start server");

const express = require("express");
const todoList = require("./todo-list.json");

const app = express();
const port = 8000;

// TODO
// 1. TODO 조회 (V)
// 2. TODO 추가 ( )
// 3. TODO 삭제 ( )
// 4. TODO 변경 ( )
//   4.1. 할 일 내용 변경(텍스트) ( )
//   4.2. 했는지 여부 변경(체크박스) ( )

app.get("/", (req, res) => {
  res.setHeader("Access-Control-Allow-origin", "*");
  res.send({ value: "Hello World!" });
});

app.get("/todo-list", (req, res) => {
  console.log("get todo list");
  res.setHeader("Access-Control-Allow-origin", "*");
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(todoList));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
