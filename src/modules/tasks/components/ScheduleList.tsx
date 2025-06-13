import { useEffect } from 'react';
import { useTasksStore } from '../hooks/useTasks';

export function ScheduleList() {
  const { schedule, loadSchedule, loading } = useTasksStore();

  useEffect(() => { loadSchedule() }, [loadSchedule]);

  if (loading) return <p className="text-center py-4">Calculando scheduling…</p>;

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-medium mb-4">Optimal Execution Order (SJF)</h2>
      <ul className="space-y-2">
        {schedule.map((t, idx) => (
          <li key={t.id}
              className="flex items-center p-3 border rounded hover:bg-gray-50 transition">
            <span className="w-6 text-gray-500">{idx + 1}.</span>
            <div className="ml-3">
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-gray-600">
                dur: {t.duration}s — prio: {t.priority}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
