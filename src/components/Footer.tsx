import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" text-primary-foreground section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">LHT</span>
              </div>
              <span className="font-serif text-xl font-semibold">Life Hair Transplant</span>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              Advanced hair restoration solution with FUE & DHI methods. 
              Centralized OT setup with medical-grade safety for natural, sustainable results.
            </p>
            <div className="space-y-2">
              <a href="mailto:info@lifehairtransplant.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-coral transition-colors">
                <Mail size={18} />
                info@lifehairtransplant.com
              </a>
              <a href="tel:+919876543210" className="flex items-center gap-2 text-primary-foreground/70 hover:text-coral transition-colors">
                <Phone size={18} />
                +91 98765 43210
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["About", "Program", "Benefits", "Results", "FAQ"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-primary-foreground/70 hover:text-coral transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} LHT – Life Hair Transplant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
