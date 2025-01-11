import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";

interface MenuProps {
  menuItems: Array<{ label: string; href: string }>;
  handleClick: (href: string) => void;
}

const MobileMenu = ({ menuItems, handleClick }: MenuProps) => {
  return (
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
  );
};

export default MobileMenu;