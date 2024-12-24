import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Navbar = () => {
  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
          AIAgency
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/80">Get Started</Button>
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
                <a
                  key={item.label}
                  href={item.href}
                  className="text-lg font-medium text-foreground/60 hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/80 mt-4">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;