import { useEffect } from 'react';
import { useTasksStore } from '../hooks/useTasks';
import { PriorityBadge } from './PriorityBadge';

export function ScheduleView() {
  const { schedule, loadSchedule, loading } = useTasksStore();

  useEffect(() => { loadSchedule() }, [loadSchedule]);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <p className="text-gray-600">Calculating optimal order…</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-50">
              {['#', 'Name', 'Arrival', 'Duration', 'Priority'].map((h) => (
                <th
                  key={h}
                  className="px-4 py-2 text-left text-sm font-medium text-gray-700"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schedule.map((t, i) => (
              <tr
                key={t.id}
                className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                <td className="px-4 py-2 text-sm">{i + 1}</td>
                <td className="px-4 py-2 text-sm font-semibold">{t.name}</td>
                <td className="px-4 py-2 text-sm">{t.arrival_time}s</td>
                <td className="px-4 py-2 text-sm">{t.duration}s</td>
                <td className="px-4 py-2 text-sm">
                  <PriorityBadge priority={t.priority as 'alta' | 'media' | 'baja' }/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
