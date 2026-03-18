export default function ScoreBoard({ homeTeam, awayTeam, homeScore, awayScore, time, quarter }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 border border-slate-700">
      <div className="flex items-center justify-between mb-1">
        <span className="text-slate-400 text-xs font-medium">{quarter}</span>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-red-400 text-xs font-bold tracking-wider uppercase">Live Match</span>
        </div>
        <span className="text-slate-400 text-xs font-medium">{time}</span>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-2xl border-2 border-slate-600">
            {homeTeam.logo}
          </div>
          <p className="text-white font-bold text-sm">{homeTeam.name}</p>
        </div>

        <div className="text-center">
          <p className="text-white font-black text-5xl tracking-tight">
            {homeScore}
            <span className="text-slate-600 mx-2">:</span>
            {awayScore}
          </p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-2xl border-2 border-slate-600">
            {awayTeam.logo}
          </div>
          <p className="text-white font-bold text-sm">{awayTeam.name}</p>
        </div>
      </div>
    </div>
  );
}
