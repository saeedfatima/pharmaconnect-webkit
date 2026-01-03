import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your delivery times?",
    answer: "We offer same-day delivery for orders placed before 12:00 PM within Kano metropolis. Orders placed after 12:00 PM are delivered the next business day. For locations outside Kano metropolis but within Kano State, delivery takes 1-2 business days depending on the destination."
  },
  {
    question: "What is the minimum order value?",
    answer: "Our minimum order value is ₦50,000 for retail pharmacies and medicine stores. For hospitals and healthcare facilities, there is no minimum order requirement. Bulk orders above ₦500,000 qualify for special pricing and priority delivery."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, POS payments, and cash on delivery (for verified customers only). For new customers, we require bank transfer or POS payment for the first three orders. Credit terms are available for established customers with good payment history."
  },
  {
    question: "Which areas do you service?",
    answer: "We currently service all 44 local government areas within Kano State. Our primary delivery zones include Kano Municipal, Fagge, Dala, Gwale, Nasarawa, Tarauni, and Ungogo. We also deliver to Katsina, Jigawa, and Kaduna states for bulk orders."
  },
  {
    question: "Do you require PCN compliance for delivery?",
    answer: "Yes, all our customers must be PCN (Pharmacy Council of Nigeria) compliant and registered with the required Nigerian regulatory institutions. This ensures that pharmaceutical products are only supplied to authorized and licensed facilities."
  },
  {
    question: "How do I place an order?",
    answer: "You can place orders via WhatsApp, email, or phone call. Simply send your order list with product names and quantities. Our team will confirm availability, provide pricing, and arrange delivery within your preferred time slot."
  },
  {
    question: "What if I receive damaged or incorrect products?",
    answer: "We have a hassle-free return policy. If you receive damaged or incorrect products, please notify us within 24 hours of delivery. We will arrange for pickup and replacement or refund at no additional cost to you."
  },
  {
    question: "Do you offer emergency or urgent deliveries?",
    answer: "Yes, we offer express delivery services for urgent medical needs. Emergency deliveries within Kano metropolis can be arranged within 2-4 hours, subject to product availability. Additional charges may apply for express services."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our pharmaceutical supply and delivery services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background border border-border rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
