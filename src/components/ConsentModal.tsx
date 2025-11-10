import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Shield, Store } from "lucide-react";
import { toast } from "sonner";

interface ConsentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsentModal = ({ open, onOpenChange }: ConsentModalProps) => {
  const navigate = useNavigate();

  const handleApprove = () => {
    toast.success("Consent approved! Data shared securely.");
    onOpenChange(false);
    // In a real app, this would add the audit entry
    setTimeout(() => navigate("/audit-log"), 500);
  };

  const handleDeny = () => {
    toast.info("Consent denied. No data was shared.");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm rounded-3xl">
        <DialogHeader>
          <div className="w-16 h-16 bg-primary/10 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Store className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Consent Request
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="bg-secondary rounded-2xl p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-semibold text-foreground mb-1">
                  Store requests: Fashion Fit (Standard)
                </p>
                <p className="text-sm text-muted-foreground">
                  Requested fields: Brand sizes, Fit preference, MASKED contact
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Purpose:</span>{" "}
                Tailored fitting assistance for in-store purchase
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <Button
              onClick={handleApprove}
              className="w-full h-12 text-base font-semibold rounded-xl"
            >
              Approve — Standard
            </Button>
            <Button
              onClick={handleDeny}
              variant="outline"
              className="w-full h-12 text-base font-semibold rounded-xl"
            >
              Deny
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsentModal;
