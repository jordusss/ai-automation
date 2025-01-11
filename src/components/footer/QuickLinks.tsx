import { Link, useNavigate, useLocation } from "react-router-dom";

interface QuickLinksProps {
  scrollToSection: (sectionId: string) => void;
}

const QuickLinks = ({ scrollToSection }: QuickLinksProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If we're not on the homepage, navigate there first
      navigate('/', { state: { scrollTo: sectionId } });
    } else {
      // If we're already on the homepage, just scroll
      scrollToSection(sectionId);
    }
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Quick Links</h3>
      <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-primary transition-colors">Home</Link>
        <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
        <button 
          onClick={() => handleNavigation('services')} 
          className="text-left hover:text-primary transition-colors"
        >
          Services
        </button>
        <button 
          onClick={() => handleNavigation('contact')} 
          className="text-left hover:text-primary transition-colors"
        >
          Contact Us
        </button>
      </nav>
    </div>
  );
};

export default QuickLinks;