import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MenuProps {
  menuItems: Array<{ label: string; href: string }>;
  handleClick: (href: string) => void;
}

const DesktopMenu = ({ menuItems, handleClick }: MenuProps) => {
  return (
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
  );
};

export default DesktopMenu;