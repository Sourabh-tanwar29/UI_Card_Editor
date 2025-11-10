import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Plane, Bed, ArmchairIcon, Thermometer, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CardBadge from "@/components/CardBadge";
import CompletionIndicator from "@/components/CompletionIndicator";

const TravelHospitality = () => {
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
                <h1 className="text-2xl font-bold text-foreground">
                  Travel & Hospitality
                </h1>
                <CardBadge level="silver" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <CompletionIndicator percentage={65} />

          <div className="w-20 h-20 bg-accent rounded-3xl mx-auto flex items-center justify-center shadow-lg">
            <Plane className="w-10 h-10 text-white" />
          </div>

          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <ArmchairIcon className="w-5 h-5 text-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Seat Preference</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Window</Badge>
                  <Badge variant="secondary">Extra legroom</Badge>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-4 border-t border-border">
              <ArmchairIcon className="w-5 h-5 text-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Flight Preferences</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Meal Code</span>
                    <span className="text-muted-foreground">VGML (Vegan)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Boarding</span>
                    <span className="text-muted-foreground">Standard</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Bed className="w-5 h-5 text-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-3">Room Preferences</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Bed type</span>
                    <span className="text-muted-foreground">King size</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Floor</span>
                    <span className="text-muted-foreground">High floor</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">View</span>
                    <span className="text-muted-foreground">Ocean view</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">Pillow</span>
                    <span className="text-muted-foreground">Firm, hypoallergenic</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-border">
              <div className="flex items-start gap-3">
                <Thermometer className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-2">Room Temperature</p>
                  <p className="font-medium text-foreground">22-24°C (72-75°F)</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary mt-1" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">Service Notes</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      Late check-in preferred
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground">
                    Quiet room away from elevators
                  </p>
                  <p className="text-sm text-foreground">
                    Preferred contact: Email
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Button
            onClick={() => navigate("/share-levels/travel")}
            className="w-full h-12 rounded-xl font-semibold"
          >
            Set Share Level
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TravelHospitality;
