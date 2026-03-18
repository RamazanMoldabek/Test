import { useNavigate } from "react-router-dom";
import ScoreBoard from "../components/ScoreBoard";
import BottomNavigation from "../components/BottomNavigation";

const tabs = ["Game", "Stats", "Moments", "Info"];

const players = {
  home: [
    { pos: "PG", x: "22%", y: "68%" },
    { pos: "SG", x: "72%", y: "68%" },
    { pos: "SF", x: "12%", y: "45%" },
    { pos: "PF", x: "80%", y: "45%" },
    { pos: "C",  x: "47%", y: "30%" },
  ],
  away: [
    { pos: "PG", x: "22%", y: "32%" },
    { pos: "SG", x: "72%", y: "32%" },
    { pos: "SF", x: "12%", y: "52%" },
    { pos: "PF", x: "80%", y: "52%" },
    { pos: "C",  x: "47%", y: "68%" },
  ],
};

export default function Game() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 pb-24">
      {/* Back button */}
      <div className="px-5 pt-5 pb-2 flex items-center gap-3">
        <button
          onClick={() => navigate("/home")}
          className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-white text-sm hover:bg-slate-700"
        >
          ←
        </button>
        <h1 className="text-white font-bold text-base">Live Match</h1>
      </div>

      {/* Scoreboard */}
      <div className="px-5 mb-4">
        <ScoreBoard
          homeTeam={{ name: "LA Lakers", logo: "🟡" }}
          awayTeam={{ name: "Celtics", logo: "🍀" }}
          homeScore={68}
          awayScore={54}
          quarter="Q3"
          time="08:41"
        />
      </div>

      {/* Tabs */}
      <div className="px-5 mb-4">
        <div className="flex bg-slate-800 rounded-xl p-1 gap-1">
          {tabs.map((tab, i) => (
            <button
              key={tab}
              className={`flex-1 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                i === 0 ? "bg-orange-500 text-white shadow-md shadow-orange-500/30" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Basketball Court */}
      <div className="px-5">
        <div className="relative bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden" style={{ height: "320px" }}>
          {/* Court SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 375 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Court outline */}
            <rect x="20" y="20" width="335" height="280" rx="8" stroke="#64748b" strokeWidth="1.5" fill="none" />
            {/* Half court line */}
            <line x1="20" y1="160" x2="355" y2="160" stroke="#64748b" strokeWidth="1.5" />
            {/* Center circle */}
            <circle cx="187" cy="160" r="35" stroke="#64748b" strokeWidth="1.5" fill="none" />
            {/* Top key */}
            <rect x="112" y="20" width="150" height="90" stroke="#64748b" strokeWidth="1.5" fill="none" />
            {/* Top hoop */}
            <circle cx="187" cy="48" r="10" stroke="#FF6A00" strokeWidth="2" fill="none" />
            <rect x="170" y="44" width="35" height="4" rx="2" fill="#64748b" />
            {/* Bottom key */}
            <rect x="112" y="210" width="150" height="90" stroke="#64748b" strokeWidth="1.5" fill="none" />
            {/* Bottom hoop */}
            <circle cx="187" cy="272" r="10" stroke="#FF6A00" strokeWidth="2" fill="none" />
            <rect x="170" y="272" width="35" height="4" rx="2" fill="#64748b" />
            {/* 3-point arcs */}
            <path d="M 60 20 Q 60 140 187 140 Q 315 140 315 20" stroke="#64748b" strokeWidth="1.5" fill="none" />
            <path d="M 60 300 Q 60 180 187 180 Q 315 180 315 300" stroke="#64748b" strokeWidth="1.5" fill="none" />
          </svg>

          {/* Home players (orange) */}
          {players.home.map((p, i) => (
            <div
              key={`home-${i}`}
              className="absolute flex flex-col items-center"
              style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-8 h-8 rounded-full bg-orange-500 border-2 border-orange-400 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-orange-500/40">
                {p.pos}
              </div>
            </div>
          ))}

          {/* Away players (blue) */}
          {players.away.map((p, i) => (
            <div
              key={`away-${i}`}
              className="absolute flex flex-col items-center"
              style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
            >
              <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-blue-400 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/40">
                {p.pos}
              </div>
            </div>
          ))}

          {/* Legend */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-4">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              <span className="text-slate-400 text-xs">Lakers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-blue-600"></div>
              <span className="text-slate-400 text-xs">Celtics</span>
            </div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
