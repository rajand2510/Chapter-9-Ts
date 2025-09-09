interface Task {
  id: number;
  text: string;
  done: boolean;
}

let tasks: Task[] = [
  { id: 1, text: "Buy milk", done: true },
  { id: 2, text: "Go to gym", done: true },
  { id: 3, text: "Learn TypeScript", done: true },
];



tasks.push({ id: 4, text: "Read book", done: false });
tasks = [...tasks, { id: 5, text: "Read book", done: true }];
console.log(tasks);
const testid:number = 3;
tasks = tasks.map((task) => task.id ==testid ? {...task,text:"Read book"} : task)
tasks = tasks.map((task) =>task.id ==testid ? {...task,done:!task.done} :task)
tasks = tasks.filter((task) => task.done !== true)
tasks = tasks.map((task) => ({...task,text:"updated"}))
console.log(tasks);

