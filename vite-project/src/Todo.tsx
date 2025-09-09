import { Pencil, Trash2, Plus } from "lucide-react";
import { useRef, useState } from "react";

interface Task {
  id: number;
  text: string;
}

const Todo = () => {
  const [taskValue, setTaskValue] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  // ✅ Add new task
  const addTask = () => {
    if (taskValue.trim() === "") return;

    const newTodo: Task = {
      id: Date.now(),
      text: taskValue
    };

    setTasks([...tasks, newTodo]);
    setTaskValue("");
    inputRef.current?.focus();
  };

  // ✅ Delete task
  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const makeUpdate = (id: number) => {
    const taskToEdit = tasks.find(t => t.id === id);
    if (!taskToEdit) return;

    setTaskValue(taskToEdit.text);
    setIsUpdate(true);
    setEditId(id);

    inputRef.current?.focus();
  };

  const updateTask = () => {
    if (taskValue.trim() === "" || editId === null) return;

    setTasks(tasks.map(t => (t.id === editId ? { ...t, text: taskValue } : t)));
    setTaskValue("");
    setIsUpdate(false);
    setEditId(null);
    inputRef.current?.focus();
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-r gap-5 from-blue-400 to-blue-300 p-10 items-center">
      {/* Input Box */}
      <div className="w-2xl flex flex-col gap-5 shadow-sm rounded-lg p-5 bg-white">
        <div className="flex justify-center">
          <h3 className="text-3xl font-bold text-blue-500">To do List</h3>
        </div>
        <div className="w-full flex gap-2">
          <input
            value={taskValue}
            onChange={e => setTaskValue(e.target.value)}
            onKeyDown={e =>
              e.key === "Enter" && (isUpdate ? updateTask() : addTask())
            }
            className="shadow-inner w-full py-2 px-4 border-3 border-blue-300 focus:outline-blue-500 rounded-lg"
            type="text"
            placeholder="Write Here"
            ref={inputRef}
          />

          <button
            onClick={isUpdate ? updateTask : addTask}
            className="px-5 bg-blue-500 rounded-lg text-white hover:bg-blue-400 flex items-center gap-1"
          >
            {isUpdate ? (
              "Update"
            ) : (
              <>
                <Plus size={18} /> Add
              </>
            )}
          </button>
        </div>
      </div>

      {/* Task List */}
      <div className="w-2xl flex flex-col gap-3 shadow-sm rounded-lg p-5 bg-white overflow-y-auto max-h-[500px]">
        {tasks.length === 0 && <h3>No Tasks</h3>}
        {tasks.map(task => (
          <div
            key={task.id}
            className="w-full flex justify-between items-center bg-white group shadow-sm rounded-lg p-2"
          >
            <span>{task.text}</span>
            <div className="flex">
              <button
                onClick={() => makeUpdate(task.id)}
                className="p-2 text-gray-600 opacity-0 group-hover:opacity-100 hover:text-blue-500 transition-opacity"
              >
                <Pencil size={20} />
              </button>
              <button
                onClick={() => deleteTask(task.id)}
                className="p-2 text-gray-600 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
              >
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
