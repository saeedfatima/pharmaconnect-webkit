import { MessageCircle, Mail, Shield, Truck, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-pharma.jpg";

const Hero = () => {
  const whatsappNumber = "2348012345678"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hello Pharmaconnect, I would like to place an order.");
  const email = "orders@pharmaconnect.ng";

  const features = [
    { icon: Shield, text: "Verified Suppliers" },
    { icon: Truck, text: "Fast Delivery" },
    { icon: CheckCircle, text: "Quality Assured" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pharmaceutical logistics and healthcare professionals with medicine delivery truck"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="max-w-3xl text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-up">
            <Shield className="w-4 h-4" />
            Trusted Pharmaceutical Partner in Kano State
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 animate-fade-up delay-100">
            Reliable Pharmaceutical{" "}
            <span className="gradient-text">Supply & Logistics</span>{" "}
            in Kano State
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up delay-200">
            Pharmaconnect connects hospitals, pharmacies, and medicine stores to verified 
            pharmaceutical suppliers with fast, reliable delivery across Kano State.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-up delay-300">
            <Button variant="whatsapp" size="xl" asChild>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-6 h-6" />
                Order via WhatsApp
              </a>
            </Button>
            <Button variant="email" size="xl" asChild>
              <a href={`mailto:${email}?subject=Order Inquiry`}>
                <Mail className="w-6 h-6" />
                Send an Email
              </a>
            </Button>
          </div>

          {/* Trust Features */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-up delay-400">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <feature.icon className="w-5 h-5 text-secondary" />
                <span className="font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
