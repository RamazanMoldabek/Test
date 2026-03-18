import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Hero */}
      <div className="relative h-52 overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/70 to-slate-900 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400')" }}
        ></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-2xl mb-2 shadow-lg shadow-orange-500/40">
            🏀
          </div>
          <h1 className="text-white font-black text-2xl tracking-tight">HoopManager</h1>
          <p className="text-slate-300 text-xs mt-0.5">Manage your basketball tournaments with ease</p>
        </div>
        <div className="absolute top-3 right-4 z-30 bg-slate-800/80 rounded-full px-2 py-1 text-xs text-slate-300">RU 🌐</div>
      </div>

      <div className="flex-1 px-6 pt-8 pb-8">
        <Input
          label="Email Address"
          type="email"
          placeholder="coach@tournament.com"
          icon="✉️"
          value={form.email}
          onChange={update("email")}
        />
        <div className="relative">
          <Input
            label="Password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            icon="🔒"
            value={form.password}
            onChange={update("password")}
            rightElement={
              <button onClick={() => setShowPassword(!showPassword)} className="text-slate-500 hover:text-slate-300 text-sm">
                {showPassword ? "👁️" : "🙈"}
              </button>
            }
          />
          <button className="absolute top-0 right-0 text-xs text-orange-400 font-medium hover:text-orange-300">
            Forgot password?
          </button>
        </div>

        <div className="mt-2 mb-6">
          <Button variant="primary" onClick={() => navigate("/home")}>
            🏀 Login to Court
          </Button>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-slate-700"></div>
          <span className="text-slate-500 text-xs font-medium">OR CONTINUE WITH</span>
          <div className="flex-1 h-px bg-slate-700"></div>
        </div>

        <div className="flex gap-3 mb-8">
          <Button variant="google" className="flex-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </Button>
          <Button variant="apple" className="flex-1">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="white">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Apple
          </Button>
        </div>

        <p className="text-center text-slate-500 text-sm">
          New to the league?{" "}
          <span className="text-orange-400 font-semibold cursor-pointer" onClick={() => navigate("/")}>
            Register Now
          </span>
        </p>
      </div>
    </div>
  );
}
