import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Activity, Cpu, Info, TrendingUp } from "lucide-react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend, AreaChart, Area
} from "recharts";

interface SimPoint {
  t: number;
  angle: number;
  target: number;
  error: number;
  nozzle: number;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-slate-900/95 border border-slate-700 rounded-xl p-3 text-xs font-mono shadow-2xl">
        <p className="text-slate-400 mb-1">t = {(label / 10).toFixed(1)}s</p>
        {payload.map((p: any) => (
          <div key={p.dataKey} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
            <span className="text-slate-300">{p.name}:</span>
            <span className="text-white font-bold">{p.value?.toFixed(2)}°</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function InteractiveTVCSimulator() {
  const [kp, setKp] = useState(2.8);
  const [ki, setKi] = useState(0.45);
  const [kd, setKd] = useState(1.1);
  const [targetAngle, setTargetAngle] = useState(12);
  const [isRunning, setIsRunning] = useState(true);
  const [activeTab, setActiveTab] = useState<"response" | "error">("response");

  const [currentAngle, setCurrentAngle] = useState(0);
  const [nozzleDeflection, setNozzleDeflection] = useState(0);
  const [chartData, setChartData] = useState<SimPoint[]>([]);
  const [tick, setTick] = useState(0);

  const requestRef = useRef<number>();
  const stateRef = useRef({ angle: 0, velocity: 0, integral: 0, prevError: 0, t: 0 });

  useEffect(() => {
    let lastTime = performance.now();

    const update = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (isRunning) {
        const s = stateRef.current;
        const error = targetAngle - s.angle;
        s.integral = Math.max(-10, Math.min(10, s.integral + error * dt));
        const derivative = (error - s.prevError) / (dt || 0.01);
        s.prevError = error;

        let u = kp * error + ki * s.integral + kd * derivative;
        u = Math.max(-15, Math.min(15, u));

        const accel = u * 2.5 - s.velocity * 0.4;
        s.velocity += accel * dt;
        s.angle += s.velocity * dt;
        s.t += dt;

        setNozzleDeflection(u);
        setCurrentAngle(s.angle);

        setChartData(prev => {
          const newPoint: SimPoint = {
            t: Math.round(s.t * 10),
            angle: parseFloat(s.angle.toFixed(2)),
            target: targetAngle,
            error: parseFloat((targetAngle - s.angle).toFixed(2)),
            nozzle: parseFloat(u.toFixed(2)),
          };
          const updated = [...prev, newPoint];
          return updated.length > 120 ? updated.slice(updated.length - 120) : updated;
        });
      }

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);
    return () => { if (requestRef.current) cancelAnimationFrame(requestRef.current); };
  }, [kp, ki, kd, targetAngle, isRunning]);

  const handleReset = () => {
    stateRef.current = { angle: 0, velocity: 0, integral: 0, prevError: 0, t: 0 };
    setCurrentAngle(0);
    setNozzleDeflection(0);
    setChartData([]);
  };

  const steadyStateError = Math.abs(targetAngle - currentAngle).toFixed(2);
  const isSettled = Math.abs(targetAngle - currentAngle) < 0.5;

  return (
    <div id="tvc-simulator" className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center">
            <Cpu className="w-5 h-5 text-amber-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="live-dot" />
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">LIVE SIMULATION</span>
            </div>
            <h3 className="text-white font-black text-lg leading-tight">
              TVC PID Flight Controller — Digital Twin
            </h3>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              isRunning
                ? "bg-red-500/20 border border-red-500/40 text-red-300 hover:bg-red-500/30"
                : "bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/30"
            }`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isRunning ? "Pause" : "Resume"}
          </button>
          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-white/10 border border-white/20 text-slate-300 hover:bg-white/20 flex items-center gap-1.5 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Thesis reference */}
        <div className="mb-5 p-3 bg-amber-50 border border-amber-200/80 rounded-xl flex items-start gap-2.5">
          <Info className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-amber-800">
            <strong>B.Sc. EEE Thesis:</strong> "Design, Simulation & Implementation of Thrust Vector Control & Telemetry System for a Small-Scale Rocket using PID" — <em>Lian Mollick Nehal, Mymensingh Engineering College (University of Dhaka)</em>
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          {/* 3D Gimbal Rocket Visual */}
          <div className="xl:col-span-4">
            <div className="bg-slate-950 rounded-2xl p-5 flex flex-col items-center justify-between min-h-[340px] border border-slate-800 relative overflow-hidden">
              {/* Grid overlay */}
              <div className="absolute inset-0 opacity-10"
                style={{ backgroundImage: 'linear-gradient(rgba(92,151,171,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(92,151,171,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

              {/* Telemetry readouts */}
              <div className="w-full flex justify-between items-start relative z-10">
                <div className="text-left">
                  <div className="text-[9px] font-mono text-slate-500 uppercase">Setpoint</div>
                  <div className="text-amber-400 font-mono font-bold text-sm">{targetAngle}°</div>
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-1.5 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-[9px] font-mono text-emerald-400 uppercase">SIMULINK FEED</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[9px] font-mono text-slate-500 uppercase">Actual</div>
                  <div className="text-sky-400 font-mono font-bold text-sm">{currentAngle.toFixed(1)}°</div>
                </div>
              </div>

              {/* Rocket SVG animation */}
              <div className="flex-1 flex items-center justify-center relative z-10 my-4">
                <div
                  className="relative transition-transform duration-75"
                  style={{ transform: `rotate(${currentAngle}deg)` }}
                >
                  {/* Rocket body SVG */}
                  <svg width="60" height="160" viewBox="0 0 60 160">
                    {/* Nose cone */}
                    <polygon points="30,2 14,40 46,40" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="1" />
                    {/* Body */}
                    <rect x="14" y="38" width="32" height="80" rx="4" fill="#94A3B8" stroke="#64748B" strokeWidth="1" />
                    {/* NEAL label */}
                    <text x="30" y="84" textAnchor="middle" fontSize="8" fill="#1E293B" fontFamily="monospace" fontWeight="bold">NEAL</text>
                    <text x="30" y="95" textAnchor="middle" fontSize="6" fill="#334155" fontFamily="monospace">1.2</text>
                    {/* Fin left */}
                    <polygon points="14,90 2,128 14,118" fill="#64748B" />
                    {/* Fin right */}
                    <polygon points="46,90 58,128 46,118" fill="#64748B" />
                    {/* Nozzle housing */}
                    <rect x="18" y="118" width="24" height="12" rx="2" fill="#475569" />
                    {/* Nozzle (gimbal) - rotates */}
                    <g transform={`translate(30, 130) rotate(${nozzleDeflection}) translate(-30, -130)`}>
                      <rect x="23" y="130" width="14" height="18" rx="3" fill="#334155" />
                      {/* Exhaust flame */}
                      {isRunning && (
                        <>
                          <ellipse cx="30" cy="154" rx="5" ry="10" fill="rgba(251,191,36,0.8)" />
                          <ellipse cx="30" cy="158" rx="3" ry="7" fill="rgba(251,146,60,0.6)" />
                          <ellipse cx="30" cy="162" rx="1.5" ry="5" fill="rgba(248,250,252,0.4)" />
                        </>
                      )}
                    </g>
                    {/* Port holes */}
                    <circle cx="30" cy="60" r="5" fill="#1E293B" stroke="#475569" strokeWidth="1" />
                    <circle cx="30" cy="60" r="3" fill="#38BDF8" opacity="0.5" />
                  </svg>
                </div>
              </div>

              {/* Bottom telemetry grid */}
              <div className="w-full grid grid-cols-3 gap-2 border-t border-slate-800 pt-3 relative z-10">
                <div className="text-center">
                  <div className="text-[9px] font-mono text-slate-500 uppercase mb-0.5">Nozzle δ</div>
                  <div className={`text-sm font-mono font-bold ${nozzleDeflection >= 0 ? 'text-emerald-400' : 'text-orange-400'}`}>
                    {nozzleDeflection.toFixed(1)}°
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[9px] font-mono text-slate-500 uppercase mb-0.5">Error</div>
                  <div className={`text-sm font-mono font-bold ${isSettled ? 'text-emerald-400' : 'text-red-400'}`}>
                    {steadyStateError}°
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[9px] font-mono text-slate-500 uppercase mb-0.5">Status</div>
                  <div className={`text-xs font-mono font-bold ${isSettled ? 'text-emerald-400' : 'text-yellow-400'}`}>
                    {isSettled ? '✓ STABLE' : '~ CTRL'}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Charts & Controls */}
          <div className="xl:col-span-8 flex flex-col gap-4">
            {/* Chart tab selector */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("response")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === "response" ? "tab-active" : "tab-inactive"}`}
              >
                Orientation Response
              </button>
              <button
                onClick={() => setActiveTab("error")}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${activeTab === "error" ? "tab-active" : "tab-inactive"}`}
              >
                Error & Nozzle Output
              </button>
              <div className="ml-auto flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <TrendingUp className="w-3.5 h-3.5" />
                {chartData.length} samples
              </div>
            </div>

            {/* Response chart */}
            {activeTab === "response" && (
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
                <p className="text-[10px] font-mono text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-sky-400" />
                  Attitude Angle θ vs Time (deg) — PID Setpoint Tracking
                </p>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="angleGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="t" tick={{ fontSize: 10, fill: '#64748b', fontFamily: 'JetBrains Mono' }} tickFormatter={v => `${(v/10).toFixed(0)}s`} />
                    <YAxis tick={{ fontSize: 10, fill: '#64748b', fontFamily: 'JetBrains Mono' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine y={targetAngle} stroke="#fbbf24" strokeDasharray="6 3" strokeWidth={1.5} label={{ value: `Target ${targetAngle}°`, fill: '#fbbf24', fontSize: 10 }} />
                    <Area type="monotone" dataKey="angle" stroke="#38bdf8" strokeWidth={2} fill="url(#angleGrad)" name="Angle θ" dot={false} isAnimationActive={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* Error & Nozzle chart */}
            {activeTab === "error" && (
              <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800">
                <p className="text-[10px] font-mono text-slate-400 mb-3 uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-rose-400" />
                  Control Error & Nozzle Deflection δ vs Time
                </p>
                <ResponsiveContainer width="100%" height={200}>
                  <LineChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.04)" />
                    <XAxis dataKey="t" tick={{ fontSize: 10, fill: '#64748b', fontFamily: 'JetBrains Mono' }} tickFormatter={v => `${(v/10).toFixed(0)}s`} />
                    <YAxis tick={{ fontSize: 10, fill: '#64748b', fontFamily: 'JetBrains Mono' }} />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine y={0} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
                    <Line type="monotone" dataKey="error" stroke="#f87171" strokeWidth={2} name="Error" dot={false} isAnimationActive={false} />
                    <Line type="monotone" dataKey="nozzle" stroke="#a78bfa" strokeWidth={2} name="Nozzle δ" dot={false} isAnimationActive={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            )}

            {/* PID Gain sliders */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { key: 'kp', label: 'Kp', subtitle: 'Proportional', color: 'text-amber-600 accent-amber-500', val: kp, set: setKp, min: 0.1, max: 8, step: 0.1 },
                { key: 'ki', label: 'Ki', subtitle: 'Integral', color: 'text-sky-600 accent-sky-500', val: ki, set: setKi, min: 0, max: 3, step: 0.05 },
                { key: 'kd', label: 'Kd', subtitle: 'Derivative', color: 'text-emerald-600 accent-emerald-500', val: kd, set: setKd, min: 0, max: 4, step: 0.1 },
                { key: 'sp', label: 'θ_sp', subtitle: 'Setpoint °', color: 'text-purple-600 accent-purple-500', val: targetAngle, set: setTargetAngle, min: -20, max: 20, step: 1 },
              ].map(s => (
                <div key={s.key} className="bg-slate-50 border border-slate-200 rounded-xl p-3">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className={`text-xs font-mono font-bold ${s.color.split(' ')[0]}`}>{s.label}</span>
                      <div className="text-[9px] text-slate-500 uppercase tracking-wider">{s.subtitle}</div>
                    </div>
                    <span className="font-mono text-xs bg-white border border-slate-200 px-2 py-0.5 rounded-lg text-slate-700 font-bold">
                      {s.val}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={s.min} max={s.max} step={s.step} value={s.val}
                    onChange={e => s.set(parseFloat(e.target.value) as any)}
                    className={`w-full h-1.5 rounded-lg ${s.color.split(' ')[1]} bg-slate-200 cursor-pointer`}
                  />
                  <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-mono">
                    <span>{s.min}</span><span>{s.max}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
