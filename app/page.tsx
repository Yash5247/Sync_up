"use client";

import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import ThemeToggle from "@/components/ThemeToggle";

export default function Dashboard() {
  const stats = [
    {
      title: "Total User",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up" as const,
      icon: "👥",
      iconBg: "bg-purple-500",
      position: { top: "101px", left: "32px" },
    },
    {
      title: "Daily Active Users",
      value: "10,293",
      change: "1.3% Up from past week",
      changeType: "up" as const,
      icon: "📦",
      iconBg: "bg-yellow-500",
      position: { top: "101px", left: "314px" },
    },
    {
      title: "New Signups",
      value: "$89,000",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "📈",
      iconBg: "bg-green-400",
      position: { top: "101px", left: "596px" },
    },
    {
      title: "Viral Coefficient Ratio",
      value: "1.2",
      change: "1.8% Up from yesterday",
      changeType: "up" as const,
      icon: "🕐",
      iconBg: "bg-orange-500",
      position: { top: "101px", left: "878px" },
    },
    {
      title: "Total",
      value: "40,689",
      change: "8.5% Up from yesterday",
      changeType: "up" as const,
      icon: "📦",
      iconBg: "bg-orange-500",
      position: { top: "282px", left: "32px" },
    },
    {
      title: "Active Job Post",
      value: "10,293",
      change: "1.3% Up from past week",
      changeType: "up" as const,
      icon: "🔍",
      iconBg: "bg-blue-400",
      position: { top: "282px", left: "314px" },
    },
    {
      title: "Total Job Applications",
      value: "200",
      change: "4.3% Down from yesterday",
      changeType: "down" as const,
      icon: "📄",
      iconBg: "bg-purple-500",
      position: { top: "282px", left: "596px" },
    },
    {
      title: "Total recruiters",
      value: "100",
      change: "1.8% Up from yesterday",
      changeType: "up" as const,
      icon: "👥",
      iconBg: "bg-pink-500",
      position: { top: "282px", left: "878px" },
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 relative">
      <Sidebar />
      <div className="relative" style={{ marginLeft: "240px", width: "1201px", minHeight: "1500px" }}>
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
              top: "463px",
              left: "32px",
              width: "1138px",
              height: "444px",
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Total Users</h2>
            <div className="h-80 w-full relative" style={{ minHeight: "320px" }}>
              <svg className="w-full h-full" viewBox="0 0 1000 300" preserveAspectRatio="xMidYMid meet" style={{ width: "100%", height: "100%" }}>
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 50,220 L 100,200 L 150,180 L 200,190 L 250,140 L 300,170 L 350,160 L 400,200 L 450,180 L 500,200 L 550,150 L 600,160 L 650,120 L 700,140 L 750,130 L 800,150 L 850,160 L 900,140 L 950,145 L 950,300 L 50,300 Z"
                  fill="url(#gradient)"
                />
                <path
                  d="M 50,220 L 100,200 L 150,180 L 200,190 L 250,140 L 300,170 L 350,160 L 400,200 L 450,180 L 500,200 L 550,150 L 600,160 L 650,120 L 700,140 L 750,130 L 800,150 L 850,160 L 900,140 L 950,145"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="250" cy="140" r="6" fill="#3B82F6" />
                <circle cx="400" cy="200" r="6" fill="#3B82F6" />
                <circle cx="550" cy="150" r="6" fill="#3B82F6" />
                <circle cx="650" cy="120" r="6" fill="#3B82F6" />
                <circle cx="750" cy="130" r="6" fill="#3B82F6" />
                <circle cx="850" cy="160" r="6" fill="#3B82F6" />
                <text x="250" y="125" fill="#3B82F6" fontSize="12" textAnchor="middle" fontWeight="bold">1800</text>
                <text x="400" y="185" fill="#3B82F6" fontSize="12" textAnchor="middle" fontWeight="bold">2100</text>
                <text x="550" y="135" fill="#3B82F6" fontSize="14" textAnchor="middle" fontWeight="bold">2400</text>
                <text x="650" y="105" fill="#3B82F6" fontSize="12" textAnchor="middle" fontWeight="bold">1500</text>
                <text x="750" y="115" fill="#3B82F6" fontSize="12" textAnchor="middle" fontWeight="bold">1600</text>
                <text x="850" y="145" fill="#3B82F6" fontSize="12" textAnchor="middle" fontWeight="bold">1900</text>
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 dark:text-gray-400 px-4">
                <span>5k</span>
                <span>15k</span>
                <span>25k</span>
                <span>35k</span>
                <span>45k</span>
                <span>60k</span>
              </div>
              <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 py-4">
                <span>2500</span>
                <span>2000</span>
                <span>1500</span>
                <span>1000</span>
                <span>500</span>
              </div>
            </div>
          </div>

          <div
            className="absolute bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            style={{
              top: "927px",
              left: "32px",
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
              top: "927px",
              left: "635px",
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