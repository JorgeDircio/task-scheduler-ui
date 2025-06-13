import { useEffect } from 'react';
import { useTasksStore } from '../hooks/useTasks';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const { tasks, loadTasks, loading } = useTasksStore();

  useEffect(() => { loadTasks() }, [loadTasks]);

  if (loading) return <p className="text-center py-4">Loading tasks…</p>;

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-medium mb-4">Tasks</h2>
      <ul className="space-y-2 max-h-80 overflow-y-auto">
        {tasks.map(t => (
          <TaskItem
            key={t.id}
            id={t.id}
            name={t.name}
            duration={t.duration}
            priority={t.priority}
            status={t.status}
          />
        ))}
      </ul>
      {tasks.length === 0 && (
        <p className="text-gray-500 text-center py-8">No tasks yet.</p>
      )}
    </div>
  );
}
