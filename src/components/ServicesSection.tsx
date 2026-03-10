import { motion } from "framer-motion";
import { Heart, Cake, Building2, TreePine, GlassWater, Music } from "lucide-react";

const services = [
  { icon: Heart, title: "Weddings", description: "Dream weddings designed with love and elegance, from intimate ceremonies to grand celebrations." },
  { icon: Cake, title: "Birthday Parties", description: "Fun, themed birthday bashes for all ages with stunning decorations and entertainment." },
  { icon: Building2, title: "Corporate Events", description: "Professional conferences, galas, and team-building events that leave lasting impressions." },
  { icon: TreePine, title: "Garden Parties", description: "Enchanting outdoor celebrations with beautiful setups under the open sky." },
  { icon: GlassWater, title: "Cocktail Nights", description: "Sophisticated cocktail evenings with curated menus and elegant ambiance." },
  { icon: Music, title: "Live Entertainment", description: "DJs, bands, performers, and custom entertainment packages for every occasion." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Every event is unique. We offer a full range of services to make your celebration perfect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-gold transition-shadow duration-300 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
