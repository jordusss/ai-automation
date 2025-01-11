import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ServiceDetail from "./pages/ServiceDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="relative min-h-screen bg-background text-foreground overflow-hidden flex flex-col">
        {/* Background gradient */}
        <div className="fixed inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-background to-blue-500/20 opacity-30" />
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.2),transparent_50%)]"
          />
        </div>
        {/* Particle background with lower z-index */}
        <div className="fixed inset-0 -z-10">
          <ParticleBackground />
        </div>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <main className="flex-1 relative">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;