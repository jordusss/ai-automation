import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Facebook className="h-5 w-5" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Twitter className="h-5 w-5" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Linkedin className="h-5 w-5" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
};

export default SocialLinks;