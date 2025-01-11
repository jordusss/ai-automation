import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/components/Services";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ServiceHeader from "@/components/service/ServiceHeader";
import ServiceBenefits from "@/components/service/ServiceBenefits";
import { serviceBenefits } from "@/data/serviceBenefits";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service || !slug) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          className="mb-8 hover:bg-primary/10"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <ServiceHeader
          title={service.title}
          description={service.description}
          slug={service.slug}
        />

        <ServiceBenefits benefits={serviceBenefits[slug]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/80"
            onClick={() => navigate("/#contact")}
          >
            Get Started <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;