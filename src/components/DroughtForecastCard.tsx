import { useState } from "react";
import { cn } from "@/lib/utils";
import { TrendingDown, Droplets, ThermometerSun, Wind } from "lucide-react";

const DroughtForecastCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  const metrics = [
    { icon: Droplets, label: "Precipitation", value: "12mm", trend: "-23%", color: "text-accent" },
    { icon: ThermometerSun, label: "Temperature", value: "34°C", trend: "+5°", color: "text-earth-sunset" },
    { icon: Wind, label: "Humidity", value: "28%", trend: "-15%", color: "text-earth-sky" },
  ];

  return (
    <div
      className={cn(
        "relative w-full max-w-sm mx-auto transition-all duration-500 cursor-pointer",
        isHovered ? "scale-105" : "scale-100"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl bg-gradient-to-br from-earth-sunset/30 via-accent/20 to-primary/30 blur-xl transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      />

      {/* Card */}
      <div className="relative glass rounded-3xl p-6 shadow-card overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-muted-foreground font-medium">Live Forecast</p>
            <h3 className="text-xl font-display font-bold text-foreground">Drought Risk</h3>
          </div>
          <div className={cn(
            "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-300",
            isHovered 
              ? "bg-earth-terracotta/20 text-earth-terracotta" 
              : "bg-earth-sunset/20 text-earth-sunset"
          )}>
            <TrendingDown className="w-4 h-4" />
            <span>{isHovered ? "High" : "Moderate"}</span>
          </div>
        </div>

        {/* Risk Meter */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            <span>Low</span>
            <span>Moderate</span>
            <span>Severe</span>
          </div>
          <div className="h-3 bg-muted rounded-full overflow-hidden">
            <div
              className={cn(
                "h-full rounded-full transition-all duration-700 ease-out",
                "bg-gradient-to-r from-primary via-earth-sunset to-destructive"
              )}
              style={{ width: isHovered ? "75%" : "55%" }}
            />
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={cn(
                "text-center p-3 rounded-2xl bg-background/50 transition-all duration-300",
                isHovered && "bg-background/80 shadow-soft"
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <metric.icon className={cn("w-5 h-5 mx-auto mb-1", metric.color)} />
              <p className="text-lg font-bold text-foreground">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
              <p className={cn(
                "text-xs font-semibold mt-1",
                metric.trend.startsWith("-") ? "text-primary" : "text-earth-terracotta"
              )}>
                {metric.trend}
              </p>
            </div>
          ))}
        </div>

        {/* Animated background pattern */}
        <div className={cn(
          "absolute -bottom-10 -right-10 w-40 h-40 rounded-full transition-all duration-500",
          "bg-gradient-to-br from-accent/10 to-primary/10",
          isHovered ? "scale-150 opacity-100" : "scale-100 opacity-50"
        )} />
      </div>
    </div>
  );
};

export default DroughtForecastCard;
