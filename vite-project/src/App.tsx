// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import TasksPage from "./TaskListPage";
import AddPage from "./AddTaskPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="flex gap-4 bg-blue-200 p-4">
          <Link to="/" className="hover:underline">
            Tasks
          </Link>
          <Link to="/add" className="hover:underline">
            Add Task
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
