interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  icon: string;
  iconBg: string;
}

const StatCard = ({ title, value, change, changeType, icon, iconBg }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-gray-600 dark:text-gray-400 text-sm font-medium">{title}</h3>
        <div className={`w-10 h-10 rounded-lg ${iconBg} flex items-center justify-center`}>
          <span className="text-xl">{icon}</span>
        </div>
      </div>
      <div className="mb-2">
        <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
      <div className="flex items-center gap-1">
        {changeType === "up" ? (
          <span className="text-green-500 dark:text-green-400 text-sm">↑</span>
        ) : (
          <span className="text-red-500 dark:text-red-400 text-sm">↓</span>
        )}
        <span className={`text-sm ${changeType === "up" ? "text-green-500 dark:text-green-400" : "text-red-500 dark:text-red-400"}`}>
          {change}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
