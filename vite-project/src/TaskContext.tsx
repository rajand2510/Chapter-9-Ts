import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface Task {
  id: number;
  text: string;
}

interface TaskContextType {
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (id: number) => void;
  updateTask: (id: number, newText: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const updateTask = (id: number, newText: string) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, text: newText } : t)));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const ctx = useContext(TaskContext);
  if (!ctx) throw new Error("useTasks must be used within TaskProvider");
  return ctx;
};
