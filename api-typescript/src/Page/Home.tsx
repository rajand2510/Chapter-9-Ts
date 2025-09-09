import { useEffect, useState } from "react";
import { CheckCircle, Circle, Trash2, Plus } from "lucide-react";

// Task type definition
interface Task {
  id: number;
  title: string;
  description: string;
  date: string;
  priority: "low" | "medium" | "high";
  category: string;
  assignee: string;
  completed: boolean;
  createdAt: string;
}

const Home = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [newTask, setNewTask] = useState<
    Omit<Task, "id" | "createdAt" | "completed">
  >({
    title: "",
    description: "",
    date: "",
    priority: "medium",
    category: "",
    assignee: "",
  });

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await fetch("http://localhost:5000/tasks");
        const data: Task[] = await res.json();
        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const addTask = () => {
    if (!newTask.title.trim() || !newTask.date) return;

    const task: Task = {
      ...newTask,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString().split("T")[0],
    };

    setTasks([...tasks, task]);
    setNewTask({
      title: "",
      description: "",
      date: "",
      priority: "medium",
      category: "",
      assignee: "",
    });
  };

  // Toggle complete (Local only - no API)
  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete task (Local only - no API)
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Priority colors
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500 text-white";
      case "medium":
        return "bg-yellow-400 text-black";
      case "low":
        return "bg-green-400 text-black";
      default:
        return "bg-gray-300 text-black";
    }
  };

  // Handle form submission with Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        

        {/* Add Task Form */}
        <div className="mb-15 mt-20 bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-semibold mb-4 text-slate-200">
            Add New Task
          </h2>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <input
              type="text"
              placeholder="Task Title *"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              onKeyPress={handleKeyPress}
            />
            <input
              type="text"
              placeholder="Description"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
            <input
              type="date"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-blue-400 focus:outline-none transition-colors"
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
              onKeyPress={handleKeyPress}
            />
            <select
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-blue-400 focus:outline-none transition-colors"
              value={newTask.priority}
              onChange={(e) =>
                setNewTask({
                  ...newTask,
                  priority: e.target.value as "low" | "medium" | "high",
                })
              }
            >
              <option value="low">Low Priority</option>
              <option value="medium">Medium Priority</option>
              <option value="high">High Priority</option>
            </select>
            <input
              type="text"
              placeholder="Category"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
              value={newTask.category}
              onChange={(e) =>
                setNewTask({ ...newTask, category: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
            <input
              type="text"
              placeholder="Assignee"
              className="p-3 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-slate-400 focus:border-blue-400 focus:outline-none transition-colors"
              value={newTask.assignee}
              onChange={(e) =>
                setNewTask({ ...newTask, assignee: e.target.value })
              }
              onKeyPress={handleKeyPress}
            />
          </div>
          <button
            onClick={addTask}
            disabled={!newTask.title.trim() || !newTask.date}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-lg hover:from-green-400 hover:to-emerald-400 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-200 font-medium"
          >
            <Plus size={20} /> Add Task
          </button>
        </div>

        {/* Task Statistics */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-slate-700 text-center">
            <div className="text-2xl font-bold text-blue-400">
              {tasks.length}
            </div>
            <div className="text-slate-300">Total Tasks</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-slate-700 text-center">
            <div className="text-2xl font-bold text-green-400">
              {tasks.filter((t) => t.completed).length}
            </div>
            <div className="text-slate-300">Completed</div>
          </div>
          <div className="bg-slate-800/50 backdrop-blur rounded-lg p-4 border border-slate-700 text-center">
            <div className="text-2xl font-bold text-orange-400">
              {tasks.filter((t) => !t.completed).length}
            </div>
            <div className="text-slate-300">Pending</div>
          </div>
        </div>

        {/* Task List */}
        {loading ? (
          <div className="text-center text-slate-400 py-10">
            Loading tasks...
          </div>
        ) : tasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">
              No tasks yet
            </h3>
            <p className="text-slate-400">
              Add your first task above to get started!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {tasks.map((task) => (
              <div
                key={task.id}
                className={`mb-6 rounded-xl break-inside-avoid bg-white text-black p-6 shadow-lg hover:shadow-xl transition-all duration-200 border-l-4 ${
                  task.priority === "high"
                    ? "border-red-500"
                    : task.priority === "medium"
                    ? "border-yellow-500"
                    : "border-green-500"
                } ${task.completed ? "opacity-75" : ""}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3
                      className={`font-bold text-lg mb-2 ${
                        task.completed ? "line-through text-gray-500" : ""
                      }`}
                    >
                      {task.title}
                    </h3>
                    {task.description && (
                      <p
                        className={`text-sm mb-3 ${
                          task.completed ? "text-gray-500" : "text-gray-600"
                        }`}
                      >
                        {task.description}
                      </p>
                    )}

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 text-xs mb-3">
                      <span
                        className={`px-2 py-1 rounded-full font-medium ${getPriorityColor(
                          task.priority
                        )}`}
                      >
                        {task.priority.toUpperCase()}
                      </span>
                      {task.category && (
                        <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-800 font-medium">
                          {task.category}
                        </span>
                      )}
                      {task.assignee && (
                        <span className="px-2 py-1 rounded-full bg-purple-100 text-purple-800 font-medium">
                          👤 {task.assignee}
                        </span>
                      )}
                    </div>

                    {/* Dates */}
                    <div className="text-xs text-gray-500 space-y-1">
                      <div className="flex items-center gap-1">
                        <span>📅</span>
                        <span>
                          Due: {new Date(task.date).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span>🕒</span>
                        <span>
                          Created: {new Date(task.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 ml-4">
                    <button
                      onClick={() => toggleComplete(task.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        task.completed
                          ? "bg-green-100 hover:bg-green-200"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      title={
                        task.completed ? "Mark as incomplete" : "Mark as complete"
                      }
                    >
                      {task.completed ? (
                        <CheckCircle className="text-green-600" size={20} />
                      ) : (
                        <Circle className="text-gray-400" size={20} />
                      )}
                    </button>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition-colors"
                      title="Delete task"
                    >
                      <Trash2 className="text-red-500" size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
