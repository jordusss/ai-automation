import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/components/Services";
import { serviceBenefits } from "@/data/serviceBenefits";
import ServiceHeader from "@/components/service/ServiceHeader";
import ServiceBenefits from "@/components/service/ServiceBenefits";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  if (!service || !slug) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <div className="fixed top-24 left-4 z-50">
        <Button
          variant="ghost"
          className="hover:bg-primary/10"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>
      </div>

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
        className="py-24 text-center"
      >
        <Button
          size="lg"
          className="bg-primary hover:bg-primary/80"
          onClick={() => navigate("/#contact")}
        >
          Get Started
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ServiceDetail;