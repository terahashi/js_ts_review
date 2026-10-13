export function run() {
  interface Task {
    title: string;
    completed: boolean;
  }

  const task: Task = {
    title: '買い物',
    completed: false,
  };

  console.log(task);
}
