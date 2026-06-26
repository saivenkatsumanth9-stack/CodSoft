import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string | null;
  message: string;
  created_at: string;
}

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const load = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/auth");
        return;
      }
      const { data, error } = await supabase.functions.invoke("admin-messages");
      if (error) {
        setError(error.message);
      } else if (data?.error) {
        setError(data.error);
      } else {
        setMessages(data?.messages ?? []);
      }
      setLoading(false);
    };
    load();

    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/auth");
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground p-6 lg:p-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-display text-3xl font-bold">Contact Messages</h1>
            <p className="text-muted-foreground text-sm mt-1">Admin-only inbox</p>
          </div>
          <Button
            variant="outline"
            onClick={async () => {
              await supabase.auth.signOut();
              navigate("/auth");
            }}
          >
            Sign out
          </Button>
        </div>

        {loading && <p className="text-muted-foreground">Loading…</p>}
        {error && (
          <Card className="p-6 border-destructive/50">
            <p className="text-destructive font-medium">Access error</p>
            <p className="text-sm text-muted-foreground mt-2">{error}</p>
          </Card>
        )}
        {!loading && !error && messages.length === 0 && (
          <p className="text-muted-foreground">No messages yet.</p>
        )}

        <div className="space-y-4">
          {messages.map((m) => (
            <Card key={m.id} className="p-6 glass">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="font-semibold text-lg">
                  {m.subject || "(no subject)"}
                </h2>
                <span className="text-xs text-muted-foreground">
                  {new Date(m.created_at).toLocaleString()}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                From <span className="text-foreground font-medium">{m.name}</span>{" "}
                &lt;{m.email}&gt;
              </p>
              <p className="whitespace-pre-wrap leading-relaxed">{m.message}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Admin;