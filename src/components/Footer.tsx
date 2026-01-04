import { Truck, MessageCircle, Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logoImage from "@/assets/IMG-20260103-WA0009.jpg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappNumber = "2347089119235";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello ZypDelivery, I would like to request a delivery.")}`;

  const socialLinks = [
    { icon: MessageCircle, href: whatsappLink, label: "WhatsApp", color: "hover:bg-[#25D366]" },
    { icon: Facebook, href: "https://facebook.com/zypdelivery", label: "Facebook", color: "hover:bg-[#1877F2]" },
    { icon: Instagram, href: "https://instagram.com/zypdelivery", label: "Instagram", color: "hover:bg-[#E4405F]" },
    { icon: Twitter, href: "https://twitter.com/zypdelivery", label: "Twitter/X", color: "hover:bg-foreground" },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Contact", href: "#contact" },
    { label: "Terms & Conditions", href: "/terms", isRoute: true },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-max section-padding !pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
                <img src={logoImage} alt="ZypDelivery Logo" className="w-full h-full object-cover" />
              </div>
              <span className="text-xl font-bold text-background">
                Zyp<span className="text-primary">Delivery</span>
              </span>
            </a>
            <p className="text-background/70 mb-6 max-w-md">
              Your trusted partner for logistics and delivery services in Kano State. 
              Connecting Dan Gauro New Market vendors to customers with fast, reliable delivery.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center transition-all duration-300 hover:text-white ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70">
              <li>
                <a href="tel:+2347089119235" className="hover:text-primary transition-colors">
                  +234 708 911 9235
                </a>
              </li>
              <li>
                <a href="mailto:info@zypdelivery.com" className="hover:text-primary transition-colors">
                  info@zypdelivery.com
                </a>
              </li>
              <li>Dan Gauro New Market, Kano State</li>
              <li>Mon - Sat: 8AM - 6PM</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm text-center md:text-left">
            © {currentYear} ZypDelivery. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
