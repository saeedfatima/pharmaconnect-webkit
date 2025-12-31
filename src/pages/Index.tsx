import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pharmaconnect - Reliable Pharmaceutical Supply & Logistics in Kano State, Nigeria</title>
        <meta 
          name="description" 
          content="Pharmaconnect connects hospitals, pharmacies, and medicine stores to verified pharmaceutical suppliers with fast, reliable delivery across Kano State, Nigeria." 
        />
        <meta name="keywords" content="pharmaceutical supply, medicine logistics, drug delivery, Kano State, Nigeria, hospital pharmacy, wholesale medicine" />
        <link rel="canonical" href="https://pharmaconnect.ng" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pharmaconnect - Pharmaceutical Supply & Logistics" />
        <meta property="og:description" content="Your trusted partner for pharmaceutical supply and logistics in Kano State, Nigeria." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NG" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Pharmaconnect",
            "description": "Pharmaceutical supply and logistics company in Kano State, Nigeria",
            "url": "https://pharmaconnect.ng",
            "telephone": "+234-801-234-5678",
            "email": "orders@pharmaconnect.ng",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Kano State",
              "addressCountry": "Nigeria"
            },
            "areaServed": {
              "@type": "State",
              "name": "Kano State"
            },
            "serviceType": ["Pharmaceutical Supply", "Medicine Logistics", "Wholesale Pharmacy"]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
