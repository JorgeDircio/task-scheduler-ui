import { useEffect } from 'react';
import { useTasksStore } from '../hooks/useTasks';

export function ScheduleView() {
  const { schedule, loadSchedule, loading } = useTasksStore();

  useEffect(() => {
    loadSchedule();
  }, [loadSchedule]);

  if (loading) return <p>Loading schedule...</p>;

  return (
    <ol className="list-decimal pl-5 space-y-2">
      {schedule.map(t => (
        <li key={t.id} className="p-2 border rounded">
          {t.name} ({t.duration}s)
        </li>
      ))}
    </ol>
  );
}
