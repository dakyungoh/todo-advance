import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoItem } from "../api";

export default function TodoDetailPage() {
  const { id } = useParams();

  const [todoItem, setTodoItem] = useState(undefined);

  useEffect(() => {
    fetchTodoItem();
  }, []);

  async function fetchTodoItem() {
    const res = await getTodoItem(id);
    setTodoItem(res);
  }

  if (todoItem === undefined) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="title">TODO DETAIL</div>
      <div>{todoItem.name}</div>
      <div>{todoItem.isDone ? "했음" : "안했음"}</div>
      <div>댓글 목록</div>
      <div>
        {todoItem.comments.map((comment) => (
          <div>{comment}</div>
        ))}
      </div>
    </>
  );
}
