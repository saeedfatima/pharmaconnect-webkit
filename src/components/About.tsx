import { Package, Users, Award, MapPin } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Package, value: "1000+", label: "Deliveries Completed" },
    { icon: Users, value: "500+", label: "Happy Customers" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: MapPin, value: "100%", label: "Kano Coverage" },
  ];

  return (
    <section id="about" className="relative bg-card">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
              Connecting Dan Gauro Market to{" "}
              <span className="text-primary">All of Kano State</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                ZypDelivery is dedicated to bridging the gap between vendors at 
                Dan Gauro New Market and customers across Kano State. We understand that 
                timely and reliable delivery is essential for business success.
              </p>
              <p>
                Our network of trusted riders ensures that every package is handled 
                with care and delivered on time. From small parcels to bulk orders, 
                we deliver with speed and reliability.
              </p>
              <p>
                With years of experience in logistics and delivery, we've built a 
                reputation for trust, reliability, and exceptional service throughout 
                Kano State.
              </p>
            </div>

            {/* Trust points */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Secure Handling",
                "Real-Time Tracking",
                "Same-Day Delivery",
                "24/7 Support",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-foreground font-medium">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-6 shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
