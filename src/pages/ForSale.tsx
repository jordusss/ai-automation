import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check, Sparkles, Globe, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const OWNER_EMAIL = "debruijn.jordy@gmail.com";
const SUBJECT = "New bid on ai-automation.nl";
const BODY = `Hi Jordy,

I'm interested in acquiring ai-automation.nl.

My offer: EUR 
Name: 
Company (optional): 
Preferred contact: 

Looking forward to hearing from you.`;

const mailtoHref = `mailto:${OWNER_EMAIL}?subject=${encodeURIComponent(
  SUBJECT
)}&body=${encodeURIComponent(BODY)}`;

const highlights = [
  {
    icon: Sparkles,
    title: "Exact-match keywords",
    description: "\"AI\" + \"automation\" — the two words the whole market searches for.",
  },
  {
    icon: Globe,
    title: ".nl authority",
    description: "A trusted ccTLD with instant credibility in the Benelux market.",
  },
  {
    icon: Zap,
    title: "Immediate transfer",
    description: "Clean history, no encumbrances. Handover within days of agreement.",
  },
];

const ForSale = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(OWNER_EMAIL);
      setCopied(true);
      toast({ title: "Email copied", description: OWNER_EMAIL });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "Could not copy",
        description: OWNER_EMAIL,
        variant: "destructive",
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="w-full max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-glow" />
          Premium domain · For sale
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary via-blue-500 to-purple-600 break-words"
        >
          ai-automation.nl
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto"
        >
          A short, exact-match Dutch domain for the fastest-growing category in tech.
          Instantly credible for anyone building in AI automation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/80 shadow-lg shadow-primary/20"
          >
            <a href={mailtoHref}>
              <Mail className="mr-2 h-5 w-5" />
              Make an offer
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={copyEmail}
            className="border-primary/50 text-primary hover:bg-primary/10"
          >
            {copied ? (
              <Check className="mr-2 h-5 w-5" />
            ) : (
              <Copy className="mr-2 h-5 w-5" />
            )}
            {copied ? "Copied" : "Copy email address"}
          </Button>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <item.icon className="h-6 w-6 text-primary relative z-10" />
              <h2 className="mt-4 text-base font-semibold relative z-10">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-foreground/60 relative z-10">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-sm text-muted-foreground"
        >
          Serious offers only ·{" "}
          <a
            href={mailtoHref}
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            {OWNER_EMAIL}
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default ForSale;
