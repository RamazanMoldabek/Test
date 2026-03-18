import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameCard from "../components/GameCard";
import BottomNavigation from "../components/BottomNavigation";

const today = new Date();
const days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date(today);
  d.setDate(today.getDate() - 3 + i);
  return {
    day: d.toLocaleDateString("en", { weekday: "short" }).slice(0, 2),
    date: d.getDate(),
    active: i === 3,
  };
});

const leagues = ["All", "NBA", "EuroLeague", "G-League"];

const games = [
  {
    id: "lakers-celtics",
    homeTeam: { name: "Lakers", logo: "🟡" },
    awayTeam: { name: "Celtics", logo: "🍀" },
    homeScore: 68, awayScore: 54,
    homeRecord: "42|38|74", awayRecord: "51|29|80",
    quarter: "Q3 | 8:41", time: "68 : 54", isLive: true,
  },
  {
    id: "warriors-heat",
    homeTeam: { name: "Warriors", logo: "⚡" },
    awayTeam: { name: "Heat", logo: "🔥" },
    homeScore: 91, awayScore: 87,
    homeRecord: "44|38|82", awayRecord: "48|32|80",
    quarter: "Q4 | 2:15", time: "91 : 87", isLive: true,
  },
  {
    id: "bulls-suns",
    homeTeam: { name: "Bulls", logo: "🐂" },
    awayTeam: { name: "Suns", logo: "☀️" },
    homeScore: 44, awayScore: 49,
    homeRecord: "62|38|22", awayRecord: "55|35|90",
    quarter: "Q2 | 5:30", time: "44 : 49", isLive: true,
  },
];

export default function Home() {
  const [activeLeague, setActiveLeague] = useState("All");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 pb-24">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <div className="flex items-center justify-between mb-1">
          <div>
            <h1 className="text-white font-black text-xl">League Center</h1>
            <p className="text-slate-400 text-xs mt-0.5">Live scores & standings</p>
          </div>
          <button className="relative w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
            🔔
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border-2 border-slate-900"></span>
          </button>
        </div>
      </div>

      {/* Date Selector */}
      <div className="px-5 mb-5">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {days.map((d, i) => (
            <button
              key={i}
              className={`flex flex-col items-center min-w-[2.8rem] py-2.5 px-1 rounded-xl transition-all duration-200 ${
                d.active
                  ? "bg-orange-500 text-white shadow-md shadow-orange-500/30"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 border border-slate-700"
              }`}
            >
              <span className="text-xs font-medium">{d.day}</span>
              <span className={`text-sm font-bold mt-0.5 ${d.active ? "text-white" : ""}`}>{d.date}</span>
            </button>
          ))}
        </div>
      </div>

      {/* League Filter */}
      <div className="px-5 mb-5">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {leagues.map((l) => (
            <button
              key={l}
              onClick={() => setActiveLeague(l)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeLeague === l
                  ? "bg-orange-500 text-white"
                  : "bg-slate-800 text-slate-400 border border-slate-700 hover:border-slate-500"
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Live Games */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white font-bold text-sm">Live Games</h2>
          <button className="text-orange-400 text-xs font-medium hover:text-orange-300">See all</button>
        </div>

        {games.map((game) => (
          <div key={game.id} onClick={() => navigate(`/game/${game.id}`)}>
            <GameCard {...game} />
          </div>
        ))}
      </div>

      <BottomNavigation />
    </div>
  );
}
