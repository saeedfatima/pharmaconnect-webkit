import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import DeliveryBanner from "@/components/DeliveryBanner";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>ZypDelivery - Reliable Logistics & Delivery Services in Kano State, Nigeria</title>
        <meta 
          name="description" 
          content="ZypDelivery connects vendors from Dan Gauro New Market to customers across Kano State with fast, reliable, and secure delivery services." 
        />
        <meta name="keywords" content="delivery services, logistics, Kano State, Nigeria, Dan Gauro Market, package delivery, courier service" />
        <link rel="canonical" href="https://zypdelivery.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="ZypDelivery - Logistics & Delivery Services" />
        <meta property="og:description" content="Your trusted partner for logistics and delivery in Kano State, Nigeria." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_NG" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ZypDelivery",
            "description": "Logistics and delivery services company in Kano State, Nigeria",
            "url": "https://zypdelivery.com",
            "telephone": "+234-708-911-9235",
            "email": "info@zypdelivery.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Dan Gauro New Market",
              "addressRegion": "Kano State",
              "addressCountry": "Nigeria"
            },
            "areaServed": {
              "@type": "State",
              "name": "Kano State"
            },
            "serviceType": ["Parcel Delivery", "Logistics", "Courier Services"]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <DeliveryBanner />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
