import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Hero banner */}
      <div className="relative h-48 overflow-hidden rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-600/80 to-slate-900 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400')" }}
        ></div>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center text-2xl mb-2 shadow-lg shadow-orange-500/40">
            🏀
          </div>
          <h1 className="text-white font-black text-2xl tracking-tight">HoopManager</h1>
          <p className="text-slate-300 text-xs mt-0.5">Manage your basketball tournaments</p>
        </div>
        <div className="absolute top-3 right-4 z-30 bg-slate-800/80 rounded-full px-2 py-1 text-xs text-slate-300">RU 🌐</div>
      </div>

      <div className="flex-1 px-6 pt-6 pb-8">
        <div className="mb-5">
          <h2 className="text-white font-bold text-xl">Join the League</h2>
          <p className="text-slate-400 text-sm mt-1">Create your account to get started</p>
        </div>

        <Input label="Full Name" placeholder="Full name" icon="👤" value={form.name} onChange={update("name")} />
        <Input label="Email Address" type="email" placeholder="Email address" icon="✉️" value={form.email} onChange={update("email")} />
        <Input
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          icon="🔒"
          value={form.password}
          onChange={update("password")}
          rightElement={
            <button onClick={() => setShowPassword(!showPassword)} className="text-slate-500 hover:text-slate-300 text-sm">
              {showPassword ? "👁️" : "🙈"}
            </button>
          }
        />
        <Input label="Confirm Password" type="password" placeholder="Confirm password" icon="🔒" value={form.confirm} onChange={update("confirm")} />

        <p className="text-slate-500 text-xs mb-5 leading-relaxed">
          By creating an account you agree to our{" "}
          <span className="text-orange-400 cursor-pointer">Terms of Service</span> and{" "}
          <span className="text-orange-400 cursor-pointer">Privacy Policy</span>
        </p>

        <Button variant="primary" onClick={() => navigate("/home")}>
          Create Account →
        </Button>

        <p className="text-center text-slate-500 text-sm mt-5">
          Already have an account?{" "}
          <span className="text-orange-400 font-semibold cursor-pointer" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
