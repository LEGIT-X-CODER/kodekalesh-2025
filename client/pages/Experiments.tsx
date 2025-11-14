import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Palette, Layers, Ban, Eye, Brain } from "lucide-react";

export default function Experiments() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const experiments = [
    {
      title: "Reaction Time Task",
      desc: "Measure reflex latency with high-precision timing.",
      difficulty: "Beginner",
      icon: Zap,
    },
    {
      title: "Stroop Task",
      desc: "Test interference by color–word mismatches.",
      difficulty: "Intermediate",
      icon: Palette,
    },
    {
      title: "N-Back",
      desc: "Assess working memory across N-back levels.",
      difficulty: "Advanced",
      icon: Layers,
    },
    {
      title: "Go/No-Go",
      desc: "Evaluate response inhibition and control.",
      difficulty: "Intermediate",
      icon: Ban,
    },
    {
      title: "Attention Blink",
      desc: "Probe temporal attention limits.",
      difficulty: "Advanced",
      icon: Eye,
    },
    {
      title: "Working Memory Test",
      desc: "Quantify short-term memory capacity.",
      difficulty: "Intermediate",
      icon: Brain,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <motion.section
        className="relative px-6 py-24 pt-32"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-bold font-mono text-foreground text-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experiments Library
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-mono text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Browse featured experiments and run them instantly.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mt-12"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {experiments.map((exp, idx) => {
              const Icon = exp.icon;
              const slug = exp.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .replace(/^-|-$/g, "");
              return (
                <motion.div
                  key={idx}
                  variants={item}
                  className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur hover:border-neon-teal/50 transition-all"
                  whileHover={{ scale: 1.03, boxShadow: "0 0 18px #00FFC6" }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded border border-neon-teal/50 flex items-center justify-center">
                      <Icon className="text-neon-teal" size={20} />
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded border border-border/40 text-muted-foreground">
                      {exp.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-mono text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-mono text-muted-foreground mb-4">
                    {exp.desc}
                  </p>
                  <Link
                    to={`/experiments/${slug}`}
                    className="w-full px-4 py-2 rounded bg-neon-teal text-black font-mono font-bold text-sm hover:shadow-glow transition-all text-center inline-block"
                  >
                    View Details
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
