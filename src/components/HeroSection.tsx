import { Button } from "@/components/ui/button";
import FloatingClouds from "./FloatingClouds";
import WeatherIcons from "./WeatherIcons";
import DroughtForecastCard from "./DroughtForecastCard";
import Mascot from "./Mascot";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Background elements */}
      <FloatingClouds />
      <WeatherIcons />

      {/* Parallax background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-earth-sunset/5 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">AI-Powered Climate Intelligence</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight mb-6 animate-fade-up delay-100">
              Predict.
              <br />
              <span className="text-primary">Prevent.</span>
              <br />
              <span className="text-accent">Protect.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-up delay-200">
              AI-powered drought prediction for smarter climate decisions.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-300">
              <Button variant="hero" size="xl" className="group">
                Get Started Free
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start animate-fade-up delay-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-card flex items-center justify-center text-xs font-bold text-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-foreground">Trusted by 10,000+</p>
                <p className="text-xs text-muted-foreground">farmers & researchers</p>
              </div>
            </div>
          </div>

          {/* Right Column - Interactive Card */}
          <div className="relative">
            {/* Mascot */}
            <div className="absolute -top-8 -left-4 z-20 animate-bounce-soft">
              <Mascot size="lg" expression="waving" />
            </div>

            {/* Main forecast card */}
            <div className="relative z-10 animate-fade-up delay-200">
              <DroughtForecastCard />
            </div>

            {/* Floating stats cards */}
            <div className="absolute -right-4 top-1/4 z-20 animate-float delay-300">
              <div className="glass rounded-2xl px-4 py-3 shadow-float">
                <p className="text-2xl font-bold text-primary">94%</p>
                <p className="text-xs text-muted-foreground">Accuracy</p>
              </div>
            </div>

            <div className="absolute -left-8 bottom-1/4 z-20 animate-float delay-500">
              <div className="glass rounded-2xl px-4 py-3 shadow-float">
                <p className="text-2xl font-bold text-accent">2 weeks</p>
                <p className="text-xs text-muted-foreground">Early warning</p>
              </div>
            </div>

            {/* Background glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl scale-150" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-soft">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
