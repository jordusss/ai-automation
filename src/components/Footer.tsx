import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Separator } from "./ui/separator";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CompanyInfo from "./footer/CompanyInfo";
import QuickLinks from "./footer/QuickLinks";
import LegalLinks from "./footer/LegalLinks";
import Newsletter from "./footer/Newsletter";
import SocialLinks from "./footer/SocialLinks";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const location = useLocation();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the homepage, first navigate there
    if (location.pathname !== '/') {
      window.location.href = `/${sectionId}`;
      return;
    }
    
    // If we're already on the homepage, just scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t">
      <div className="container px-4 py-12 mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <CompanyInfo />
          <QuickLinks scrollToSection={scrollToSection} />
          <LegalLinks />
          <Newsletter />
        </div>

        <Separator className="my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Automation B.V. All rights reserved.
          </div>
          <SocialLinks />
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-2 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;