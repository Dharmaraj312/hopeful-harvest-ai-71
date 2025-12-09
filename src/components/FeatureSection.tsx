import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { BarChart3, Brain, Map, Bell, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  bgColor: string;
}

const features: Feature[] = [
  {
    icon: BarChart3,
    title: "Real-time Climate Analytics",
    description: "Monitor live weather patterns, soil moisture levels, and vegetation health indices across your entire region with instant data updates.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Brain,
    title: "Machine Learning Forecasts",
    description: "Our advanced AI models analyze decades of climate data to predict drought conditions weeks before they occur with 94% accuracy.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Map,
    title: "Interactive Drought Maps",
    description: "Explore detailed geographic visualizations showing drought severity, affected areas, and predicted spread patterns in real-time.",
    color: "text-earth-terracotta",
    bgColor: "bg-earth-terracotta/10",
  },
  {
    icon: Bell,
    title: "Smart Alert System",
    description: "Receive personalized notifications based on your location and risk threshold. Get actionable recommendations before drought impacts hit.",
    color: "text-earth-sunset",
    bgColor: "bg-earth-sunset/10",
  },
];

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isVisible: boolean;
}

const FeatureCard = ({ feature, index, isVisible }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <div
      className={cn(
        "group relative p-6 rounded-3xl bg-card shadow-card transition-all duration-700 hover:shadow-float hover:-translate-y-2",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Hover glow */}
      <div
        className={cn(
          "absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          feature.bgColor
        )}
        style={{ filter: "blur(20px)" }}
      />

      <div className="relative z-10">
        {/* Icon */}
        <div
          className={cn(
            "w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110",
            feature.bgColor
          )}
        >
          <Icon className={cn("w-7 h-7", feature.color)} />
        </div>

        {/* Content */}
        <h3 className="text-xl font-display font-bold text-foreground mb-3">
          {feature.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {feature.description}
        </p>

        {/* Decorative corner */}
        <div
          className={cn(
            "absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-20 transition-all duration-300 group-hover:scale-150 group-hover:opacity-30",
            feature.bgColor
          )}
        />
      </div>
    </div>
  );
};

const FeatureSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Powerful Features
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Everything You Need to
            <span className="text-gradient"> Stay Ahead</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive suite of tools empowers farmers, researchers, and policymakers to make data-driven decisions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
