import { create } from 'zustand';
import toast from 'react-hot-toast';
import { fetchTasks, createTask, fetchSchedule, deleteTask } from '../api/tasks';
import type { Task } from '../types';

interface TasksState {
    tasks: Task[];
    schedule: Task[];
    loading: boolean;
    loadTasks(): Promise<void>;
    addTask(data: Omit<Task, 'id'>): Promise<void>;
    loadSchedule(): Promise<void>;
    deleteTask(id: number): Promise<void>;
}

export const useTasksStore = create<TasksState>((set, get) => ({
    tasks: [],
    schedule: [],
    loading: false,
    loadTasks: async () => {
        try {
            set({ loading: true });
            const tasks = await fetchTasks();
            set({ tasks, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error('Failed to load tasks. Please try again.');
            console.error('Error loading tasks:', error);
        }
    },
    addTask: async (taskData) => {
        try {
            set({ loading: true });
            await createTask(taskData);
            toast.success('Task added!');
            await get().loadTasks();
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error('Failed to add task. Please try again.');
            console.error('Error adding task:', error);
        }
    },
    loadSchedule: async () => {
        try {
            set({ loading: true });
            const schedule = await fetchSchedule();
            set({ schedule, loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error('Failed to load schedule. Please try again.');
            console.error('Error loading schedule:', error);
        }
    },
    deleteTask: async (id: number) => {
        try {
            set({ loading: true });
            await deleteTask(id);
            toast.success('Task deleted!');
            await get().loadTasks();
            set({ loading: false });
        } catch (error) {
            set({ loading: false });
            toast.error('Failed to delete task. Please try again.');
            console.error('Error deleting task:', error);
        }
    }
}));
