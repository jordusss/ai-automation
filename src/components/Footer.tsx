import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-sm text-foreground/60 text-center md:text-left">
              Empowering businesses through intelligent automation
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link 
              to="/privacy" 
              className="text-sm text-foreground/60 hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <p className="text-sm text-foreground/60">
              © 2025 AI Automation B.V. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;