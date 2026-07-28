import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Activity, Cpu, Info, TrendingUp, Radio } from "lucide-react";
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
      <div className="bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs font-mono shadow-2xl text-white">
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

        const nozzle = Math.max(-15, Math.min(15, kp * error + ki * s.integral + kd * derivative));
        const torque = nozzle * 4.5 - s.velocity * 0.8 - s.angle * 0.2;
        const accel = torque / 1.2;

        s.velocity += accel * dt;
        s.angle += s.velocity * dt;
        s.t += 1;

        setCurrentAngle(s.angle);
        setNozzleDeflection(nozzle);

        if (s.t % 2 === 0) {
          setChartData((prev) => {
            const next = [
              ...prev,
              {
                t: s.t,
                angle: parseFloat(s.angle.toFixed(2)),
                target: targetAngle,
                error: parseFloat(error.toFixed(2)),
                nozzle: parseFloat(nozzle.toFixed(2)),
              },
            ];
            return next.slice(-60);
          });
        }

        setTick((t) => t + 1);
      }

      requestRef.current = requestAnimationFrame(update);
    };

    requestRef.current = requestAnimationFrame(update);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isRunning, kp, ki, kd, targetAngle]);

  const handleReset = () => {
    stateRef.current = { angle: 0, velocity: 0, integral: 0, prevError: 0, t: 0 };
    setCurrentAngle(0);
    setNozzleDeflection(0);
    setChartData([]);
  };

  const isStable = Math.abs(currentAngle - targetAngle) < 1.5;

  return (
    <div className="aero-card border-orange-200">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="live-dot" />
            <span className="text-xs font-mono font-extrabold text-orange-600 uppercase tracking-widest">
              HARDWARE-IN-THE-LOOP SIMULATOR
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 mt-1">
            Project NEAL-1.2 TVC Flight Control Twin
          </h3>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs font-bold transition-all ${
              isRunning
                ? "bg-amber-100 text-amber-800 border border-amber-300"
                : "bg-orange-600 text-white shadow-md shadow-orange-500/20"
            }`}
          >
            {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            {isRunning ? "PAUSE" : "RUN SIM"}
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1.5 px-3 py-2 rounded-full font-mono text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200 transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            RESET
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left: Rocket & Gimbal Telemetry HUD */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          
          {/* Animated Rocket Telemetry Box */}
          <div className="bg-slate-950 rounded-2xl p-6 border border-slate-800 text-white relative overflow-hidden shadow-xl min-h-[300px] flex flex-col justify-between">
            
            {/* HUD Status Header */}
            <div className="flex items-center justify-between text-xs font-mono border-b border-slate-800 pb-3">
              <span className="text-slate-400">TELEMETRY_LINK // ACTIVE</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                isStable ? "bg-emerald-950 text-emerald-400 border border-emerald-500/40" : "bg-orange-950 text-orange-400 border border-orange-500/40 animate-pulse"
              }`}>
                {isStable ? "STABLE" : "CONTROLLING"}
              </span>
            </div>

            {/* SVG Rocket Vehicle with live pitch & nozzle rotation */}
            <div className="my-6 flex items-center justify-center relative h-48">
              
              {/* Setpoint Reference Line */}
              <div
                className="absolute w-44 h-0.5 border-t-2 border-dashed border-orange-500/60 pointer-events-none transition-transform duration-200"
                style={{ transform: `rotate(${-targetAngle}deg)` }}
              />

              {/* Rocket Body SVG */}
              <div
                className="relative transition-transform duration-100 ease-out origin-bottom"
                style={{ transform: `rotate(${-currentAngle}deg)` }}
              >
                {/* Rocket Structure */}
                <div className="relative w-10 h-36 flex flex-col items-center">
                  {/* Nosecone */}
                  <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[36px] border-b-orange-600" />
                  {/* Body Tube */}
                  <div className="w-10 h-24 bg-gradient-to-b from-slate-200 to-slate-400 border-x border-slate-400 relative">
                    <div className="absolute inset-x-0 top-3 text-[7px] font-mono text-center font-bold text-slate-800">NEAL</div>
                    <div className="absolute bottom-2 inset-x-0 h-1 bg-red-600" />
                  </div>
                  {/* Fins */}
                  <div className="absolute bottom-4 -left-4 w-4 h-8 bg-slate-900 border-l border-orange-500 clip-fin-left" />
                  <div className="absolute bottom-4 -right-4 w-4 h-8 bg-slate-900 border-r border-orange-500 clip-fin-right" />
                  {/* TVC Gimbal Nozzle */}
                  <div
                    className="w-4 h-6 bg-orange-600 rounded-b-md transition-transform duration-75 origin-top mt-0.5 shadow-lg shadow-orange-500/50"
                    style={{ transform: `rotate(${nozzleDeflection * 1.2}deg)` }}
                  />
                </div>
              </div>
            </div>

            {/* Live Readout Values */}
            <div className="grid grid-cols-3 gap-2 font-mono text-center border-t border-slate-800 pt-3">
              <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                <div className="text-[9px] text-slate-400 uppercase">Pitch θ</div>
                <div className="text-sm font-bold text-white">{currentAngle.toFixed(1)}°</div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                <div className="text-[9px] text-slate-400 uppercase">Target θ</div>
                <div className="text-sm font-bold text-orange-400">{targetAngle.toFixed(1)}°</div>
              </div>
              <div className="bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                <div className="text-[9px] text-slate-400 uppercase">Nozzle δ</div>
                <div className="text-sm font-bold text-red-400">{nozzleDeflection.toFixed(1)}°</div>
              </div>
            </div>

          </div>

          <div className="text-xs text-slate-500 font-mono bg-slate-50 border border-slate-200 p-3 rounded-xl">
            <span className="font-bold text-slate-800">Thesis Citation:</span> Model parameters tuned to OpenRocket mass decay curve ($M_0 = 1.42\text{kg}$, $I_{yy} = 0.048\text{kg}\cdot\text{m}^2$) for Project NEAL-1.2.
          </div>
        </div>

        {/* Right: Charts & Sliders */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Tab Selection */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab("response")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeTab === "response"
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Orientation Response
              </button>
              <button
                onClick={() => setActiveTab("error")}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  activeTab === "error"
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                Error & Gimbal Output
              </button>
            </div>
            <span className="text-[10px] font-mono text-slate-400">DATA_RATE: 20Hz</span>
          </div>

          {/* Recharts Area / Line Plots */}
          <div className="bg-slate-950 rounded-2xl p-4 border border-slate-800 shadow-xl">
            {activeTab === "response" ? (
              <ResponsiveContainer width="100%" height={230}>
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorAngle" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#FF4500" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#FF4500" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="t" tick={{ fontSize: 10, fill: '#64748B' }} tickFormatter={(v) => `${(v / 10).toFixed(0)}s`} />
                  <YAxis domain={[-5, 25]} tick={{ fontSize: 10, fill: '#64748B' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine y={targetAngle} stroke="#FF4500" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: 'Setpoint', fill: '#FF4500', fontSize: 10 }} />
                  <Area type="monotone" dataKey="angle" stroke="#FF4500" strokeWidth={2.5} fillOpacity={1} fill="url(#colorAngle)" name="Pitch θ" isAnimationActive={false} />
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <ResponsiveContainer width="100%" height={230}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="t" tick={{ fontSize: 10, fill: '#64748B' }} tickFormatter={(v) => `${(v / 10).toFixed(0)}s`} />
                  <YAxis tick={{ fontSize: 10, fill: '#64748B' }} />
                  <Tooltip content={<CustomTooltip />} />
                  <ReferenceLine y={0} stroke="rgba(255,255,255,0.1)" strokeWidth={1} />
                  <Line type="monotone" dataKey="error" stroke="#E63946" strokeWidth={2} name="Error" dot={false} isAnimationActive={false} />
                  <Line type="monotone" dataKey="nozzle" stroke="#FF5500" strokeWidth={2} name="Nozzle δ" dot={false} isAnimationActive={false} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>

          {/* PID Sliders */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { key: 'kp', label: 'Kp', subtitle: 'Proportional', color: 'text-orange-600', val: kp, set: setKp, min: 0.1, max: 8, step: 0.1 },
              { key: 'ki', label: 'Ki', subtitle: 'Integral', color: 'text-red-600', val: ki, set: setKi, min: 0, max: 3, step: 0.05 },
              { key: 'kd', label: 'Kd', subtitle: 'Derivative', color: 'text-slate-900', val: kd, set: setKd, min: 0, max: 4, step: 0.1 },
              { key: 'sp', label: 'θ_sp', subtitle: 'Setpoint °', color: 'text-orange-600', val: targetAngle, set: setTargetAngle, min: -20, max: 20, step: 1 },
            ].map((s) => (
              <div key={s.key} className="bg-white border border-slate-200/90 rounded-xl p-3 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className={`text-xs font-mono font-extrabold ${s.color}`}>{s.label}</span>
                    <div className="text-[9px] font-mono text-slate-500 uppercase">{s.subtitle}</div>
                  </div>
                  <span className="font-mono text-xs bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-md text-slate-900 font-bold">
                    {s.val}
                  </span>
                </div>
                <input
                  type="range"
                  min={s.min} max={s.max} step={s.step} value={s.val}
                  onChange={(e) => s.set(parseFloat(e.target.value))}
                  className="w-full h-1.5 rounded-lg bg-slate-200 accent-orange-600 cursor-pointer"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
