export function RecentActivity() {
  return (
    <div className="p-6 border border-white/10 rounded-2xl bg-gradient-to-b from-black/50 to-black/20 backdrop-blur">
      <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
      <div className="space-y-3">
        {recentActivity.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between p-3 rounded-lg bg-white/5">
            <div className="text-sm">{activity.text}</div>
            <div className="text-xs text-white/50">{activity.timestamp}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
