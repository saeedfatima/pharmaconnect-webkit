import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileCheck, Truck, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | ZypDelivery</title>
        <meta
          name="description"
          content="Terms and Conditions for ZypDelivery logistics and delivery services in Kano State, Nigeria."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border">
          <div className="container-max section-padding !py-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Terms and Conditions
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl">
              Please read these terms carefully before using ZypDelivery services.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                1. Introduction
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Welcome to ZypDelivery. These Terms and Conditions govern your use of our logistics 
                  and delivery services operating in Kano State, Nigeria. By engaging our services, 
                  you agree to comply with and be bound by these terms.
                </p>
                <p>
                  ZypDelivery is committed to ensuring the safe, reliable, and efficient delivery of 
                  packages and goods from Dan Gauro New Market to destinations across Kano State.
                </p>
              </div>
            </section>

            {/* Customer Eligibility */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-primary" />
                2. Service Usage
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p className="font-semibold text-foreground">
                  Our delivery services are available to all individuals and businesses. To use our services:
                </p>
                
                <div className="bg-primary/5 rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground">
                    2.1 Requirements
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Provide accurate pickup and delivery addresses
                    </li>
                    <li>
                      Ensure packages are properly packaged and ready for pickup
                    </li>
                    <li>
                      Provide valid contact information for both sender and recipient
                    </li>
                    <li>
                      Ensure someone is available to receive the delivery at the destination
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/5 rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground">
                    2.2 Prohibited Items
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Illegal substances or contraband
                    </li>
                    <li>
                      Hazardous materials or explosives
                    </li>
                    <li>
                      Perishable goods without proper packaging
                    </li>
                    <li>
                      Items exceeding our weight and size limits
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Delivery Terms */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <Truck className="w-6 h-6 text-primary" />
                3. Delivery Terms
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <h3 className="text-lg font-bold text-foreground">3.1 Delivery Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>We currently deliver within all 44 LGAs of Kano State, Nigeria.</li>
                  <li>Our primary pickup location is Dan Gauro New Market.</li>
                  <li>Delivery times vary based on location and order volume.</li>
                  <li>Same-day delivery is available for pickups before 12:00 PM within Kano metropolis.</li>
                </ul>

                <h3 className="text-lg font-bold text-foreground">3.2 Delivery Responsibility</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Packages must be handed to an authorized recipient at the delivery address.</li>
                  <li>If no one is available, we will attempt redelivery or contact the sender.</li>
                  <li>ZypDelivery is responsible for packages from pickup until successful delivery.</li>
                </ul>

                <h3 className="text-lg font-bold text-foreground">3.3 Package Handling</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>All packages are handled with care during transit.</li>
                  <li>Fragile items must be clearly marked and properly packaged by the sender.</li>
                  <li>We recommend insurance for high-value items.</li>
                </ul>
              </div>
            </section>

            {/* Order Terms */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment Terms</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>All delivery fees are communicated before service confirmation.</li>
                  <li>We accept bank transfers, POS payments, and cash on delivery.</li>
                  <li>Prices may vary based on distance, package size, and urgency.</li>
                  <li>Express delivery services incur additional charges.</li>
                </ul>
              </div>
            </section>

            {/* Liability */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
                5. Liability & Claims
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Claims for damaged or lost items must be reported within 24 hours of scheduled delivery.</li>
                  <li>Compensation is limited to the declared value of the package (up to ₦100,000).</li>
                  <li>We are not liable for delays caused by circumstances beyond our control (weather, road conditions, etc.).</li>
                  <li>Proper documentation and proof of value may be required for claims.</li>
                </ul>
              </div>
            </section>

            {/* Returns */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cancellations & Refunds</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Cancellations before pickup are fully refundable.</li>
                  <li>Cancellations after pickup may incur a handling fee.</li>
                  <li>Refunds are processed within 3-5 business days.</li>
                  <li>Failed deliveries due to incorrect addresses may be subject to additional fees.</li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria.
                  Any disputes arising from these terms shall be resolved through arbitration in Kano State, 
                  Nigeria, in accordance with Nigerian arbitration laws.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Information</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  For questions regarding these Terms and Conditions, please contact us:
                </p>
                <ul className="list-none space-y-2 mt-4">
                  <li><strong>Email:</strong> info@zypdelivery.com</li>
                  <li><strong>Phone:</strong> +234 708 911 9235</li>
                  <li><strong>WhatsApp:</strong> +234 708 911 9235</li>
                  <li><strong>Address:</strong> Dan Gauro New Market, Kano State, Nigeria</li>
                </ul>
              </div>
            </section>

            {/* Last Updated */}
            <div className="text-center text-muted-foreground text-sm border-t border-border pt-8">
              <p>Last updated: January 2026</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
