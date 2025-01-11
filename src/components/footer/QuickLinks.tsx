import { Link, useLocation } from "react-router-dom";

interface QuickLinksProps {
  scrollToSection: (sectionId: string) => void;
}

const QuickLinks = ({ scrollToSection }: QuickLinksProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Quick Links</h3>
      <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
        <button 
          onClick={() => scrollToSection('services')} 
          className="text-left hover:text-primary transition-colors"
        >
          Services
        </button>
        <button 
          onClick={() => scrollToSection('contact')} 
          className="text-left hover:text-primary transition-colors"
        >
          Contact Us
        </button>
      </nav>
    </div>
  );
};

export default QuickLinks;