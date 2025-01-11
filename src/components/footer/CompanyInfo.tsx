import { MapPin, Phone, Mail } from "lucide-react";

const CompanyInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">AI Automation B.V.</h3>
      <div className="space-y-2 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Rotterdam, The Netherlands</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <span>+31650869114</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="h-4 w-4" />
          <a href="mailto:info@ai-automation.nl" className="hover:text-primary transition-colors">
            info@ai-automation.nl
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;