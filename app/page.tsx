"use client";

import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";

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
    <div className="flex min-h-screen bg-gray-50 relative">
      <Sidebar />
      <div className="relative" style={{ marginLeft: "240px", width: "1201px", minHeight: "1070px" }}>
        <div className="bg-white shadow-sm fixed top-0" style={{ width: "1201px", height: "70px", left: "240px", zIndex: 10 }}>
          <div className="flex items-center justify-between h-full px-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-2">
                <div className="w-8 h-8 rounded-full bg-pink-200 flex items-center justify-center">
                  <span className="text-pink-600 text-sm">MR</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Moni Roy</p>
                  <p className="text-xs text-gray-500">Admin</p>
                </div>
                <span className="text-gray-400">▼</span>
              </div>
              <div className="flex gap-1 bg-white rounded-lg p-1">
                <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Day</button>
                <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded">Week</button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded">Month</button>
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
            className="absolute bg-white rounded-lg shadow-sm p-6"
            style={{
              top: "550px",
              left: "272px",
              width: "583px",
              height: "420px",
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Deals Details</h2>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top 3 posts</h2>
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

          <div
            className="absolute bg-white rounded-lg shadow-sm p-6"
            style={{
              top: "550px",
              left: "875px",
              width: "517px",
              height: "420px",
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Deals Details</h2>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Top 3 job posts</h2>
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