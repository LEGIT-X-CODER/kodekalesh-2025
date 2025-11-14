import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

export default function Admin() {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-24 pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold font-mono mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Admin Panel
        </motion.h1>
        <motion.p
          className="text-muted-foreground font-mono mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          Signed in as {user?.email}
        </motion.p>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
            <h3 className="text-xl font-bold font-mono mb-2">All Experiments</h3>
            <p className="text-sm font-mono text-muted-foreground">View and manage experiments created by all users.</p>
          </div>
          <div className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
            <h3 className="text-xl font-bold font-mono mb-2">Participants</h3>
            <p className="text-sm font-mono text-muted-foreground">Access global participant data and validity scores.</p>
          </div>
          <div className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
            <h3 className="text-xl font-bold font-mono mb-2">Analytics</h3>
            <p className="text-sm font-mono text-muted-foreground">System-wide analytics including RT plots and heatmaps.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
