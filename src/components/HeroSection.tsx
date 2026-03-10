import { motion } from "framer-motion";
import { Sparkles, ArrowDown } from "lucide-react";
import heroImg from "@/assets/hero-party.jpg";

const confettiColors = [
  "hsl(36 80% 50%)",
  "hsl(340 65% 55%)",
  "hsl(170 50% 45%)",
  "hsl(42 90% 58%)",
  "hsl(280 60% 65%)",
];

const ConfettiPieces = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {Array.from({ length: 20 }).map((_, i) => (
      <div
        key={i}
        className="confetti-piece"
        style={{
          left: `${Math.random() * 100}%`,
          backgroundColor: confettiColors[i % confettiColors.length],
          animationDuration: `${3 + Math.random() * 4}s`,
          animationDelay: `${Math.random() * 5}s`,
          width: `${6 + Math.random() * 6}px`,
          height: `${6 + Math.random() * 6}px`,
        }}
      />
    ))}
  </div>
);

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Elegant party setup by M.R.K Events"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <ConfettiPieces />

      <div className="container relative z-10 pt-20 pb-12 md:pt-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center md:text-left md:mx-0"
        >
          <div className="inline-flex items-center gap-2 bg-background/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="font-body text-xs md:text-sm font-medium text-primary-foreground">
              Making Every Moment Magical
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            We Create
            <br />
            <span className="text-gradient-gold">Unforgettable</span>
            <br />
            Celebrations
          </h1>

          <p className="font-body text-base md:text-lg text-primary-foreground/80 mb-8 max-w-md mx-auto md:mx-0">
            From grand weddings to intimate parties, M.R.K Events transforms your vision into extraordinary experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full shadow-gold hover:opacity-90 transition-opacity text-center"
            >
              Plan Your Event
            </a>
            <a
              href="#gallery"
              className="border-2 border-primary-foreground/30 text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-primary-foreground/10 transition-colors text-center"
            >
              View Our Work
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-primary-foreground/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
