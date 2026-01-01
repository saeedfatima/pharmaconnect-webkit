import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, FileCheck, Truck, AlertTriangle } from "lucide-react";

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Pharmaconnect</title>
        <meta
          name="description"
          content="Terms and Conditions for Pharmaconnect pharmaceutical supply and logistics services in Kano State, Nigeria."
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
              Please read these terms carefully before using Pharmaconnect services.
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
                  Welcome to Pharmaconnect. These Terms and Conditions govern your use of our pharmaceutical 
                  supply and logistics services operating in Kano State, Nigeria. By engaging our services, 
                  you agree to comply with and be bound by these terms.
                </p>
                <p>
                  Pharmaconnect is committed to ensuring the safe, compliant, and efficient distribution of 
                  pharmaceutical products to licensed healthcare facilities and registered pharmaceutical 
                  establishments.
                </p>
              </div>
            </section>

            {/* Customer Eligibility */}
            <section className="bg-card rounded-2xl p-8 border border-border">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                <FileCheck className="w-6 h-6 text-primary" />
                2. Customer Eligibility & Compliance Requirements
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p className="font-semibold text-foreground">
                  To request delivery and purchase pharmaceutical products from Pharmaconnect, customers 
                  MUST meet the following mandatory requirements:
                </p>
                
                <div className="bg-primary/5 rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground">
                    2.1 Pharmacists Council of Nigeria (PCN) Compliance
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      All customers must be <strong>PCN registered and compliant</strong>. This includes 
                      pharmacies, pharmaceutical shops, and any establishment handling pharmaceutical products.
                    </li>
                    <li>
                      Valid PCN registration certificate must be provided upon request and kept current 
                      throughout the business relationship.
                    </li>
                    <li>
                      Customers must operate under a licensed pharmacist as required by PCN regulations.
                    </li>
                  </ul>
                </div>

                <div className="bg-secondary/5 rounded-xl p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground">
                    2.2 Registration with Required Nigerian Institutions
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Corporate Affairs Commission (CAC)</strong>: Business must be registered with 
                      CAC with valid registration documents.
                    </li>
                    <li>
                      <strong>National Agency for Food and Drug Administration and Control (NAFDAC)</strong>: 
                      Where applicable, customers must hold relevant NAFDAC approvals for storage and 
                      distribution of pharmaceutical products.
                    </li>
                    <li>
                      <strong>State Ministry of Health</strong>: Healthcare facilities must be registered 
                      and licensed by the Kano State Ministry of Health or relevant state authority.
                    </li>
                    <li>
                      <strong>Hospital Management Board</strong>: Government hospitals and clinics must 
                      provide evidence of institutional authorization.
                    </li>
                  </ul>
                </div>

                <div className="bg-destructive/5 rounded-xl p-6 border border-destructive/20">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">Important Notice</h3>
                      <p>
                        Pharmaconnect reserves the right to verify all compliance documents before 
                        processing any order. We will NOT supply pharmaceutical products to unregistered, 
                        unlicensed, or non-compliant establishments. Providing false documentation is a 
                        criminal offense under Nigerian law.
                      </p>
                    </div>
                  </div>
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
                <h3 className="text-lg font-bold text-foreground">3.1 Delivery Eligibility</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Delivery is only available to verified and compliant customers as outlined in Section 2.</li>
                  <li>Delivery address must be the registered business premises on file with PCN and CAC.</li>
                  <li>A licensed pharmacist or authorized representative must be present to receive deliveries.</li>
                </ul>

                <h3 className="text-lg font-bold text-foreground">3.2 Delivery Coverage</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>We currently deliver within Kano State, Nigeria.</li>
                  <li>Delivery times vary based on location and order volume.</li>
                  <li>Same-day delivery is available for orders placed before 12:00 PM within Kano metropolis.</li>
                </ul>

                <h3 className="text-lg font-bold text-foreground">3.3 Cold Chain Requirements</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Temperature-sensitive products are transported using appropriate cold chain logistics.</li>
                  <li>Customers must have adequate storage facilities for cold chain products.</li>
                  <li>Pharmaconnect is not liable for product deterioration due to inadequate customer storage.</li>
                </ul>
              </div>
            </section>

            {/* Order Terms */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Order and Payment Terms</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>All orders are subject to product availability and verification of customer compliance.</li>
                  <li>Prices are subject to change without prior notice.</li>
                  <li>Payment terms will be communicated upon order confirmation.</li>
                  <li>Orders may be cancelled if compliance requirements are not met.</li>
                </ul>
              </div>
            </section>

            {/* Product Quality */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Product Quality Assurance</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>All products supplied are sourced from verified and NAFDAC-approved manufacturers and distributors.</li>
                  <li>Products are stored and handled according to Good Distribution Practice (GDP) guidelines.</li>
                  <li>Batch numbers and expiry dates are clearly documented for traceability.</li>
                  <li>Products nearing expiry (less than 6 months) will be clearly communicated before dispatch.</li>
                </ul>
              </div>
            </section>

            {/* Returns */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Returns and Complaints</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Product quality complaints must be reported within 24 hours of delivery.</li>
                  <li>Returns are only accepted for damaged, expired, or incorrectly supplied products.</li>
                  <li>Products must be returned in their original packaging with documentation.</li>
                  <li>Temperature-sensitive products cannot be returned once delivered.</li>
                </ul>
              </div>
            </section>

            {/* Liability */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <ul className="list-disc list-inside space-y-2">
                  <li>Pharmaconnect is not liable for any indirect, incidental, or consequential damages.</li>
                  <li>Our liability is limited to the value of the products supplied.</li>
                  <li>We are not responsible for delays caused by circumstances beyond our control.</li>
                  <li>Customers are responsible for proper storage and handling after delivery.</li>
                </ul>
              </div>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  These Terms and Conditions are governed by the laws of the Federal Republic of Nigeria, 
                  including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Pharmacists Council of Nigeria Act</li>
                  <li>National Agency for Food and Drug Administration and Control Act</li>
                  <li>National Drug Policy</li>
                  <li>Companies and Allied Matters Act (CAMA)</li>
                </ul>
                <p>
                  Any disputes arising from these terms shall be resolved through arbitration in Kano State, 
                  Nigeria, in accordance with Nigerian arbitration laws.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="bg-primary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  For questions regarding these Terms and Conditions, please contact us:
                </p>
                <ul className="list-none space-y-2 mt-4">
                  <li><strong>Email:</strong> orders@pharmaconnect.ng</li>
                  <li><strong>Phone:</strong> +234 801 234 5678</li>
                  <li><strong>WhatsApp:</strong> +234 801 234 5678</li>
                  <li><strong>Address:</strong> Kano State, Nigeria</li>
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
