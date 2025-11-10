import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Lock, Eye } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <div className="w-20 h-20 bg-primary rounded-3xl mx-auto flex items-center justify-center shadow-lg">
            <Shield className="w-10 h-10 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-foreground">Welcome to Hushh</h1>
          <p className="text-xl text-muted-foreground">
            Privacy-first preference cards that travel with you.
          </p>
        </div>

        <div className="space-y-6 pt-8">
          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Create cards</h3>
              <p className="text-sm text-muted-foreground">
                Store your preferences securely in one place
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Control sharing</h3>
              <p className="text-sm text-muted-foreground">
                Choose exactly what to share with each brand
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 text-left">
            <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center flex-shrink-0">
              <Eye className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Revoke anytime</h3>
              <p className="text-sm text-muted-foreground">
                Full control over your data, always
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <Button
            onClick={() => navigate("/my-cards")}
            className="w-full h-14 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
