import { PartyPopper, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10 md:py-14">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <PartyPopper className="w-6 h-6 text-primary" />
            <span className="font-display text-xl font-bold text-primary-foreground">
              M.R.K Events
            </span>
          </div>

          <div className="flex items-center gap-5">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4 text-primary" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} M.R.K Events. All rights reserved. Making moments magical.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
