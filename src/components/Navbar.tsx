import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";
import DesktopMenu from "./nav/DesktopMenu";
import MobileMenu from "./nav/MobileMenu";

const Navbar = () => {
  const location = useLocation();
  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  const handleClick = (href: string) => {
    if (href.startsWith('#')) {
      // If we're not on the homepage, navigate there first
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
        return;
      }
      
      // If we're already on homepage, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        <DesktopMenu menuItems={menuItems} handleClick={handleClick} />
        <MobileMenu menuItems={menuItems} handleClick={handleClick} />
      </div>
    </nav>
  );
};

export default Navbar;