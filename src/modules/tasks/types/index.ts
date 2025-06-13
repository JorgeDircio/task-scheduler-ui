export interface Task {
    id: number;
    name: string;
    arrival_time: number;
    duration: number;
    priority: 'alta' | 'media' | 'baja';
    status: 'pending' | 'running' | 'done';
  }