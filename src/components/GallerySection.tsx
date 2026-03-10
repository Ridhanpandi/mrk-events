import { motion } from "framer-motion";
import weddingImg from "@/assets/wedding-event.jpg";
import corporateImg from "@/assets/corporate-event.jpg";
import birthdayImg from "@/assets/birthday-party.jpg";
import gardenImg from "@/assets/garden-party.jpg";
import cocktailImg from "@/assets/cocktail-party.jpg";
import heroImg from "@/assets/hero-party.jpg";

const images = [
  { src: weddingImg, alt: "Wedding reception by M.R.K Events", label: "Wedding" },
  { src: corporateImg, alt: "Corporate event by M.R.K Events", label: "Corporate" },
  { src: birthdayImg, alt: "Birthday party by M.R.K Events", label: "Birthday" },
  { src: gardenImg, alt: "Garden party by M.R.K Events", label: "Garden" },
  { src: cocktailImg, alt: "Cocktail night by M.R.K Events", label: "Cocktail" },
  { src: heroImg, alt: "Grand celebration by M.R.K Events", label: "Gala" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-card">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-body text-sm font-semibold text-primary uppercase tracking-widest">
            Our Portfolio
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-2">
            Event <span className="text-gradient-gold">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {images.map((img, i) => (
            <motion.div
              key={img.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="font-display text-lg font-semibold text-primary-foreground">
                  {img.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
