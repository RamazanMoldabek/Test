export default function Button({ children, variant = "primary", className = "", onClick, type = "button", disabled = false }) {
  const base = "w-full py-4 rounded-xl font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 active:scale-95";

  const variants = {
    primary: "bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/30",
    secondary: "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600",
    outline: "bg-transparent border border-slate-600 hover:border-orange-500 text-white",
    google: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600",
    apple: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-600",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      {children}
    </button>
  );
}
