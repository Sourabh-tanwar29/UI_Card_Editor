import { Progress } from "@/components/ui/progress";

interface CompletionIndicatorProps {
  percentage: number;
  className?: string;
}

const CompletionIndicator = ({ percentage, className = "" }: CompletionIndicatorProps) => {
  const getColor = () => {
    if (percentage >= 90) return "bg-purple-500";
    if (percentage >= 70) return "bg-yellow-500";
    if (percentage >= 50) return "bg-gray-400";
    return "bg-amber-600";
  };

  return (
    <div className={`space-y-1 ${className}`}>
      <div className="flex justify-between items-center">
        <span className="text-xs text-muted-foreground">Profile completion</span>
        <span className="text-xs font-semibold text-foreground">{percentage}%</span>
      </div>
      <Progress value={percentage} className="h-2" indicatorClassName={getColor()} />
    </div>
  );
};

export default CompletionIndicator;
