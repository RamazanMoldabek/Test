export default function GameCard({ homeTeam, awayTeam, homeScore, awayScore, homeRecord, awayRecord, quarter, time, isLive = true }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-4 mb-3 border border-slate-700 hover:border-orange-500/40 transition-all duration-200 cursor-pointer">
      {isLive && (
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span className="text-red-500 text-xs font-bold tracking-widest uppercase">Live</span>
          {quarter && <span className="text-slate-500 text-xs ml-1">{quarter}</span>}
        </div>
      )}

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg">
            {homeTeam.logo}
          </div>
          <div>
            <p className="text-white font-bold text-sm">{homeTeam.name}</p>
            {homeRecord && <p className="text-slate-500 text-xs">{homeRecord}</p>}
          </div>
        </div>

        <div className="text-center px-4">
          <p className="text-white font-extrabold text-2xl tracking-tight">
            {homeScore} <span className="text-slate-600">:</span> {awayScore}
          </p>
          {time && <p className="text-slate-500 text-xs mt-0.5">{time}</p>}
        </div>

        <div className="flex items-center gap-3 flex-1 justify-end">
          <div className="text-right">
            <p className="text-white font-bold text-sm">{awayTeam.name}</p>
            {awayRecord && <p className="text-slate-500 text-xs">{awayRecord}</p>}
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-lg">
            {awayTeam.logo}
          </div>
        </div>
      </div>
    </div>
  );
}
