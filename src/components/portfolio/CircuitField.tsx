import { useReducedMotion } from "motion/react";

/** Subtle animated engineering-inspired background: nodes + circuit traces. */
export function CircuitField() {
  const reduced = useReducedMotion();
  const nodes = [
    [120, 90],
    [300, 40],
    [430, 160],
    [80, 250],
    [250, 300],
    [470, 320],
    [180, 180],
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="glow-orb absolute -top-24 -left-16 h-[26rem] w-[26rem] rounded-full opacity-70" />
      <div className="glow-orb absolute -right-24 top-40 h-[22rem] w-[22rem] rounded-full opacity-50" />
      <svg
        viewBox="0 0 520 380"
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="var(--brand)" strokeOpacity="0.25" fill="none" strokeWidth="1">
          <path d="M20 60 H140 V140 H260 V60 H420" />
          <path d="M40 340 H160 V240 H300 V330 H500" />
          <path d="M500 40 H400 V120 H320" />
        </g>
        <g
          stroke="var(--spark)"
          strokeOpacity="0.55"
          fill="none"
          strokeWidth="1.6"
          strokeDasharray="6 22"
          style={reduced ? undefined : { animation: "trace-dash 22s linear infinite" }}
        >
          <path d="M20 60 H140 V140 H260 V60 H420" />
          <path d="M40 340 H160 V240 H300 V330 H500" />
        </g>
        {nodes.map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="16" fill="var(--brand)" fillOpacity="0.06" />
            <circle cx={cx} cy={cy} r="3.2" fill="var(--brand)" fillOpacity="0.6" />
          </g>
        ))}
      </svg>
      <div className="absolute right-[12%] top-[22%] h-16 w-16 rounded-2xl border border-line bg-surface/70 animate-float-slow" />
      <div
        className="absolute left-[6%] bottom-[16%] h-10 w-10 rotate-12 rounded-xl border border-line bg-surface/70 animate-float-slow"
        style={{ animationDelay: "1.4s" }}
      />
    </div>
  );
}