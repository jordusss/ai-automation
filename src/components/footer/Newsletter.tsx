import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";
import { supabase } from "@/lib/supabase";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    console.log("Attempting to subscribe email:", email);
    
    try {
      console.log("Making Supabase request...");
      const { error, data } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email }]);

      console.log("Supabase response:", { error, data });

      if (error) {
        // Check if the error is due to missing table
        if (error.code === "42P01") {
          toast({
            title: "Database Setup Required",
            description: "The newsletter subscription system needs to be set up. Please create the newsletter_subscriptions table in Supabase with an 'email' column.",
            variant: "destructive",
          });
        } else if (error.code === "23505") {
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