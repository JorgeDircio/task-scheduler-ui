import { httpClient } from "../../../common/api/HttpClient";
import type { Task } from "../types";

export async function fetchTasks(): Promise<Task[]> {
  const { data } = await httpClient.get<Task[]>('/tasks');
  return data;
}

export async function createTask(task: Omit<Task, 'id'>): Promise<Task> {
  const { data } = await httpClient.post<Task>('/tasks', task);
  return data;
}

export async function fetchSchedule(): Promise<Task[]> {
  const { data } = await httpClient.get<Task[]>('/tasks/schedule');
  return data;
}

export async function deleteTask(id: number): Promise<void> {
  await httpClient.delete(`/tasks/${id}`);
}