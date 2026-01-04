import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Database, Lock, Eye, UserCheck, Mail } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ZypDelivery - Logistics & Delivery Kano</title>
        <meta name="description" content="Privacy Policy for ZypDelivery logistics and delivery services in Kano State, Nigeria." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Header */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 section-padding">
          <div className="container-max">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="text-primary font-medium">Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-lg text-muted-foreground">
                Last updated: January 2026
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-max">
            <div className="max-w-4xl mx-auto space-y-12">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ZypDelivery ("we," "our," or "us") is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you use our logistics and delivery services in Kano State, Nigeria.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Personal Information</h3>
                    <p className="text-muted-foreground mb-3">When you use our services, we may collect:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        Your name and contact details
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        Phone numbers and email addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        Pickup and delivery addresses
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        Package details and descriptions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                        Payment information
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Transaction Information</h3>
                    <p className="text-muted-foreground">
                      We maintain records of deliveries, payment transactions, and communications 
                      related to our services for business and customer service purposes.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Eye className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Process and complete deliveries",
                    "Coordinate pickup and drop-off logistics",
                    "Communicate about your deliveries",
                    "Provide delivery status updates",
                    "Maintain accurate business records",
                    "Improve our services",
                    "Handle customer inquiries and complaints",
                    "Prevent fraud and ensure security",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary">{index + 1}</span>
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Information Sharing */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Information Sharing & Disclosure</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information only in the following circumstances:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "Delivery Partners",
                      desc: "To coordinate safe and timely delivery of your packages."
                    },
                    {
                      title: "Recipients",
                      desc: "Basic sender information shared with package recipients as needed."
                    },
                    {
                      title: "Legal Requirements",
                      desc: "When required by law, court order, or government request."
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-muted/30 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Security */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Data Security</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate measures to protect your information:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    Secure storage of customer information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    Limited access to personal information on a need-to-know basis
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    Regular review of security practices
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    Secure communication channels
                  </li>
                </ul>
              </div>

              {/* Data Retention */}
              <div className="bg-muted/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
                <p className="text-muted-foreground">
                  We retain your information for as long as necessary to provide our services and 
                  handle any disputes or inquiries. Transaction records may be retained for the 
                  period required by applicable laws.
                </p>
              </div>

              {/* Your Rights */}
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Request access to your personal information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Request correction of inaccurate information
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Request deletion of your information (subject to legal retention requirements)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                    Opt out of marketing communications
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                </div>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                </p>
                <div className="space-y-2 text-muted-foreground">
                  <p><strong className="text-foreground">Email:</strong> info@zypdelivery.com</p>
                  <p><strong className="text-foreground">Phone:</strong> +234 708 911 9235</p>
                  <p><strong className="text-foreground">Address:</strong> Dan Gauro New Market, Kano State, Nigeria</p>
                </div>
              </div>

              {/* Changes */}
              <div className="text-center py-8 border-t border-border">
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                  with an updated revision date. Continued use of our services after changes constitutes 
                  acceptance of the updated policy.
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Privacy;
