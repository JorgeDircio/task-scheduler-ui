import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


export default function MainLayout() {
    const base = 'px-4 py-2 font-medium';
    const active = 'border-b-2 border-white';
    return (
        <div className="min-h-screen flex flex-col">
            <header className="bg-blue-600 text-white">
                <nav className="max-w-2xl mx-auto flex space-x-4">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${base} ${isActive ? active : 'opacity-70 hover:opacity-100'}`
                        }
                    >
                        Tasks
                    </NavLink>
                    <NavLink
                        to="/schedule"
                        className={({ isActive }) =>
                            `${base} ${isActive ? active : 'opacity-70 hover:opacity-100'}`
                        }
                    >
                        Schedule
                    </NavLink>
                </nav>
            </header>
            <main className="flex-grow container mx-auto p-6">
                <Outlet />
            </main>
            <footer className="bg-gray-200 text-center p-4">
                © 2025 Task Scheduler Jorge Dircio
            </footer>
        </div>
    );
}