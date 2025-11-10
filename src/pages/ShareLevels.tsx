import { useNavigate, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { AuditEntry } from "@/App";

interface ShareLevelsProps {
  addAuditEntry: (entry: Omit<AuditEntry, "id">) => void;
}

const ShareLevels = ({ addAuditEntry }: ShareLevelsProps) => {
  const navigate = useNavigate();
  const { cardType } = useParams();
  const [selectedLevel, setSelectedLevel] = useState<string>("Standard");

  const levels = [
    {
      id: "basic",
      title: "Basic",
      description: "Minimal information for public contexts",
      details:
        "First name only, city without address, derived sizes without body measurements. No consent needed.",
    },
    {
      id: "standard",
      title: "Standard",
      description: "Contextual information for service providers",
      details:
        "Full name, brand-specific sizes, dietary preferences without medical details. Requires one-time consent per interaction.",
    },
    {
      id: "detailed",
      title: "Detailed",
      description: "Complete information for trusted relationships",
      details:
        "Exact measurements, medical allergies, contact information, loyalty numbers. Always requires explicit consent with clear purpose statement.",
    },
  ];

  const handleSave = () => {
    toast.success("Share level updated successfully");
    navigate(-1);
  };

  const getCardTitle = () => {
    switch (cardType) {
      case "fashion-fit":
        return "Fashion Fit";
      case "food-beverage":
        return "Food & Beverage";
      case "travel":
        return "Travel & Hospitality";
      case "master-identity":
        return "Master Identity";
      case "jewelry":
        return "Jewelry & Watch Fit";
      case "color-style":
        return "Color & Style";
      default:
        return cardType;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 bg-background border-b border-border z-10">
          <div className="flex items-center gap-4 p-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-foreground">{getCardTitle()}</h1>
              <p className="text-sm text-muted-foreground">Share Levels</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-foreground">
              Choose how much to share
            </h2>
            <p className="text-sm text-muted-foreground">
              Select the default sharing level for this card. You can always approve or
              deny specific requests.
            </p>
          </div>

          <div className="space-y-3">
            {levels.map((level) => {
              const isSelected = selectedLevel === level.title;
              return (
                <Card
                  key={level.id}
                  onClick={() => setSelectedLevel(level.title)}
                  className={`p-5 cursor-pointer transition-all ${
                    isSelected
                      ? "border-primary bg-primary/5 shadow-md"
                      : "hover:bg-secondary/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-1 transition-colors ${
                        isSelected
                          ? "border-primary bg-primary"
                          : "border-muted-foreground"
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4 text-white" />}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {level.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {level.description}
                      </p>
                      <p className="text-xs text-muted-foreground">{level.details}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <Button
            onClick={handleSave}
            className="w-full h-12 rounded-xl font-semibold"
          >
            Save Preferences
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShareLevels;
