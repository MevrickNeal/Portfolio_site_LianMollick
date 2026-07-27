import React, { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw, Activity, Cpu } from "lucide-react";

export default function InteractiveTVCSimulator() {
  const [kp, setKp] = useState(2.8);
  const [ki, setKi] = useState(0.45);
  const [kd, setKd] = useState(1.1);
  const [targetAngle, setTargetAngle] = useState(12);
  const [isRunning, setIsRunning] = useState(true);
  
  const [currentAngle, setCurrentAngle] = useState(0);
  const [nozzleDeflection, setNozzleDeflection] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  
  const requestRef = useRef<number>();
  const stateRef = useRef({
    angle: 0,
    velocity: 0,
    integral: 0,
    prevError: 0,
    history: [] as number[]
  });

  useEffect(() => {
    let lastTime = performance.now();

    const updateSimulation = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.05);
      lastTime = time;

      if (isRunning) {
        const error = targetAngle - stateRef.current.angle;
        stateRef.current.integral += error * dt;
        stateRef.current.integral = Math.max(-10, Math.min(10, stateRef.current.integral));

        const derivative = (error - stateRef.current.prevError) / (dt || 0.01);
        stateRef.current.prevError = error;

        let u = kp * error + ki * stateRef.current.integral + kd * derivative;
        u = Math.max(-15, Math.min(15, u));

        const angularAccel = u * 2.5 - stateRef.current.velocity * 0.4;
        stateRef.current.velocity += angularAccel * dt;
        stateRef.current.angle += stateRef.current.velocity * dt;

        setNozzleDeflection(u);
        setCurrentAngle(stateRef.current.angle);

        stateRef.current.history.push(stateRef.current.angle);
        if (stateRef.current.history.length > 80) {
          stateRef.current.history.shift();
        }
        setHistory([...stateRef.current.history]);
      }

      requestRef.current = requestAnimationFrame(updateSimulation);
    };

    requestRef.current = requestAnimationFrame(updateSimulation);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [kp, ki, kd, targetAngle, isRunning]);

  const handleReset = () => {
    stateRef.current = { angle: 0, velocity: 0, integral: 0, prevError: 0, history: [] };
    setCurrentAngle(0);
    setNozzleDeflection(0);
    setHistory([]);
  };

  return (
    <div className="glass-panel p-6 md:p-8 bg-white/85 border border-slate-200/80 shadow-2xl relative overflow-hidden">
      <div className="absolute -right-20 -top-20 w-60 h-60 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-200/80">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
              Interactive Digital Twin Simulator
            </span>
          </div>
          <h3 className="text-2xl font-black text-slate-900 flex items-center gap-2">
            <Cpu className="w-6 h-6 text-amber-600" />
            Thrust Vector Control (TVC) PID Flight Controller
          </h3>
          <p className="text-sm text-slate-600 mt-0.5">
            Based on Lian's B.Sc. EEE Thesis: <em>"Design, Simulation & Implementation of TVC & Telemetry System using PID"</em>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${
              isRunning 
                ? "bg-slate-900 text-white hover:bg-slate-800" 
                : "bg-amber-600 text-white hover:bg-amber-700"
            }`}
          >
            {isRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isRunning ? "Pause Simulation" : "Resume"}
          </button>

          <button
            onClick={handleReset}
            className="px-3 py-2 rounded-xl text-xs font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300/60 flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 bg-slate-950/90 rounded-2xl p-6 relative flex flex-col items-center justify-center min-h-[320px] shadow-inner overflow-hidden text-white border border-slate-800">
          <div className="absolute top-3 left-4 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            SIMULINK_REALTIME_GIMBAL_FEED
          </div>

          <div className="absolute top-3 right-4 text-right">
            <span className="text-[10px] font-mono text-slate-400 block">SETPOINT vs ACTUAL</span>
            <span className="text-xs font-mono text-amber-400 font-bold">
              {targetAngle}° / {currentAngle.toFixed(1)}°
            </span>
          </div>

          <div 
            className="relative transition-transform duration-75 flex flex-col items-center my-8"
            style={{ transform: `rotate(${currentAngle}deg)` }}
          >
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[28px] border-b-amber-600" />
            <div className="w-7 h-28 bg-gradient-to-b from-slate-200 to-slate-400 border border-slate-300 rounded-sm flex items-center justify-center text-[9px] font-bold text-slate-800 font-mono tracking-tighter">
              NEAL-1.2
            </div>
            <div className="relative w-12 h-4 -mt-2">
              <div className="absolute left-0 top-0 w-3 h-4 bg-slate-600 rounded-bl-lg" />
              <div className="absolute right-0 top-0 w-3 h-4 bg-slate-600 rounded-br-lg" />
            </div>

            <div 
              className="relative w-4 h-6 bg-slate-700 border border-slate-500 rounded-b-md transition-transform duration-75 origin-top mt-0.5"
              style={{ transform: `rotate(${nozzleDeflection}deg)` }}
            >
              {isRunning && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-3 h-10 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent blur-[1px] animate-pulse rounded-b-full" />
              )}
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-slate-800 text-center font-mono text-[11px]">
            <div>
              <span className="text-slate-400 block text-[9px]">GIMBAL NOZZLE</span>
              <span className={nozzleDeflection >= 0 ? "text-emerald-400" : "text-amber-400"}>
                {nozzleDeflection.toFixed(1)}°
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px]">ATTITUDE ANGLE</span>
              <span className="text-sky-400">{currentAngle.toFixed(1)}°</span>
            </div>
            <div>
              <span className="text-slate-400 block text-[9px]">SYSTEM ERROR</span>
              <span className="text-orange-400">{(targetAngle - currentAngle).toFixed(1)}°</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6">
          <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 shadow-md">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
              <span className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-amber-500" />
                ORIENTATION RESPONSE CURVE (deg vs time)
              </span>
              <span className="text-[10px] text-amber-400">Target Line: {targetAngle}°</span>
            </div>

            <div className="h-32 w-full bg-slate-950 rounded-xl relative p-2 overflow-hidden border border-slate-800 flex items-end">
              <div 
                className="absolute left-0 right-0 border-b border-dashed border-amber-500/60 z-10"
                style={{ bottom: `${Math.min(90, Math.max(10, (targetAngle / 30) * 100))}%` }}
              />

              <svg className="w-full h-full overflow-visible">
                <polyline
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points={history.map((val, idx) => {
                    const x = (idx / (history.length || 1)) * 300;
                    const y = 120 - Math.min(110, Math.max(10, (val / 30) * 100));
                    return `${x},${y}`;
                  }).join(" ")}
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                <span className="text-amber-700 font-mono">Kp (Proportional Gain)</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border text-slate-700">{kp}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="8.0"
                step="0.1"
                value={kp}
                onChange={(e) => setKp(parseFloat(e.target.value))}
                className="w-full accent-amber-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                <span className="text-sky-700 font-mono">Ki (Integral Gain)</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border text-slate-700">{ki}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="3.0"
                step="0.05"
                value={ki}
                onChange={(e) => setKi(parseFloat(e.target.value))}
                className="w-full accent-sky-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                <span className="text-emerald-700 font-mono">Kd (Derivative Gain)</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border text-slate-700">{kd}</span>
              </div>
              <input
                type="range"
                min="0.0"
                max="4.0"
                step="0.1"
                value={kd}
                onChange={(e) => setKd(parseFloat(e.target.value))}
                className="w-full accent-emerald-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <div className="flex justify-between items-center text-xs font-bold text-slate-800 mb-1.5">
                <span className="text-purple-700 font-mono">Target Setpoint Angle</span>
                <span className="font-mono bg-white px-2 py-0.5 rounded border text-slate-700">{targetAngle}°</span>
              </div>
              <input
                type="range"
                min="-20"
                max="20"
                step="1"
                value={targetAngle}
                onChange={(e) => setTargetAngle(parseInt(e.target.value))}
                className="w-full accent-purple-600 h-1.5 bg-slate-200 rounded-lg cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
