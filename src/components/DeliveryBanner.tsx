import { Truck, Clock, MapPin, Shield } from "lucide-react";
import deliveryImage from "@/assets/delivery-rider.jpg";

const highlights = [
  { icon: Truck, text: "Same-Day Delivery" },
  { icon: Clock, text: "2-4 Hour Express" },
  { icon: MapPin, text: "All 44 LGAs" },
  { icon: Shield, text: "Secure Handling" },
];

const DeliveryBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${deliveryImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>

      {/* Content */}
      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-1.5 bg-background/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              Fast & Reliable
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Swift Delivery Across Kano State
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-lg">
              Our dedicated fleet of delivery riders ensures your pharmaceutical products reach you 
              safely and on time. From urgent medical supplies to bulk orders, we've got you covered.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-background/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <div className="w-10 h-10 rounded-full bg-background/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-primary-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Card */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-background/10 backdrop-blur-md rounded-2xl p-8 border border-background/20">
              <div className="text-center mb-6">
                <div className="text-5xl font-bold text-primary-foreground mb-2">98%</div>
                <div className="text-primary-foreground/80">On-Time Delivery Rate</div>
              </div>
              <div className="h-px bg-background/20 my-6" />
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">500+</div>
                  <div className="text-sm text-primary-foreground/80">Daily Deliveries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-foreground">44</div>
                  <div className="text-sm text-primary-foreground/80">LGAs Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
