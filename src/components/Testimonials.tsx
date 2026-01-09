import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Aminu Bello",
    role: "Electronics Vendor",
    location: "Dan Gauro Market",
    content: "ZypDelivery has transformed how I do business. My customers across Kano now receive their orders the same day. Reliable and professional service!",
    rating: 5,
  },
  {
    name: "Fatima Abubakar",
    role: "Fashion Retailer",
    location: "Sabon Gari",
    content: "I've been using ZypDelivery for 6 months now. Their riders are always on time and my goods arrive in perfect condition. Highly recommended!",
    rating: 5,
  },
  {
    name: "Musa Ibrahim",
    role: "Phone Accessories Dealer",
    location: "Dan Gauro Market",
    content: "Fast, secure, and affordable. ZypDelivery understands what vendors need. My business has grown because customers trust their delivery.",
    rating: 5,
  },
  {
    name: "Hauwa Yusuf",
    role: "Cosmetics Seller",
    location: "Kurmi Market",
    content: "The customer support is excellent. Whenever I have questions, they respond quickly. My packages always reach customers safely.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Customer Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Vendors Across <span className="gradient-text">Kano State</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our satisfied customers who rely on ZypDelivery for their business success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-hover bg-card border-border/50 relative overflow-hidden"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 absolute top-4 right-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? "text-yellow-500 fill-yellow-500"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
