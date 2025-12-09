import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Mascot from "./Mascot";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  { value: "50", suffix: "M+", label: "Hectares Monitored" },
  { value: "94", suffix: "%", label: "Prediction Accuracy" },
  { value: "2", suffix: " weeks", label: "Early Warning Period" },
  { value: "120", suffix: "+", label: "Countries Served" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 px-6 bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Mascot guide */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="relative">
          <Mascot size="md" expression="thinking" className="animate-float" />
          <div className="absolute -left-32 top-0 glass rounded-2xl px-4 py-2 text-sm max-w-[140px]">
            <p className="text-foreground font-medium">Pretty impressive, right? 🌍</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                "text-center transition-all duration-700",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative inline-block">
                <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-2xl md:text-3xl font-display font-bold text-primary">
                  {stat.suffix}
                </span>
              </div>
              <p className="mt-2 text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
