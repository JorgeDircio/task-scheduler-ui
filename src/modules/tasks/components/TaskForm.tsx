import React, { useState } from 'react';
import { useTasksStore } from '../hooks/useTasks';
import toast from 'react-hot-toast';

export function TaskForm() {
  const addTask = useTasksStore(s => s.addTask);
  const [name, setName] = useState('');
  const [arrival, setArrival] = useState(0);
  const [duration, setDuration] = useState(0);
  const [priority, setPriority] = useState<'alta'|'media'|'baja'>('media');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addTask({ name, arrival_time: arrival, duration, priority, status: 'pending' });
      toast.success('Task added!');
      setName('');
      setArrival(0);
      setDuration(0);
      setPriority('media');
    } catch (err: unknown) {
        if (err instanceof Error) {
            toast.error(err.message || 'Error adding task');
          } else {
            toast.error('Unknown error occurred');
          }
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="
        bg-white shadow rounded-lg 
        p-4 sm:p-6 
        grid grid-cols-1 gap-4
      "
    >
      {/* Name siempre full width */}
      <div>
        <label className="block font-medium mb-1">Name</label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
          required
        />
      </div>

      {/* Campos numéricos + select: apilados en móvil, 3 en sm */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block font-medium mb-1">Arrival (s)</label>
          <input
            type="number"
            value={arrival}
            onChange={e => setArrival(+e.target.value)}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Duration (s)</label>
          <input
            type="number"
            value={duration}
            onChange={e => setDuration(+e.target.value)}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block font-medium mb-1">Priority</label>
          <select
            value={priority}
            onChange={e => setPriority(e.target.value as 'alta'|'media'|'baja')}
            className="w-full p-2 border rounded focus:ring focus:ring-blue-200"
          >
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
        </div>
      </div>

      {/* Botón full-width en móvil, alineado a la derecha en desktop */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="
            w-full sm:w-auto 
            px-6 py-2 
            bg-blue-600 hover:bg-blue-700 
            text-white rounded shadow
            disabled:opacity-50 disabled:cursor-not-allowed
          "
        >
          {loading ? 'Adding…' : 'Add Task'}
        </button>
      </div>
    </form>
  );
}
