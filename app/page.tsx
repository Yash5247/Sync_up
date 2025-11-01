"use client";

import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";

export default function Dashboard() {
  const stats = [
    {
      title: "Total User",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up" as const,
      icon: "👥",
      iconBg: "bg-purple-500",
    },
    {
      title: "Daily Active Users",
      value: "10293",
      change: "1.3% Up from past week",
      changeType: "up" as const,
      icon: "📦",
      iconBg: "bg-yellow-500",
    },
    {
      title: "New Signups",
      value: "$89,000",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "📈",
      iconBg: "bg-green-400",
    },
    {
      title: "Viral Coefficient Ratio",
      value: "1.2",
      change: "1.8% Up from yesterday",
      changeType: "up" as const,
      icon: "🕐",
      iconBg: "bg-red-500",
    },
    {
      title: "Total",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up" as const,
      icon: "📦",
      iconBg: "bg-orange-500",
    },
    {
      title: "Active Job Post",
      value: "10293",
      change: "1.3% Up from past week",
      changeType: "up" as const,
      icon: "🔍",
      iconBg: "bg-blue-400",
    },
    {
      title: "Total Job Applications",
      value: "200",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "📄",
      iconBg: "bg-pink-500",
    },
    {
      title: "Total recruiters",
      value: "100",
      change: "1.8% Up from yesterday",
      changeType: "up" as const,
      icon: "👥",
      iconBg: "bg-red-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 lg:ml-64 p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2 shadow-sm">
              <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                <span className="text-pink-600 text-sm">MR</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Moni Roy</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <span className="text-gray-400">▼</span>
            </div>
            <div className="flex gap-1 bg-white rounded-lg p-1 shadow-sm">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Day</button>
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Week</button>
              <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">Month</button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Total Users</h2>
          <div className="h-64 relative">
            <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M 50,150 Q 150,140 250,100 T 450,80 T 650,60 L 750,60 L 750,200 L 50,200 Z"
                fill="url(#gradient)"
              />
              <path
                d="M 50,150 Q 150,140 250,100 T 450,80 T 650,60"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="450" cy="80" r="5" fill="#3B82F6" />
              <text x="450" y="70" fill="#3B82F6" fontSize="12" textAnchor="middle">2400</text>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 px-4">
              <span>5k</span>
              <span>60k</span>
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 py-4">
              <span>2500</span>
              <span>500</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top 3 posts</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 text-sm font-medium text-gray-600">SyncUp Id</th>
                  <th className="pb-3 text-sm font-medium text-gray-600">Views</th>
                  <th className="pb-3 text-sm font-medium text-gray-600">Likes</th>
                  <th className="pb-3 text-sm font-medium text-gray-600">Comments</th>
                  <th className="pb-3 text-sm font-medium text-gray-600">Link</th>
                </tr>
              </thead>
              <tbody>
                {["Arnald Hire", "Raj Das", "Md Hasnain"].map((name, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                          <span className="text-xs text-gray-600">{name[0]}</span>
                        </div>
                        <span className="text-sm text-gray-900">{name}</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-gray-600">423</td>
                    <td className="py-3 text-sm text-gray-600">423</td>
                    <td className="py-3 text-sm text-gray-600">423</td>
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

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Top 3 job posts</h2>
            <table className="w-full">
              <thead>
                <tr className="border-b text-left">
                  <th className="pb-3 text-sm font-medium text-gray-600">Company</th>
                  <th className="pb-3 text-sm font-medium text-gray-600">Views</th>
                  <th className="pb-3 text-sm font-medium text-gray-600">Applications</th>
                  <th className="pb-3 text-sm font-medium text-gray-600">Link</th>
                </tr>
              </thead>
              <tbody>
                {[0, 1, 2].map((index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <span className="text-xs text-blue-600 font-bold">G</span>
                        </div>
                        <span className="text-sm text-gray-900">Google</span>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-gray-600">423</td>
                    <td className="py-3 text-sm text-gray-600">423</td>
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
