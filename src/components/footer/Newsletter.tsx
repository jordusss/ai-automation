import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter an email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      if (error) {
        if (error.code === "23505") {
          toast({
            title: "Already Subscribed",
            description: "This email is already subscribed to our newsletter.",
          });
        } else {
          throw error;
        }
        return;
      }

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    } catch (error: any) {
      console.error("Subscription error:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe to newsletter. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Newsletter</h3>
      <p className="text-sm text-muted-foreground">
        Stay updated with our latest news and updates.
      </p>
      <form onSubmit={handleNewsletterSubmit} className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background"
          disabled={isLoading}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;