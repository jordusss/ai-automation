import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForSale from "./pages/ForSale";

const App = () => (
  <TooltipProvider>
    <div className="min-h-screen bg-background text-foreground">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<ForSale />} />
        </Routes>
      </BrowserRouter>
    </div>
  </TooltipProvider>
);

export default App;
