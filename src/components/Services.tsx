import { Pill, Truck, Package, Clock, Shield, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Pill,
      title: "Pharmaceutical Supply",
      description:
        "Access verified, quality-assured medicines for hospitals, clinics, pharmacies, and medicine stores. All products are sourced from NAFDAC-approved suppliers.",
      features: ["Verified Suppliers", "Quality Assured", "Wide Range"],
    },
    {
      icon: Truck,
      title: "Logistics & Delivery",
      description:
        "Fast dispatch, scheduled delivery, and safe handling of temperature-sensitive medicines. We ensure your orders arrive intact and on time.",
      features: ["Same-Day Delivery", "Cold Chain", "GPS Tracking"],
    },
    {
      icon: Package,
      title: "Wholesale Support",
      description:
        "Helping healthcare facilities avoid stock-outs with consistent supply and competitive wholesale pricing. Build reliable inventory management.",
      features: ["Bulk Orders", "Stock Management", "Best Prices"],
    },
  ];

  const additionalFeatures = [
    { icon: Clock, text: "24-Hour Response Time" },
    { icon: Shield, text: "Secure Transactions" },
    { icon: Headphones, text: "Dedicated Support" },
  ];

  return (
    <section id="services" className="relative bg-background">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
            Complete Pharmaceutical{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From sourcing to delivery, we provide end-to-end pharmaceutical 
            supply chain solutions tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft border border-border hover:shadow-card transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Why Choose Pharmaconnect?
              </h3>
              <p className="text-primary-foreground/80">
                We go beyond delivery to ensure your complete satisfaction.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-primary-foreground"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
