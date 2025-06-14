import type { Task } from "../modules/tasks/types"

/**
 * Shortest‐Job‐First con tie‐break por prioridad: alta > media > baja.
 * Solo programa aquellas tareas cuya arrival_time ≤ currentTime,
 * y si no hay ninguna, avanza el reloj al siguiente arrival_time.
 */
export function calculateSJFWithPriority(tasks: Task[]): Task[] {
    const remaining = [...tasks];
    const result: Task[] = [];
    let currentTime = 0;
  
    while (remaining.length) {
      // Tareas ya llegadas
      const ready = remaining.filter(t => t.arrival_time <= currentTime);
      if (ready.length === 0) {
        // Si no hay ninguna lista, saltar al próximo arrival_time
        currentTime = Math.min(...remaining.map(t => t.arrival_time));
        continue;
      }
  
      ready.sort((a, b) => {
        if (a.duration !== b.duration) return a.duration - b.duration;
        const order = { alta: 0, media: 1, baja: 2 } as const;
        return order[a.priority] - order[b.priority];
      });
  
      const next = ready[0];
      const start = Math.max(currentTime, next.arrival_time);
      currentTime = start + next.duration;
  
      result.push(next);
      remaining.splice(
        remaining.findIndex(t => t.id === next.id),
        1
      );
    }
  
    return result;
  }