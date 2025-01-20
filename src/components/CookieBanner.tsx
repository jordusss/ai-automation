import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieChoice = localStorage.getItem("cookieChoice");
    if (!cookieChoice) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieChoice", "accepted");
    setShowBanner(false);
    toast({
      title: "Cookies accepted",
      description: "Thank you for accepting cookies.",
    });
  };

  const handleDecline = () => {
    localStorage.setItem("cookieChoice", "declined");
    setShowBanner(false);
    toast({
      title: "Cookies declined",
      description: "You can change your cookie preferences at any time.",
    });
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border"
        >
          <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              <p>
                We use cookies to enhance your experience. By continuing to visit
                this site you agree to our use of cookies.{" "}
              </p>
            </div>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDecline}
                className="whitespace-nowrap"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={handleAccept}
                className="whitespace-nowrap"
              >
                Accept
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;