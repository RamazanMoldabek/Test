import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Game from "./pages/Game";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 flex justify-center">
        <div className="w-full max-w-sm bg-slate-900 relative shadow-2xl shadow-black/50 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/game/:id" element={<Game />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
