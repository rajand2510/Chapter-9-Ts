import { Plus } from "lucide-react";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addTask } from "./taskSlice";
import _ from "lodash";

const AddPage = () => {
  const dispatch = useDispatch();
  const [taskValue, setTaskValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleAdd = () => {
    const trimmedValue = _.trim(taskValue);
    if (_.isEmpty(trimmedValue)) return;

    dispatch(addTask(trimmedValue));
    setTaskValue("");
    inputRef.current?.focus();
    navigate("/");
  };

  return (
    <div className="h-full flex flex-col bg-gradient-to-r from-blue-400 to-blue-300 p-10 items-center">
      <div className="w-2xl flex flex-col gap-5 shadow-sm rounded-lg p-5 bg-white">
        <h3 className="text-3xl font-bold text-blue-500 text-center">
          Add Task
        </h3>
        <div className="w-full flex gap-2">
          <input
            ref={inputRef}
            value={taskValue}
            onChange={(e) => setTaskValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            className="shadow-inner w-full py-2 px-4 border-3 border-blue-300 focus:outline-blue-500 rounded-lg"
            placeholder="Write Here"
          />
          <button
            onClick={handleAdd}
            className="px-5 bg-blue-500 rounded-lg text-white hover:bg-blue-400 flex items-center gap-1"
          >
            <Plus size={18} /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPage;
