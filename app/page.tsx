"use client";

import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Dashboard() {
  const stats = [
    {
      title: "Total Order",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up" as const,
      icon: "📦",
      iconBg: "bg-orange-500",
      position: { top: "171px", left: "562px" },
    },
    {
      title: "Total Sales",
      value: "$89,000",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "💰",
      iconBg: "bg-green-400",
      position: { top: "171px", left: "854px" },
    },
    {
      title: "Order Pending",
      value: "200",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "⏳",
      iconBg: "bg-yellow-500",
      position: { top: "171px", left: "1146px" },
    },
    {
      title: "Total Users",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up" as const,
      icon: "👥",
      iconBg: "bg-purple-500",
      position: { top: "352px", left: "272px" },
    },
    {
      title: "Total Order",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up" as const,
      icon: "📦",
      iconBg: "bg-orange-500",
      position: { top: "352px", left: "564px" },
    },
    {
      title: "Total Sales",
      value: "$89,000",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "💰",
      iconBg: "bg-green-400",
      position: { top: "352px", left: "856px" },
    },
    {
      title: "Order Pending",
      value: "200",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "⏳",
      iconBg: "bg-yellow-500",
      position: { top: "352px", left: "1148px" },
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Sidebar />
      <div className="relative" style={{ marginLeft: "240px", width: "1201px", minHeight: "1070px" }}>
        <div className="bg-white dark:bg-gray-800 shadow-sm fixed top-0" style={{ width: "1201px", height: "70px", left: "240px", zIndex: 10 }}>
          <div className="flex items-center justify-between h-full px-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3 bg-white dark:bg-gray-700 rounded-lg px-4 py-2">
                <div className="relative w-8 h-8 rounded-full bg-pink-200 dark:bg-pink-600 flex items-center justify-center overflow-hidden">
                  <span className="text-pink-600 dark:text-pink-200 text-sm font-medium">MR</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Moni Roy</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Admin</p>
                </div>
                <span className="text-gray-400 dark:text-gray-300">▼</span>
              </div>
              <div className="flex gap-1 bg-white dark:bg-gray-700 rounded-lg p-1">
                <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Day</button>
                <button className="px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded">Week</button>
                <button className="px-4 py-2 text-sm bg-blue-600 dark:bg-blue-500 text-white rounded">Month</button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative" style={{ marginTop: "70px" }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="absolute"
              style={{
                top: stat.position.top,
                left: stat.position.left,
              }}
            >
              <StatCard {...stat} />
            </div>
          ))}

          <div
            className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            style={{
              top: "550px",
              left: "272px",
              width: "583px",
              height: "420px",
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deals Details</h2>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top 3 posts</h2>
            <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700 text-left">
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">SyncUp Id</th>
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Views</th>
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Likes</th>
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Comments</th>
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {["Arnald Hire", "Raj Das", "Md Hasnain"].map((name, index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600 flex items-center justify-center overflow-hidden">
                            <span className="text-xs text-gray-600 dark:text-gray-300 font-medium">{name[0]}</span>
                          </div>
                          <span className="text-sm text-gray-900 dark:text-white">{name}</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-600 dark:text-gray-400">423</td>
                      <td className="py-3 text-sm text-gray-600 dark:text-gray-400">423</td>
                      <td className="py-3 text-sm text-gray-600 dark:text-gray-400">423</td>
                      <td className="py-3">
                        <button
                          className={`px-3 py-1 text-xs text-white rounded ${
                            index === 0 ? "bg-green-500" : index === 1 ? "bg-orange-500" : "bg-red-500"
                          }`}
                        >
                          Link
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>

          <div
            className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            style={{
              top: "550px",
              left: "875px",
              width: "517px",
              height: "420px",
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Deals Details</h2>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top 3 job posts</h2>
            <table className="w-full">
                <thead>
                  <tr className="border-b dark:border-gray-700 text-left">
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Company</th>
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Views</th>
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Applications</th>
                    <th className="pb-3 text-sm font-medium text-gray-600 dark:text-gray-400">Link</th>
                  </tr>
                </thead>
                <tbody>
                  {[0, 1, 2].map((index) => (
                    <tr key={index} className="border-b dark:border-gray-700">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <div className="relative w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center overflow-hidden">
                            <span className="text-xs text-blue-600 dark:text-blue-300 font-bold">G</span>
                          </div>
                          <span className="text-sm text-gray-900 dark:text-white">Google</span>
                        </div>
                      </td>
                      <td className="py-3 text-sm text-gray-600 dark:text-gray-400">423</td>
                      <td className="py-3 text-sm text-gray-600 dark:text-gray-400">423</td>
                      <td className="py-3">
                        <button
                          className={`px-3 py-1 text-xs text-white rounded ${
                            index === 0 ? "bg-green-500" : index === 1 ? "bg-orange-500" : "bg-red-500"
                          }`}
                        >
                          Link
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
}