export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  date: string;
  priority: "low" | "medium" | "high";
  category: string;
  assignee: string;
  createdAt: string;
}
