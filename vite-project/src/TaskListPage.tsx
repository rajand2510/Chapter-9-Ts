import { Pencil, Trash2 } from "lucide-react";
import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "./store";
import { deleteTask, updateTask } from "./taskSlice";
import _ from "lodash";

const TasksPage = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState<number | null>(null);
  const [editValue, setEditValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const startEdit = (id: number, text: string) => {
    setEditId(id);
    setEditValue(text);
    inputRef.current?.focus();
  };

  const saveEdit = () => {
    if (editId !== null && !_.isEmpty(_.trim(editValue))) {
      dispatch(updateTask({ id: editId, newText: _.trim(editValue) }));
      setEditId(null);
      setEditValue("");
    }
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-r from-blue-400 to-blue-300 p-10 items-center">
      <div className="w-2xl flex flex-col gap-5 shadow-sm rounded-lg p-5 bg-white mb-5">
        <h3 className="text-3xl font-bold text-blue-500 text-center">
          Task List
        </h3>
      </div>

      <div className="w-2xl flex flex-col gap-3 shadow-sm rounded-lg p-5 bg-white overflow-y-auto max-h-[500px]">
        {tasks.length === 0 && <h3>No Tasks</h3>}
        {tasks.map((task) => (
          <div
            key={task.id}
            className="w-full flex justify-between items-center bg-white group shadow-sm rounded-lg p-2"
          >
            {editId === task.id ? (
              <div className="flex w-full gap-2">
                <input
                  ref={inputRef}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                  className="flex-1 px-3 py-1 border rounded-lg"
                />
                <button
                  onClick={saveEdit}
                  className="px-4 bg-green-500 text-white rounded-lg hover:bg-green-400"
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <span>{task.text}</span>
                <div className="flex">
                  <button
                    onClick={() => startEdit(task.id, task.text)}
                    className="p-2 text-gray-600 opacity-0 group-hover:opacity-100 hover:text-blue-500 transition-opacity"
                  >
                    <Pencil size={20} />
                  </button>
                  <button
                    onClick={() => dispatch(deleteTask(task.id))}
                    className="p-2 text-gray-600 opacity-0 group-hover:opacity-100 hover:text-red-500 transition-opacity"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksPage;
