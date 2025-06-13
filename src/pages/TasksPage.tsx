import { TaskForm }  from "../modules/tasks/components/TaskForm";
import { TaskList }  from "../modules/tasks/components/TaskList";

export default function TasksPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-center">Task Scheduler</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
