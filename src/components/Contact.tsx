import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  const whatsappNumber = "2347089119235";
  const whatsappMessage = encodeURIComponent("Hello ZypDelivery, I would like to request a delivery.");
  const email = "info@zypdelivery.com";
  const phone = "+234 708 911 9235";

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: phone,
      href: `tel:${phone.replace(/\s/g, "")}`,
    },
    {
      icon: Mail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dan Gauro New Market, Kano State",
      href: "#",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon - Sat: 8AM - 6PM",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="relative bg-card">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Info */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Request a{" "}
              <span className="text-primary">Delivery?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get in touch with us today. We're here to help you deliver your 
              packages quickly and reliably across Kano State.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 p-4 rounded-xl bg-background border border-border hover:shadow-soft transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="font-semibold text-foreground">
                      {info.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - CTA Cards */}
          <div className="flex flex-col gap-6">
            {/* WhatsApp Card */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-2xl p-8 text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Request via WhatsApp</h3>
              </div>
              <p className="text-white/90 mb-6">
                Chat with us directly on WhatsApp for quick responses and easy delivery requests. 
                Send your pickup and delivery details and get instant quotes.
              </p>
              <Button variant="whatsapp" size="xl" className="w-full bg-white text-[#25D366] hover:bg-white/90" asChild>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-6 h-6" />
                  Start WhatsApp Chat
                </a>
              </Button>
            </div>

            {/* Email Card */}
            <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">Send an Email</h3>
              </div>
              <p className="text-primary-foreground/90 mb-6">
                Prefer email? Send us your delivery requirements and we'll 
                get back to you with a comprehensive quote.
              </p>
              <Button variant="email" size="xl" className="w-full bg-white text-primary hover:bg-white/90" asChild>
                <a href={`mailto:${email}?subject=Delivery Inquiry&body=Hello ZypDelivery,%0A%0AI would like to request a delivery...`}>
                  <Mail className="w-6 h-6" />
                  Send Email Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
