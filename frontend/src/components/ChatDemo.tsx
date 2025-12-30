import { ArrowRight, MessageSquare, BarChart3 } from "lucide-react";

export default function ChatDemo() {
  return (
    <div className="rounded-lg shadow-xl p-4 border border-gray-400 min-h-[31rem]">
      {/* Chat Interface */}
      <div className="space-y-4 mb-6">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border border-gray-400">
            <span className="text-sm text-slate-600">You</span>
          </div>
          <div className="rounded-2xl rounded-tl-sm px-4 py-2 max-w-[80%] border border-gray-400">
            <p className="text-sm text-gray-700">What is sales like today?</p>
          </div>
        </div>

        <div className="flex items-start gap-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 border border-gray-400">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="bg-primary rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] border border-gray-400">
            <p className="text-sm text-gray-900 mb-2">Today's Sales: $9,042</p>
            <p className="text-xs text-slate-600 mb-3">+23% vs yesterday • 47 orders</p>
          </div>
        </div>
      </div>

      {/* Mini Dashboard */}
      <div className="border-t border-slate-200 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="w-5 h-5" />
          <h3 className="font-medium text-gray-900">Sales Dashboard</h3>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-primary rounded-lg p-3 border border-gray-400">
            <p className="text-xs text-slate-600 mb-1">Today</p>
            <p className="text-lg font-bold text-slate-900">$9.0k</p>
          </div>
          <div className="bg-primary border border-gray-400 rounded-lg p-3">
            <p className="text-xs text-slate-600 mb-1">This Week</p>
            <p className="text-lg font-bold text-slate-900">$32.3k</p>
          </div>
          <div className="bg-primary border border-gray-400 rounded-lg p-3">
            <p className="text-xs text-gray-600 mb-1">Orders</p>
            <p className="text-lg font-bold text-gray-900">47</p>
          </div>
        </div>
        <div className="h-32 border border-gray-400 rounded-lg flex items-end justify-around p-3">
          {[4.2, 6.0, 8.1, 5.0, 9.0].map((value, i) => (
            <div
              key={i}
              className="bg-primary rounded-t"
              style={{
                width: "16%",
                height: `${(value / 9) * 100}%`,
                transition: "height 0.5s ease-out",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
