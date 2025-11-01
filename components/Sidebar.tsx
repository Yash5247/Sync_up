"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "Post Management", path: "/posts", icon: "📝" },
    { name: "User Management", path: "/users", icon: "👥" },
    { name: "Job Management", path: "/jobs", icon: "💼" },
  ];

  return (
    <>
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-gray-900 text-white p-2 rounded"
      >
        ☰
      </button>
      <div
        className={`${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 bg-gray-900 dark:bg-gray-950 flex flex-col fixed left-[-1px] top-0 z-40`}
        style={{ width: '241px', height: '1070px' }}
      >
        {isMobileOpen && (
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden absolute top-4 right-4 text-white text-2xl"
          >
            ×
          </button>
        )}
        <div className="p-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-700">Sync</span>
            <span className="text-2xl font-bold text-blue-400">Up</span>
            <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">↑</span>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-4 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-center gap-3 px-4 py-3 mb-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-600 dark:bg-blue-700 text-white"
                    : "text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-4 pb-6 mt-auto">
          <div className="flex items-center gap-3 px-4 py-3 mb-2 text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 cursor-pointer rounded-lg transition-colors">
            <span className="text-lg">⚙️</span>
            <span>Settings</span>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 text-gray-400 dark:text-gray-500 hover:text-gray-200 dark:hover:text-gray-300 cursor-pointer rounded-lg transition-colors">
            <span className="text-lg">🚪</span>
            <span>Logout</span>
          </div>
        </div>
      </div>
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
