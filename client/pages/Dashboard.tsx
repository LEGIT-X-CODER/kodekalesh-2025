import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  const stats = [
    {
      label: "Total Experiments",
      value: "3",
      icon: BarChart3,
      color: "border-neon-teal",
    },
    {
      label: "Active Tests",
      value: "2",
      icon: Activity,
      color: "border-purple-500",
    },
    {
      label: "Participants",
      value: "434",
      icon: Users,
      color: "border-pink-500",
    },
    {
      label: "Avg Validity",
      value: "65%",
      icon: CheckCircle,
      color: "border-neon-teal",
    },
  ];

  const experiments = [
    {
      id: 1,
      name: "Stroop Color Test",
      status: "Live",
      participants: 245,
      validity: 98,
    },
    {
      id: 2,
      name: "Reaction Time Study",
      status: "Live",
      participants: 189,
      validity: 97,
    },
    {
      id: 3,
      name: "Memory Recall Test",
      status: "Draft",
      participants: 0,
      validity: 0,
    },
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground font-mono mb-2">
            Dashboard
          </h1>
          <p className="text-muted-foreground font-mono">
            Manage your cognitive experiments
          </p>
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
                key={exp.id}
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
                  <span className="text-muted-foreground font-mono text-xs">
                    ID: #{exp.id}
                  </span>
                </div>

                {/* Experiment Name */}
                <h3 className="text-xl font-bold text-foreground font-mono mb-4">
                  {exp.name}
                </h3>

                {/* Stats */}
                <div className="space-y-2 mb-6 text-sm font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">
                      ⊙ {exp.participants} participants
                    </span>
                  </div>
                  {exp.validity > 0 && (
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">
                        ✓ {exp.validity}% validity
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 rounded border border-neon-teal/30 text-neon-teal hover:bg-neon-teal/10 transition-all font-mono text-sm font-bold flex items-center justify-center gap-2 group/btn">
                    <Play
                      size={16}
                      className="group-hover/btn:translate-x-0.5 transition-transform"
                    />
                    Run
                  </button>
                  <button className="flex-1 px-3 py-2 rounded border border-muted/30 text-muted-foreground hover:border-muted/60 transition-all font-mono text-sm font-bold flex items-center justify-center gap-2">
                    <Edit size={16} />
                    Edit
                  </button>
                  <button className="flex-1 px-3 py-2 rounded border border-muted/30 text-muted-foreground hover:border-destructive/60 hover:text-destructive transition-all font-mono text-sm font-bold flex items-center justify-center gap-2">
                    <Trash2 size={16} />
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
