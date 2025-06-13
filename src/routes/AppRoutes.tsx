import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import TasksPage from '../pages/TasksPage';
import SchedulePage from '../pages/SchedulePage';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>  
          <Route index element={<TasksPage />} />
          <Route path="schedule" element={<SchedulePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
