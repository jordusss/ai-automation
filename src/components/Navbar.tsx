import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            item.href.startsWith('#') ? (
              <button
                key={item.label}
                onClick={() => handleClick(item.href)}
                className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.href}
                className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          ))}
          <Button 
            onClick={() => handleClick('#contact')} 
            className="bg-primary hover:bg-primary/80"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {menuItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.label}
                    onClick={() => handleClick(item.href)}
                    className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )
              ))}
              <Button 
                onClick={() => handleClick('#contact')} 
                className="bg-primary hover:bg-primary/80 mt-4"
              >
                Get Started
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;