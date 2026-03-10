import { motion } from "framer-motion";
import { Award, Users, Calendar, Star } from "lucide-react";

const stats = [
  { icon: Calendar, value: "500+", label: "Events Completed" },
  { icon: Users, value: "10K+", label: "Happy Guests" },
  { icon: Award, value: "8+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Client Rating" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
              About Us
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Why Choose <span className="text-gradient-gold">M.R.K Events?</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              At M.R.K Events, we believe every celebration tells a story. Our passionate team of event planners, 
              decorators, and coordinators work together to bring your dreams to life with meticulous attention to detail.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              From conceptualization to execution, we handle every aspect of your event so you can focus on 
              creating memories. Our commitment to excellence has made us a trusted name in event management.
            </p>
            <a
              href="#contact"
              className="inline-flex bg-gradient-gold text-primary-foreground font-body font-semibold px-8 py-3.5 rounded-full shadow-gold hover:opacity-90 transition-opacity"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 text-center shadow-card border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="font-body text-xs md:text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
