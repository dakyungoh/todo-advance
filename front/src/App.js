import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoDetailPage from "./pages/TodoDetailPage";
import TodoListPage from "./pages/TodoListPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TodoListPage />} />
          <Route path="/todo/:id" element={<TodoDetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
