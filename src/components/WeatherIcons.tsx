import { cn } from "@/lib/utils";

interface WeatherIconProps {
  className?: string;
}

export const SunIcon = ({ className }: WeatherIconProps) => (
  <div className={cn("relative", className)}>
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full animate-[spin_20s_linear_infinite]"
    >
      {/* Sun rays */}
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="50"
          y1="10"
          x2="50"
          y2="20"
          stroke="hsl(35 80% 55%)"
          strokeWidth="4"
          strokeLinecap="round"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      {/* Sun body */}
      <circle
        cx="50"
        cy="50"
        r="22"
        className="fill-earth-sunset"
        filter="url(#sunGlow)"
      />
      <defs>
        <filter id="sunGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
    </svg>
  </div>
);

export const RainDropIcon = ({ className }: WeatherIconProps) => (
  <div className={cn("relative", className)}>
    <svg viewBox="0 0 50 70" className="w-full h-full">
      <defs>
        <linearGradient id="dropGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(200 75% 65%)" />
          <stop offset="100%" stopColor="hsl(200 75% 45%)" />
        </linearGradient>
      </defs>
      <path
        d="M25 5 C25 5, 45 35, 45 50 C45 61, 36 70, 25 70 C14 70, 5 61, 5 50 C5 35, 25 5, 25 5 Z"
        fill="url(#dropGradient)"
        className="drop-shadow-md"
      />
      <ellipse
        cx="18"
        cy="45"
        rx="5"
        ry="8"
        fill="hsl(200 80% 80%)"
        opacity="0.6"
      />
    </svg>
  </div>
);

export const LeafIcon = ({ className }: WeatherIconProps) => (
  <div className={cn("relative", className)}>
    <svg viewBox="0 0 60 80" className="w-full h-full">
      <defs>
        <linearGradient id="leafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(142 50% 50%)" />
          <stop offset="100%" stopColor="hsl(142 40% 35%)" />
        </linearGradient>
      </defs>
      <path
        d="M30 5 C50 20, 55 45, 45 65 C40 75, 30 78, 30 78 C30 78, 20 75, 15 65 C5 45, 10 20, 30 5 Z"
        fill="url(#leafGradient)"
        className="drop-shadow-md"
      />
      <path
        d="M30 15 C30 15, 30 70, 30 70"
        stroke="hsl(142 35% 30%)"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M30 30 C35 28, 40 32, 43 38"
        stroke="hsl(142 35% 30%)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M30 45 C25 43, 20 47, 17 53"
        stroke="hsl(142 35% 30%)"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  </div>
);

export const ThermometerIcon = ({ className }: WeatherIconProps) => (
  <div className={cn("relative", className)}>
    <svg viewBox="0 0 40 100" className="w-full h-full">
      <defs>
        <linearGradient id="tempGradient" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="hsl(0 70% 55%)" />
          <stop offset="50%" stopColor="hsl(35 80% 55%)" />
          <stop offset="100%" stopColor="hsl(200 70% 55%)" />
        </linearGradient>
      </defs>
      {/* Thermometer body */}
      <rect
        x="14"
        y="10"
        width="12"
        height="60"
        rx="6"
        fill="hsl(0 0% 95%)"
        stroke="hsl(0 0% 80%)"
        strokeWidth="2"
      />
      {/* Thermometer bulb */}
      <circle
        cx="20"
        cy="80"
        r="15"
        fill="hsl(0 0% 95%)"
        stroke="hsl(0 0% 80%)"
        strokeWidth="2"
      />
      {/* Mercury */}
      <rect
        x="17"
        y="25"
        width="6"
        height="45"
        fill="url(#tempGradient)"
        rx="3"
      />
      <circle cx="20" cy="80" r="10" fill="hsl(0 70% 55%)" />
    </svg>
  </div>
);

const WeatherIcons = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <SunIcon className="absolute top-16 right-20 w-20 h-20 animate-float opacity-80" />
      <RainDropIcon className="absolute top-32 left-16 w-10 h-14 animate-bounce-soft delay-300 opacity-70" />
      <RainDropIcon className="absolute top-48 left-28 w-8 h-11 animate-bounce-soft delay-500 opacity-60" />
      <LeafIcon className="absolute bottom-40 right-32 w-12 h-16 animate-wiggle opacity-70" />
      <LeafIcon className="absolute top-60 left-10 w-10 h-14 animate-wiggle delay-700 opacity-60" />
    </div>
  );
};

export default WeatherIcons;
