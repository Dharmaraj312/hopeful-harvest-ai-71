import { cn } from "@/lib/utils";

interface MascotProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  expression?: "happy" | "waving" | "thinking";
}

const Mascot = ({ className, size = "md", expression = "happy" }: MascotProps) => {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24",
    lg: "w-40 h-40",
  };

  return (
    <div className={cn("relative", sizeClasses[size], className)}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          {/* Water droplet gradient */}
          <linearGradient id="mascotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(200 80% 65%)" />
            <stop offset="50%" stopColor="hsl(200 75% 55%)" />
            <stop offset="100%" stopColor="hsl(200 70% 45%)" />
          </linearGradient>
          {/* Shine */}
          <radialGradient id="mascotShine" cx="30%" cy="30%" r="50%">
            <stop offset="0%" stopColor="hsl(200 90% 85%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(200 80% 65%)" stopOpacity="0" />
          </radialGradient>
          {/* Shadow */}
          <filter id="mascotShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="hsl(200 70% 30%)" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Body - Water droplet shape */}
        <path
          d="M50 8 C50 8, 85 45, 85 65 C85 82, 69 95, 50 95 C31 95, 15 82, 15 65 C15 45, 50 8, 50 8 Z"
          fill="url(#mascotGradient)"
          filter="url(#mascotShadow)"
          className="drop-shadow-lg"
        />

        {/* Shine overlay */}
        <path
          d="M50 8 C50 8, 85 45, 85 65 C85 82, 69 95, 50 95 C31 95, 15 82, 15 65 C15 45, 50 8, 50 8 Z"
          fill="url(#mascotShine)"
        />

        {/* Left eye */}
        <ellipse cx="38" cy="55" rx="6" ry="7" fill="hsl(25 40% 15%)" />
        <ellipse cx="36" cy="53" rx="2" ry="2.5" fill="white" />

        {/* Right eye */}
        <ellipse cx="62" cy="55" rx="6" ry="7" fill="hsl(25 40% 15%)" />
        <ellipse cx="60" cy="53" rx="2" ry="2.5" fill="white" />

        {/* Rosy cheeks */}
        <ellipse cx="28" cy="65" rx="5" ry="3" fill="hsl(350 60% 75%)" opacity="0.6" />
        <ellipse cx="72" cy="65" rx="5" ry="3" fill="hsl(350 60% 75%)" opacity="0.6" />

        {/* Smile */}
        {expression === "happy" && (
          <path
            d="M38 72 Q50 82 62 72"
            fill="none"
            stroke="hsl(25 40% 15%)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        )}

        {/* Waving arm */}
        {expression === "waving" && (
          <>
            <path
              d="M38 72 Q50 80 62 72"
              fill="none"
              stroke="hsl(25 40% 15%)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <ellipse
              cx="88"
              cy="50"
              rx="8"
              ry="10"
              fill="url(#mascotGradient)"
              className="animate-wave origin-bottom"
              style={{ transformOrigin: "80px 60px" }}
            />
          </>
        )}

        {/* Thinking expression */}
        {expression === "thinking" && (
          <>
            <path
              d="M42 72 L58 72"
              fill="none"
              stroke="hsl(25 40% 15%)"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Thought bubble */}
            <circle cx="80" cy="25" r="4" fill="hsl(0 0% 95%)" />
            <circle cx="88" cy="18" r="3" fill="hsl(0 0% 95%)" />
            <circle cx="94" cy="12" r="2" fill="hsl(0 0% 95%)" />
          </>
        )}

        {/* Sparkle decorations */}
        <path
          d="M22 35 L24 30 L26 35 L31 37 L26 39 L24 44 L22 39 L17 37 Z"
          fill="white"
          opacity="0.8"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};

export default Mascot;
