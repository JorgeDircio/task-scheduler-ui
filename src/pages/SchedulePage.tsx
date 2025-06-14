import { ScheduleView } from "../modules/tasks/components/ScheduleView";

export default function SchedulePage() {
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h2 className="text-3xl font-bold text-center">Optimal Schedule</h2>
        <ScheduleView />
      </div>
    );
  }
  