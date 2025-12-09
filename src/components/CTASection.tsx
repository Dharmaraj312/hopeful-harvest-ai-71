import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Mascot from "./Mascot";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
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
    <section ref={sectionRef} className="py-24 px-6">
      <div
        className={cn(
          "max-w-4xl mx-auto relative transition-all duration-1000",
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        )}
      >
        {/* Card */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary/90 to-earth-forest p-12 md:p-16 shadow-float">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    width: Math.random() * 100 + 50,
                    height: Math.random() * 100 + 50,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    opacity: Math.random() * 0.3,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Mascot */}
          <div className="absolute -right-4 -bottom-4 md:right-8 md:bottom-8 opacity-90">
            <Mascot size="lg" expression="happy" className="animate-bounce-soft" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              <span>Start protecting your land today</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              Ready to predict the unpredictable?
            </h2>

            <p className="text-lg text-white/80 mb-8 max-w-md">
              Join thousands of farmers and researchers who are already making smarter climate decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="xl"
                className="bg-white text-primary hover:bg-white/90 hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 font-bold"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="xl"
                className="text-white border-2 border-white/30 hover:bg-white/10 hover:border-white/50"
              >
                Talk to an Expert
              </Button>
            </div>
          </div>
        </div>

        {/* Floating decorations */}
        <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute -bottom-4 -right-8 w-16 h-16 bg-earth-sunset/20 rounded-full animate-float delay-300" />
      </div>
    </section>
  );
};

export default CTASection;
