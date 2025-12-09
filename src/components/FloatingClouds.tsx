import { cn } from "@/lib/utils";

interface CloudProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: string;
}

const Cloud = ({ className, size = "md", delay }: CloudProps) => {
  const sizeClasses = {
    sm: "w-16 h-8",
    md: "w-24 h-12",
    lg: "w-36 h-16",
  };

  return (
    <div
      className={cn(
        "absolute opacity-60",
        sizeClasses[size],
        className
      )}
      style={{ animationDelay: delay }}
    >
      <svg
        viewBox="0 0 100 50"
        className="w-full h-full fill-earth-cloud drop-shadow-sm"
      >
        <ellipse cx="25" cy="35" rx="20" ry="12" />
        <ellipse cx="50" cy="30" rx="25" ry="18" />
        <ellipse cx="75" cy="35" rx="20" ry="12" />
        <ellipse cx="40" cy="20" rx="18" ry="15" />
        <ellipse cx="60" cy="22" rx="16" ry="13" />
      </svg>
    </div>
  );
};

const FloatingClouds = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Layer 1 - Far clouds (slower, more transparent) */}
      <Cloud
        size="lg"
        className="top-10 -left-10 animate-drift opacity-30"
        delay="0s"
      />
      <Cloud
        size="md"
        className="top-20 left-1/4 animate-drift opacity-40"
        delay="-10s"
      />
      <Cloud
        size="sm"
        className="top-8 left-1/2 animate-drift opacity-35"
        delay="-20s"
      />
      
      {/* Layer 2 - Mid clouds */}
      <Cloud
        size="lg"
        className="top-32 -left-20 animate-float-slow opacity-50"
        delay="-5s"
      />
      <Cloud
        size="md"
        className="top-16 right-1/4 animate-float opacity-45"
        delay="-3s"
      />
      
      {/* Layer 3 - Close clouds (faster, more visible) */}
      <Cloud
        size="sm"
        className="top-40 left-1/3 animate-float opacity-60"
        delay="-8s"
      />
      <Cloud
        size="md"
        className="top-24 right-10 animate-float-slow opacity-55"
        delay="-15s"
      />
    </div>
  );
};

export default FloatingClouds;
