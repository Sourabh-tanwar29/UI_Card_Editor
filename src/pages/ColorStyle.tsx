import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Palette, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CardBadge from "@/components/CardBadge";
import CompletionIndicator from "@/components/CompletionIndicator";

const ColorStyle = () => {
  const navigate = useNavigate();

  const preferredColors = [
    { name: "Navy", hex: "#1e3a8a" },
    { name: "Olive", hex: "#65a30d" },
    { name: "Charcoal", hex: "#374151" },
    { name: "Burgundy", hex: "#991b1b" },
    { name: "Cream", hex: "#fef3c7" },
  ];

  const avoidColors = [
    { name: "Neon", hex: "#00ff00" },
    { name: "Pastel Pink", hex: "#fecdd3" },
    { name: "Bright Orange", hex: "#fb923c" },
  ];

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
                <h1 className="text-2xl font-bold text-foreground">Color & Style</h1>
                <CardBadge level="silver" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <CompletionIndicator percentage={75} />

          <div className="w-20 h-20 bg-accent rounded-3xl mx-auto flex items-center justify-center shadow-lg">
            <Palette className="w-10 h-10 text-white" />
          </div>

          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-3">Style DNA</p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="text-sm bg-primary">Minimal</Badge>
                  <Badge variant="secondary" className="text-sm">
                    Classic
                  </Badge>
                  <Badge variant="secondary" className="text-sm">
                    Modern
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">Preferred Colors</p>
              <div className="flex flex-wrap gap-3">
                {preferredColors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 rounded-xl shadow-sm border border-border"
                      style={{ backgroundColor: color.hex }}
                    />
                    <span className="text-xs text-muted-foreground">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Hard Avoid</p>
              <div className="flex flex-wrap gap-3">
                {avoidColors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center gap-2">
                    <div
                      className="w-14 h-14 rounded-xl shadow-sm border-2 border-destructive relative"
                      style={{ backgroundColor: color.hex }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-0.5 bg-destructive rotate-45" />
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-3">
            <p className="text-sm text-muted-foreground">Fabric Preferences</p>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">Love</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  <Badge variant="secondary" className="text-xs">
                    Cotton
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Linen
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Merino
                  </Badge>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-foreground">Avoid</span>
                <div className="flex flex-wrap gap-1 justify-end">
                  <Badge variant="outline" className="text-xs">
                    Polyester
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    Acrylic
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          <Button
            onClick={() => navigate("/share-levels/color-style")}
            className="w-full h-12 rounded-xl font-semibold"
          >
            Set Share Level
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ColorStyle;
