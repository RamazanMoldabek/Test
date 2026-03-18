import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { path: "/home", icon: "🏠", label: "Home" },
  { path: "/stats", icon: "📊", label: "Stats" },
  { path: "/teams", icon: "👥", label: "Teams" },
  { path: "/settings", icon: "⚙️", label: "Settings" },
];

export default function BottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm bg-slate-900 border-t border-slate-800 px-6 py-3 z-50">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-all duration-200 ${isActive ? "text-orange-500" : "text-slate-500 hover:text-slate-300"}`}
            >
              <span className={`text-xl transition-transform duration-200 ${isActive ? "scale-110" : ""}`}>{item.icon}</span>
              <span className={`text-xs font-medium ${isActive ? "text-orange-500" : ""}`}>{item.label}</span>
              {isActive && <span className="w-1 h-1 rounded-full bg-orange-500 mt-0.5"></span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
