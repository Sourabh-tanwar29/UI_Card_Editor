import { useNavigate } from "react-router-dom";
import { CreditCard, ScanLine, FileText } from "lucide-react";
import { useState } from "react";
import ConsentModal from "./ConsentModal";

interface BottomNavProps {
  activeTab: "cards" | "scan" | "audit";
}

const BottomNav = ({ activeTab }: BottomNavProps) => {
  const navigate = useNavigate();
  const [showConsentModal, setShowConsentModal] = useState(false);

  const handleScanClick = () => {
    setShowConsentModal(true);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="max-w-md mx-auto flex items-center justify-around h-20 px-6">
          <button
            onClick={() => navigate("/my-cards")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "cards" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <CreditCard className="w-6 h-6" />
            <span className="text-xs font-medium">Cards</span>
          </button>

          <button
            onClick={handleScanClick}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "scan" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center -mt-6 shadow-lg">
              <ScanLine className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="text-xs font-medium mt-1">Scan</span>
          </button>

          <button
            onClick={() => navigate("/audit-log")}
            className={`flex flex-col items-center gap-1 transition-colors ${
              activeTab === "audit" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <FileText className="w-6 h-6" />
            <span className="text-xs font-medium">Audit</span>
          </button>
        </div>
      </div>

      <ConsentModal open={showConsentModal} onOpenChange={setShowConsentModal} />
    </>
  );
};

export default BottomNav;
