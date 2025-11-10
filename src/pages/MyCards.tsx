import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { User, Shirt, Coffee, Plane, Watch, Palette } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import CardBadge from "@/components/CardBadge";
import CompletionIndicator from "@/components/CompletionIndicator";

const MyCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: "master-identity",
      title: "Master Identity",
      subtitle: "Preferred name, contact controls, audit log",
      icon: User,
      color: "bg-primary",
      path: "/master-identity",
      badge: "gold" as const,
      completion: 85,
    },
    {
      id: "fashion-fit",
      title: "Fashion Fit",
      subtitle: "Brand-specific sizes, gifting mode",
      icon: Shirt,
      color: "bg-accent",
      path: "/fashion-fit",
      badge: "silver" as const,
      completion: 70,
    },
    {
      id: "food-beverage",
      title: "Food & Beverage",
      subtitle: "Dietary icons, allergens (FHIR)",
      icon: Coffee,
      color: "bg-primary",
      path: "/food-beverage",
      badge: "gold" as const,
      completion: 88,
    },
    {
      id: "travel",
      title: "Travel & Hospitality",
      subtitle: "Room and seat preferences",
      icon: Plane,
      color: "bg-accent",
      path: "/travel",
      badge: "silver" as const,
      completion: 65,
    },
    {
      id: "jewelry",
      title: "Jewelry & Watch Fit",
      subtitle: "Ring sizes, wrist measurements, metal allergies",
      icon: Watch,
      color: "bg-primary",
      path: "/jewelry",
      badge: "bronze" as const,
      completion: 40,
    },
    {
      id: "color-style",
      title: "Color & Style",
      subtitle: "Personal palette, style DNA, fabric preferences",
      icon: Palette,
      color: "bg-accent",
      path: "/color-style",
      badge: "silver" as const,
      completion: 75,
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="max-w-md mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">My Cards</h1>
          <p className="text-muted-foreground">
            Manage your preference cards and privacy settings
          </p>
        </div>

        <div className="space-y-4">
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Card
                key={card.id}
                onClick={() => navigate(card.path)}
                className="p-5 cursor-pointer hover:shadow-lg transition-all duration-200 border-border"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className={`w-14 h-14 ${card.color} rounded-2xl flex items-center justify-center flex-shrink-0`}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-semibold text-foreground text-lg">
                        {card.title}
                      </h3>
                      <CardBadge level={card.badge} />
                    </div>
                    <p className="text-sm text-muted-foreground">{card.subtitle}</p>
                  </div>
                </div>
                <CompletionIndicator percentage={card.completion} />
              </Card>
            );
          })}
        </div>
      </div>

      <BottomNav activeTab="cards" />
    </div>
  );
};

export default MyCards;
