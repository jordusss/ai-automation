import { Link } from "react-router-dom";

const LegalLinks = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Legal</h3>
      <nav className="flex flex-col space-y-2 text-sm text-muted-foreground">
        <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
      </nav>
    </div>
  );
};

export default LegalLinks;