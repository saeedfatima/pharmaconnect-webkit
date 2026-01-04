import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your delivery times?",
    answer: "We offer same-day delivery for pickups before 12:00 PM within Kano metropolis. Pickups after 12:00 PM are delivered the next business day. For locations outside Kano metropolis but within Kano State, delivery takes 1-2 business days depending on the destination."
  },
  {
    question: "What is the minimum order value?",
    answer: "There is no minimum order value for standard deliveries. However, for bulk logistics services, we recommend orders above ₦20,000 for the best rates. We offer competitive pricing for all package sizes."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, POS payments, and cash on delivery. For new customers, we recommend bank transfer or POS payment for the first order. Regular customers can enjoy flexible payment options."
  },
  {
    question: "Which areas do you service?",
    answer: "We currently service all 44 local government areas within Kano State. Our primary pickup location is Dan Gauro New Market, and we deliver to Kano Municipal, Fagge, Dala, Gwale, Nasarawa, Tarauni, Ungogo, and all other LGAs."
  },
  {
    question: "How do I request a delivery?",
    answer: "You can request deliveries via WhatsApp, email, or phone call. Simply provide pickup and delivery addresses, package details, and your preferred delivery time. Our team will confirm and arrange pickup promptly."
  },
  {
    question: "What if my package is damaged or lost?",
    answer: "We take full responsibility for packages in our care. If you receive a damaged package or if it's lost during transit, please notify us within 24 hours. We will investigate and provide compensation or replacement at no additional cost."
  },
  {
    question: "Do you offer express or urgent deliveries?",
    answer: "Yes, we offer express delivery services for urgent needs. Express deliveries within Kano metropolis can be completed within 2-4 hours, subject to availability. Additional charges may apply for express services."
  },
  {
    question: "Can I track my delivery?",
    answer: "Yes, we provide real-time updates on your delivery status via WhatsApp. You'll receive notifications when your package is picked up, in transit, and delivered. You can also contact our support team anytime for updates."
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
            Find answers to common questions about our delivery and logistics services
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
