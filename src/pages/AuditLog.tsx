import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ScanLine, XCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuditEntry } from "@/App";
import { toast } from "sonner";
import BottomNav from "@/components/BottomNav";

interface AuditLogProps {
  entries: AuditEntry[];
  setEntries: React.Dispatch<React.SetStateAction<AuditEntry[]>>;
}

const AuditLog = ({ entries, setEntries }: AuditLogProps) => {
  const navigate = useNavigate();

  const handleRevoke = (id: string, storeName: string) => {
    setEntries((prev) => [
      {
        id: Date.now().toString(),
        storeName,
        cardType: "All Cards",
        shareLevel: "Revoked",
        timestamp: new Date().toLocaleString(),
        action: "revoke",
      },
      ...prev,
    ]);
    toast.success("Consent revoked successfully");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
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
              <h1 className="text-2xl font-bold text-foreground">Audit Log</h1>
              <p className="text-sm text-muted-foreground">
                Your data sharing history
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {entries.length === 0 ? (
            <Card className="p-8 text-center">
              <Clock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">No audit entries yet</p>
            </Card>
          ) : (
            entries.map((entry) => (
              <Card key={entry.id} className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                      entry.action === "scan"
                        ? "bg-primary/10"
                        : "bg-destructive/10"
                    }`}
                  >
                    {entry.action === "scan" ? (
                      <ScanLine
                        className={`w-6 h-6 ${
                          entry.action === "scan"
                            ? "text-primary"
                            : "text-destructive"
                        }`}
                      />
                    ) : (
                      <XCircle className="w-6 h-6 text-destructive" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <p className="font-semibold text-foreground">
                          {entry.storeName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {entry.cardType} • {entry.shareLevel}
                        </p>
                      </div>
                      {entry.action === "scan" && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleRevoke(entry.id, entry.storeName)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 rounded-xl"
                        >
                          Revoke
                        </Button>
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {entry.timestamp}
                    </p>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>

      <BottomNav activeTab="audit" />
    </div>
  );
};

export default AuditLog;
