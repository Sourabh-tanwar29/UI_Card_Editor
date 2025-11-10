import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Watch, AlertTriangle, Ruler } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CardBadge from "@/components/CardBadge";
import CompletionIndicator from "@/components/CompletionIndicator";

const JewelryFit = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto">
        <div className="sticky top-0 bg-background border-b border-border z-10">
          <div className="flex items-center gap-4 p-4">
            <button
              onClick={() => navigate("/my-cards")}
              className="p-2 hover:bg-secondary rounded-xl transition-colors"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-foreground">Jewelry & Watch Fit</h1>
                <CardBadge level="bronze" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <CompletionIndicator percentage={40} />

          <div className="w-20 h-20 bg-primary rounded-3xl mx-auto flex items-center justify-center shadow-lg">
            <Watch className="w-10 h-10 text-primary-foreground" />
          </div>

          <Card className="p-6 bg-destructive/10 border-destructive/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-destructive mb-1">Metal Allergy Warning</p>
                <p className="text-sm text-destructive/90">
                  Nickel sensitivity detected. Only hypoallergenic metals recommended.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Ruler className="w-5 h-5 text-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-3">Ring Sizing (ISO 8653)</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Left Ring Finger</span>
                    <span className="text-muted-foreground">US 7 (54mm)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Right Ring Finger</span>
                    <span className="text-muted-foreground">US 7 (54mm)</span>
                  </div>
                  <p className="text-xs text-muted-foreground pt-2">
                    Note: Size up for knuckle if needed
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex items-start gap-3">
                <Watch className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">Wrist Measurements</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Circumference</span>
                      <span className="text-muted-foreground">16.5cm</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">Preferred fit</span>
                      <span className="text-muted-foreground">Snug</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-3">
            <p className="text-sm text-muted-foreground">Style Preferences</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Minimal</Badge>
              <Badge variant="secondary">White gold</Badge>
              <Badge variant="secondary">No gemstones</Badge>
            </div>
          </Card>

          <Button
            onClick={() => navigate("/share-levels/jewelry")}
            className="w-full h-12 rounded-xl font-semibold"
          >
            Set Share Level
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JewelryFit;
