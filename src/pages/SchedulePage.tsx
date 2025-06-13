import { ScheduleView } from "../modules/tasks/components/ScheduleView";

export default function SchedulePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Optimal Schedule</h2>
      <ScheduleView />
    </div>
  );
}