import { Package, Truck, Store, Clock, Shield, Headphones } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Parcel Delivery",
      description:
        "Fast and secure delivery of parcels and packages from Dan Gauro New Market to any location in Kano State. We handle your goods with care.",
      features: ["Same-Day Option", "Secure Handling", "All Sizes"],
    },
    {
      icon: Truck,
      title: "Bulk Logistics",
      description:
        "Need to move larger quantities? Our bulk delivery service handles wholesale orders and large shipments efficiently and cost-effectively.",
      features: ["Wholesale Orders", "Scheduled Pickup", "Fleet Available"],
    },
    {
      icon: Store,
      title: "Vendor Support",
      description:
        "Dedicated delivery solutions for market vendors. We help you reach your customers faster with reliable pickup and delivery services.",
      features: ["Daily Pickups", "Multiple Drops", "Best Rates"],
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
            Complete Delivery{" "}
            <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From pickup to delivery, we provide end-to-end logistics 
            solutions tailored to your business needs.
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
                Why Choose ZypDelivery?
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
