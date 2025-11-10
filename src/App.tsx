import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Onboarding from "./pages/Onboarding";
import MyCards from "./pages/MyCards";
import MasterIdentity from "./pages/MasterIdentity";
import FashionFit from "./pages/FashionFit";
import FoodBeverage from "./pages/FoodBeverage";
import TravelHospitality from "./pages/TravelHospitality";
import JewelryFit from "./pages/JewelryFit";
import ColorStyle from "./pages/ColorStyle";
import AuditLog from "./pages/AuditLog";
import ShareLevels from "./pages/ShareLevels";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export interface AuditEntry {
  id: string;
  storeName: string;
  cardType: string;
  shareLevel: string;
  timestamp: string;
  action: "scan" | "revoke";
}

function App() {
  const [auditLog, setAuditLog] = useState<AuditEntry[]>([
    {
      id: "1",
      storeName: "Zara_Store_021",
      cardType: "Fashion Fit",
      shareLevel: "Standard",
      timestamp: "2025-11-09 18:23",
      action: "scan",
    },
    {
      id: "2",
      storeName: "Cafe_Blue",
      cardType: "Food Card",
      shareLevel: "Basic",
      timestamp: "2025-11-08 08:15",
      action: "scan",
    },
  ]);

  const addAuditEntry = (entry: Omit<AuditEntry, "id">) => {
    const newEntry = {
      ...entry,
      id: Date.now().toString(),
    };
    setAuditLog((prev) => [newEntry, ...prev]);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Onboarding />} />
            <Route path="/my-cards" element={<MyCards />} />
            <Route path="/master-identity" element={<MasterIdentity />} />
            <Route path="/fashion-fit" element={<FashionFit />} />
            <Route path="/food-beverage" element={<FoodBeverage />} />
            <Route path="/travel" element={<TravelHospitality />} />
            <Route path="/jewelry" element={<JewelryFit />} />
            <Route path="/color-style" element={<ColorStyle />} />
            <Route
              path="/audit-log"
              element={<AuditLog entries={auditLog} setEntries={setAuditLog} />}
            />
            <Route
              path="/share-levels/:cardType"
              element={<ShareLevels addAuditEntry={addAuditEntry} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
