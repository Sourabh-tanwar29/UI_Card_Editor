import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Coffee, Flame, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import CardBadge from "@/components/CardBadge";
import CompletionIndicator from "@/components/CompletionIndicator";

const FoodBeverage = () => {
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
                <h1 className="text-2xl font-bold text-foreground">Food & Beverage</h1>
                <CardBadge level="gold" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <CompletionIndicator percentage={88} />

          <div className="w-20 h-20 bg-primary rounded-3xl mx-auto flex items-center justify-center shadow-lg">
            <Coffee className="w-10 h-10 text-primary-foreground" />
          </div>

          <Card className="p-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-3">
                Dietary Preferences
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm">
                  🥗 Vegetarian
                </Badge>
                <Badge variant="secondary" className="text-sm flex items-center gap-1">
                  <Flame className="w-3 h-3" />
                  Spice level: 3/5
                </Badge>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="space-y-4">
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-amber-900 dark:text-amber-100 mb-1">
                        Allergens (FHIR Standard)
                      </p>
                      <p className="text-sm text-amber-800 dark:text-amber-200">
                        Nuts • High criticality
                      </p>
                      <p className="text-xs text-amber-700 dark:text-amber-300 mt-2">
                        Follows FHIR AllergyIntolerance structure for medical-grade accuracy
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Disliked Ingredients</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-xs">
                      Cilantro
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      Mushrooms
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Preference only • Not dangerous like allergens
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">My Usual Order</p>
                  <p className="font-medium text-foreground">
                    Oat latte, no sugar, extra shot
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Visible at Detailed level for regulars
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-secondary/50">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-foreground">Compliance & Standards</p>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">FHIR AllergyIntolerance:</span> Medical-grade data
                structure for healthcare interoperability
              </p>
              <p className="text-xs text-muted-foreground">
                <span className="font-medium">FSSAI 2020:</span> Compliant with India's allergen
                declaration requirements
              </p>
            </div>
          </Card>

          <Button
            onClick={() => navigate("/share-levels/food-beverage")}
            className="w-full h-12 rounded-xl font-semibold"
          >
            Set Share Level
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoodBeverage;
