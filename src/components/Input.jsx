import { useState } from "react";

export default function Input({ label, type = "text", placeholder, icon, value, onChange, rightElement }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="mb-4">
      {label && <label className="block text-xs text-slate-400 mb-1 font-medium">{label}</label>}
      <div className={`flex items-center bg-slate-800 border rounded-xl px-4 py-3 transition-all duration-200 ${focused ? "border-orange-500 shadow-sm shadow-orange-500/20" : "border-slate-700"}`}>
        {icon && <span className="text-slate-400 mr-3 text-lg">{icon}</span>}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="flex-1 bg-transparent text-white text-sm placeholder-slate-500 outline-none"
        />
        {rightElement && <span className="ml-2 text-slate-400">{rightElement}</span>}
      </div>
    </div>
  );
}
