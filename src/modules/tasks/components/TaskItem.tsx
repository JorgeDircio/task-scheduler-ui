import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useTasksStore } from '../hooks/useTasks';
import { PriorityBadge } from './PriorityBadge';

interface TaskItemProps {
    id: number;
    name: string;
    duration: number;
    priority: 'alta' | 'media' | 'baja';
    status: 'pending' | 'running' | 'done';
}

const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    running: 'bg-blue-100 text-blue-800',
    done: 'bg-green-100 text-green-800',
} as const;


export const TaskItem: React.FC<TaskItemProps> = ({ id, name, duration, priority, status }) => {
    const deleteTask = useTasksStore(s => s.deleteTask);

    return (
        <li className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg
                   hover:bg-gray-100 transition">
            <div>
                <p className="font-semibold">{name}</p>
                <p className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">dur: {duration}s</span>
                    <PriorityBadge priority={priority} />
                    <span className={`px-2 py-0.5 text-xs rounded ${statusColors[status]}`}>
                        {status.toUpperCase()}
                    </span>
                </p>
            </div>
            <button
                onClick={() => deleteTask(id)}
                className="text-red-500 hover:text-red-700 p-2"
                title="Delete Task"
            >
                <FaTrash />
            </button>
        </li>
    );
};
