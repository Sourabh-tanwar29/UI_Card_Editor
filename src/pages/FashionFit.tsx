import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shirt, Lock, Gift } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import CardBadge from "@/components/CardBadge";
import CompletionIndicator from "@/components/CompletionIndicator";

const FashionFit = () => {
  const navigate = useNavigate();
  const [giftingMode, setGiftingMode] = useState(true);

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
                <h1 className="text-2xl font-bold text-foreground">Fashion Fit</h1>
                <CardBadge level="silver" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <CompletionIndicator percentage={70} />

          <div className="w-20 h-20 bg-accent rounded-3xl mx-auto flex items-center justify-center shadow-lg">
            <Shirt className="w-10 h-10 text-white" />
          </div>

          <Card className="p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Brand Sizes</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Zara</span>
                  <span className="text-muted-foreground">M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">H&M</span>
                  <span className="text-muted-foreground">L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">Jeans</span>
                  <span className="text-muted-foreground">32x30</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  Fit: Regular
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Cotton preferred
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Avoid slim fit
                </Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Gift className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Gifting Safe Mode</p>
                  <p className="text-xs text-muted-foreground">
                    Show sizes without body measurements
                  </p>
                </div>
              </div>
              <Switch checked={giftingMode} onCheckedChange={setGiftingMode} />
            </div>
            {giftingMode && (
              <div className="bg-secondary/50 rounded-xl p-3">
                <p className="text-sm text-muted-foreground">
                  Friends scanning for gifts will see your sizes (Tee: M, Jacket: L) but not
                  your body measurements—perfect for surprises!
                </p>
              </div>
            )}
          </Card>

          <Card className="p-6 space-y-3">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <p className="text-sm font-medium">ISO 8559-2 mapped measurements</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Body measurements follow ISO standards for global compatibility. Precise data is
              encrypted and only shared with explicit Detailed consent.
            </p>
          </Card>

          <Button
            onClick={() => navigate("/share-levels/fashion-fit")}
            className="w-full h-12 rounded-xl font-semibold"
          >
            Set Share Level
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FashionFit;
