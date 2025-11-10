import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

interface CardBadgeProps {
  level: "bronze" | "silver" | "gold" | "platinum";
  className?: string;
}

const CardBadge = ({ level, className = "" }: CardBadgeProps) => {
  const badges = {
    bronze: {
      color: "bg-amber-600",
      text: "Bronze",
      description: "Basic information",
    },
    silver: {
      color: "bg-gray-400",
      text: "Silver",
      description: "Standard fields completed",
    },
    gold: {
      color: "bg-yellow-500",
      text: "Gold",
      description: "Detailed information",
    },
    platinum: {
      color: "bg-purple-500",
      text: "Platinum",
      description: "Complete + verified",
    },
  };

  const badge = badges[level];

  return (
    <Badge
      variant="secondary"
      className={`${badge.color} text-white flex items-center gap-1 ${className}`}
    >
      <Award className="w-3 h-3" />
      {badge.text}
    </Badge>
  );
};

export default CardBadge;
