import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useToast } from "../ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
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
        />
        <Button type="submit" className="w-full">
          Subscribe
        </Button>
      </form>
    </div>
  );
};

export default Newsletter;