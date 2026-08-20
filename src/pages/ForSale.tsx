import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
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

const points = [
  {
    title: "Says what you do",
    description:
      "No explaining, no spelling it out on the phone. Two words your customers already type into Google, and one of them is your entire industry.",
  },
  {
    title: "Dutch by default",
    description:
      "A .nl carries weight with Benelux buyers and procurement teams. It reads as a company that is here, registered, and not going anywhere.",
  },
  {
    title: "Yours within days",
    description:
      "Clean history, no trademark disputes, no baggage. Agree on a number and the transfer is done before the week is out.",
  },
];

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
});

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
    <main className="min-h-screen flex flex-col justify-center px-6 py-24 md:py-32">
      <div className="w-full max-w-3xl mx-auto">
        <motion.p
          {...fade(0)}
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-muted-foreground"
        >
          This domain is for sale · One owner only
        </motion.p>

        <motion.h1
          {...fade(0.08)}
          className="mt-8 text-[clamp(2.5rem,9vw,6rem)] leading-[0.95] font-semibold break-words"
        >
          ai-automation.nl
        </motion.h1>

        <motion.p
          {...fade(0.16)}
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
        >
          The whole category in one address. Short enough to say out loud,
          obvious enough that nobody forgets it, and available today — to
          exactly one company.
        </motion.p>

        <motion.div
          {...fade(0.24)}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Button asChild size="lg" className="rounded-none px-8">
            <a href={mailtoHref}>Make an offer</a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={copyEmail}
            className="rounded-none px-8"
          >
            {copied ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            {copied ? "Copied" : "Copy email address"}
          </Button>
        </motion.div>

        <div className="mt-20">
          {points.map((point, index) => (
            <motion.section
              key={point.title}
              {...fade(0.32 + index * 0.06)}
              className="hairline grid grid-cols-1 md:grid-cols-[14rem_1fr] gap-2 md:gap-8 py-6"
            >
              <h2 className="text-base font-semibold">{point.title}</h2>
              <p className="text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </motion.section>
          ))}
          <div className="hairline" />
        </div>

        <motion.footer
          {...fade(0.56)}
          className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-sm text-muted-foreground"
        >
          <span>Serious enquiries only</span>
          <a
            href={mailtoHref}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {OWNER_EMAIL}
          </a>
        </motion.footer>
      </div>
    </main>
  );
};

export default ForSale;
