import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { db } from "@/lib/firebase";
import { doc, getDoc, collection, query, where, getDocs } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";
import {
  Plus,
  Play,
  Edit,
  Trash2,
  BarChart3,
  Activity,
  Users,
  CheckCircle,
} from "lucide-react";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const userQ = useQuery({
    queryKey: ["user", user?.uid],
    queryFn: async () => {
      if (!user?.uid) return null as any;
      const snap = await getDoc(doc(db, "users", user.uid));
      return snap.exists() ? snap.data() : null;
    },
    enabled: !!user?.uid,
  });
  const expsQ = useQuery({
    queryKey: ["experiments", user?.uid],
    queryFn: async () => {
      if (!user?.uid) return [] as any[];
      const q = query(collection(db, "experiments"), where("createdBy", "==", user.uid));
      const snaps = await getDocs(q);
      return snaps.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
    },
    enabled: !!user?.uid,
  });
  const experiments = (expsQ.data as any[]) ?? [];
  const total = experiments.length;
  const active = experiments.filter((e) => e.status === "Live").length;
  const avgValidity = experiments.length
    ? Math.round(
        experiments
          .map((e) => Number(e.validity ?? 0))
          .reduce((a, b) => a + b, 0) / experiments.length
      ) + "%"
    : "—";
  const stats = [
    {
      label: "Total Experiments",
      value: String(total || "0"),
      icon: BarChart3,
      color: "border-neon-teal",
    },
    {
      label: "Active Tests",
      value: String(active || "0"),
      icon: Activity,
      color: "border-purple-500",
    },
    {
      label: "Avg Validity",
      value: avgValidity,
      icon: CheckCircle,
      color: "border-neon-teal",
    },
  ];

  const userDoc: any = userQ.data ?? null;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="px-6 py-8 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-mono mb-2">Dashboard</h1>
              <p className="text-muted-foreground font-mono">Manage your cognitive experiments</p>
            </div>
            {user && (
              <button
                onClick={logout}
                className="px-4 py-2 rounded bg-red-500 text-white font-mono font-semibold text-sm hover:bg-red-600 transition-all duration-300"
              >
                Logout
              </button>
            )}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid md:grid-cols-4 gap-4 mb-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                className={`p-6 rounded border ${stat.color} border-opacity-30 bg-card/50 backdrop-blur hover:border-opacity-100 transition-all duration-300`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-muted-foreground font-mono text-sm mb-2">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-bold text-foreground font-mono">
                      {stat.value}
                    </p>
                  </div>
                  <div
                    className={`w-10 h-10 rounded border ${stat.color} border-opacity-50 flex items-center justify-center`}
                  >
                    <Icon
                      className={
                        stat.color === "border-neon-teal"
                          ? "text-neon-teal"
                          : "text-purple-500"
                      }
                      size={20}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Experiments Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground font-mono">
              Your Experiments
            </h2>
            <Link
              to="/builder"
              className="px-4 py-2 rounded bg-neon-teal text-black font-mono font-bold text-sm hover:shadow-glow transition-all duration-300 flex items-center gap-2"
            >
              <Plus size={18} />
              New Experiment
            </Link>
          </div>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {experiments.map((exp) => (
              <motion.div
                key={String(exp.id)}
                variants={item}
                className="p-6 rounded border border-border/50 bg-card/50 backdrop-blur hover:border-neon-teal/50 transition-all duration-300 group"
              >
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-mono font-bold px-2 py-1 rounded border ${
                      exp.status === "Live"
                        ? "border-neon-teal/50 text-neon-teal bg-neon-teal/10"
                        : "border-muted/50 text-muted-foreground bg-muted/10"
                    }`}
                  >
                    {exp.status === "Live" ? "● Live" : "◐ Draft"}
                  </span>
                  {exp.id && (
                    <span className="text-muted-foreground font-mono text-xs">ID: #{String(exp.id)}</span>
                  )}
                </div>

                {/* Experiment Name */}
                <h3 className="text-xl font-bold text-foreground font-mono mb-4">
                  {exp.name}
                </h3>

                {/* Stats */}
                  <div className="space-y-2 mb-6 text-sm font-mono">
                    {Number(exp.validity ?? 0) > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">
                          ✓ {exp.validity}% validity
                        </span>
                      </div>
                    )}
                  </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link to="/experiments" className="flex-1 px-3 py-2 rounded border border-neon-teal/30 text-neon-teal hover:bg-neon-teal/10 transition-all font-mono text-sm font-bold flex items-center justify-center gap-2 group/btn">
                    <Play
                      size={16}
                      className="group-hover/btn:translate-x-0.5 transition-transform"
                    />
                    Run
                  </Link>
                  <Link to="/builder" className="flex-1 px-3 py-2 rounded border border-muted/30 text-muted-foreground hover:border-muted/60 transition-all font-mono text-sm font-bold flex items-center justify-center gap-2">
                    <Edit size={16} />
                    Edit
                  </Link>
                  <button className="flex-1 px-3 py-2 rounded border border-muted/30 text-muted-foreground hover:border-destructive/60 hover:text-destructive transition-all font-mono text-sm font-bold flex items-center justify-center gap-2">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-12"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="p-6 rounded border border-border/50 bg-card/50 backdrop-blur">
            <h3 className="text-xl font-bold text-foreground font-mono mb-3">Profile</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="flex items-center justify-between"><span className="text-muted-foreground">Name</span><span>{(userDoc?.displayName ?? user?.displayName) ?? "—"}</span></div>
              <div className="flex items-center justify-between"><span className="text-muted-foreground">Email</span><span>{(userDoc?.email ?? user?.email) ?? "—"}</span></div>
              <div className="flex items-center justify-between"><span className="text-muted-foreground">UID</span><span className="truncate max-w-[180px]">{user?.uid ?? "—"}</span></div>
            </div>
          </motion.div>

          <motion.div variants={item} className="p-6 rounded border border-border/50 bg-card/50 backdrop-blur">
            <h3 className="text-xl font-bold text-foreground font-mono mb-3">Analytics</h3>
            <div className="space-y-2 text-sm font-mono">
              <div className="px-3 py-2 rounded border border-border/40">RT plots</div>
              <div className="px-3 py-2 rounded border border-border/40">Accuracy graphs</div>
              <div className="px-3 py-2 rounded border border-border/40">Heatmaps</div>
              <button className="w-full mt-2 px-3 py-2 rounded border border-neon-teal/40 text-neon-teal hover:bg-neon-teal/10">Export CSV</button>
            </div>
          </motion.div>

          <motion.div variants={item} className="p-6 rounded border border-border/50 bg-card/50 backdrop-blur">
            <h3 className="text-xl font-bold text-foreground font-mono mb-3">Certificates</h3>
            <div className="flex gap-2">
              <span className="px-3 py-2 rounded border border-neon-teal/40 text-neon-teal font-mono text-sm">NFT Badge: Stroop</span>
              <span className="px-3 py-2 rounded border border-neon-teal/40 text-neon-teal font-mono text-sm">NFT Badge: RT</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
