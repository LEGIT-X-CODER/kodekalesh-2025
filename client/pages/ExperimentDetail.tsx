import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Zap, Palette, Layers, Ban, Eye, Brain, Play } from "lucide-react";

const EXPERIMENTS = [
  { slug: "reaction-time-task", title: "Reaction Time Task", icon: Zap, difficulty: "Beginner", desc: "Measure reflex latency with high-precision timing." },
  { slug: "stroop-task", title: "Stroop Task", icon: Palette, difficulty: "Intermediate", desc: "Test interference by color–word mismatches." },
  { slug: "n-back", title: "N-Back", icon: Layers, difficulty: "Advanced", desc: "Assess working memory across N-back levels." },
  { slug: "go-no-go", title: "Go/No-Go", icon: Ban, difficulty: "Intermediate", desc: "Evaluate response inhibition and control." },
  { slug: "attention-blink", title: "Attention Blink", icon: Eye, difficulty: "Advanced", desc: "Probe temporal attention limits." },
  { slug: "working-memory-test", title: "Working Memory Test", icon: Brain, difficulty: "Intermediate", desc: "Quantify short-term memory capacity." },
];

export default function ExperimentDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const exp = EXPERIMENTS.find((e) => e.slug === slug);

  if (!exp) {
    return (
      <div className="min-h-screen bg-background text-foreground px-6 py-24 pt-32">
        <div className="max-w-3xl mx-auto text-center font-mono">Experiment not found.</div>
      </div>
    );
  }

  const Icon = exp.icon;
  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-24 pt-32">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded border border-neon-teal/50 flex items-center justify-center">
              <Icon className="text-neon-teal" size={20} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-mono">{exp.title}</h1>
            <span className="text-xs font-mono px-2 py-1 rounded border border-border/40 text-muted-foreground">{exp.difficulty}</span>
          </div>
          <p className="text-muted-foreground font-mono">{exp.desc}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
            <h3 className="font-mono font-bold mb-3">Overview</h3>
            <ul className="list-disc pl-5 font-mono text-sm text-muted-foreground space-y-1">
              <li>Stimulus presentation with precise timing</li>
              <li>Keyboard/mouse/touch responses</li>
              <li>Randomization and counterbalancing</li>
            </ul>
            <div className="h-40 rounded border border-border/40 bg-background/50 mt-4" />
          </div>
          <div className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
            <h3 className="font-mono font-bold mb-3">Action</h3>
            {user ? (
              <button className="w-full px-4 py-2 rounded bg-neon-teal text-black font-mono font-bold hover:shadow-glow inline-flex items-center justify-center gap-2">
                <Play size={16} /> Start Experiment
              </button>
            ) : (
              <button onClick={() => navigate("/login")} className="w-full px-4 py-2 rounded border border-neon-teal/50 text-neon-teal font-mono font-bold hover:bg-neon-teal/10">
                Sign in to Start
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
