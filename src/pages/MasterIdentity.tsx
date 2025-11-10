import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, User, MapPin, Shield, Eye, Mail, Phone, Globe } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import CardBadge from "@/components/CardBadge";
import CompletionIndicator from "@/components/CompletionIndicator";

const MasterIdentity = () => {
  const navigate = useNavigate();
  const [defaultShareLevel, setDefaultShareLevel] = useState("Basic");
  const [oneTapRevoke, setOneTapRevoke] = useState(true);

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
                <h1 className="text-2xl font-bold text-foreground">Master Identity</h1>
                <CardBadge level="gold" />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <CompletionIndicator percentage={85} />

          <div className="flex flex-col items-center gap-4">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-lg">
              <User className="w-12 h-12 text-white" />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground">Sam Singh</h2>
              <p className="text-sm text-muted-foreground">they/them</p>
            </div>
          </div>

          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide text-muted-foreground">
              Basic Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Location</p>
                  <p className="font-semibold text-foreground">Mumbai, India</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    City-level only • Exact address never shared
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Preferences</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">English</Badge>
                    <Badge variant="secondary">IST (UTC+5:30)</Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide text-muted-foreground">
              Contact Controls
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-mono text-sm text-foreground">****@gmail.com</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Masked at Standard level • Full at Detailed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-mono text-sm text-foreground">****5678</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Always masked unless Detailed consent
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6 space-y-4">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              Privacy Controls
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">Default share level</p>
                  <p className="text-sm text-muted-foreground">{defaultShareLevel}</p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-xl"
                  onClick={() => navigate("/share-levels/master-identity")}
                >
                  Change
                </Button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">One-tap revoke</p>
                  <p className="text-sm text-muted-foreground">
                    Quick access to revoke all
                  </p>
                </div>
                <Switch checked={oneTapRevoke} onCheckedChange={setOneTapRevoke} />
              </div>
            </div>
          </Card>

          <Button
            onClick={() => navigate("/audit-log")}
            variant="outline"
            className="w-full h-12 rounded-xl font-semibold"
          >
            <Eye className="w-5 h-5 mr-2" />
            View Audit Log
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MasterIdentity;
