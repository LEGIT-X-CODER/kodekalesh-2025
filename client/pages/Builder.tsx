import { motion } from "framer-motion";
import { Boxes, Settings, Bot, Play, Keyboard, Clock } from "lucide-react";

export default function Builder() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground px-6 py-24 pt-32">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-8 flex items-center justify-between"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold font-mono">Experiment Builder</h1>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded border border-neon-teal/50 text-neon-teal font-mono font-bold hover:bg-neon-teal/10">Save</button>
            <button className="px-4 py-2 rounded bg-neon-teal text-black font-mono font-bold hover:shadow-glow inline-flex items-center gap-2">
              <Play size={16} /> Preview
            </button>
          </div>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item} className="lg:col-span-2 space-y-6">
            <div className="p-4 rounded border border-border/40 bg-card/50 backdrop-blur">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Boxes className="text-neon-teal" size={18} />
                  <span className="font-mono font-bold">Canvas</span>
                </div>
                <div className="flex gap-2">
                  <button className="px-2 py-1 rounded border border-border/40 font-mono text-xs">Grid</button>
                  <button className="px-2 py-1 rounded border border-border/40 font-mono text-xs">Reset</button>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {["Stimulus", "Response", "Delay", "Condition"].map((b, i) => (
                  <div
                    key={i}
                    className="p-3 rounded border border-neon-teal/30 bg-neon-teal/5 font-mono text-sm flex items-center justify-between"
                  >
                    <span>{b}</span>
                    <Keyboard size={16} className="text-neon-teal" />
                  </div>
                ))}
              </div>
              <div className="mt-4 h-48 rounded border border-border/40 bg-background/40" />
            </div>

            <div className="p-4 rounded border border-border/40 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="text-neon-teal" size={18} />
                <span className="font-mono font-bold">Timeline</span>
              </div>
              <div className="space-y-2">
                {["Fixation 500ms", "Stimulus 200ms", "Response Window 1500ms", "ITI 800ms"].map((t, i) => (
                  <div key={i} className="px-3 py-2 rounded border border-border/40 font-mono text-sm flex items-center justify-between">
                    <span>{t}</span>
                    <span className="text-muted-foreground">Step {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <div className="p-4 rounded border border-border/40 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-2 mb-3">
                <Settings className="text-neon-teal" size={18} />
                <span className="font-mono font-bold">Settings</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">Duration (ms)</span>
                  <input className="w-24 px-2 py-1 rounded border border-border/40 bg-background/50 font-mono text-sm" defaultValue={200} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">Keys</span>
                  <input className="w-24 px-2 py-1 rounded border border-border/40 bg-background/50 font-mono text-sm" defaultValue="A / L" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">Colors</span>
                  <input className="w-24 px-2 py-1 rounded border border-border/40 bg-background/50 font-mono text-sm" defaultValue="#00FFC6" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm">Randomization</span>
                  <select className="w-28 px-2 py-1 rounded border border-border/40 bg-background/50 font-mono text-sm">
                    <option>None</option>
                    <option>Shuffle</option>
                    <option>Block</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="p-4 rounded border border-border/40 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-2 mb-3">
                <Bot className="text-neon-teal" size={18} />
                <span className="font-mono font-bold">AI Tools</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button className="px-3 py-2 rounded border border-neon-teal/40 text-neon-teal font-mono text-sm hover:bg-neon-teal/10">Auto-optimize</button>
                <button className="px-3 py-2 rounded border border-neon-teal/40 text-neon-teal font-mono text-sm hover:bg-neon-teal/10">Predict flaws</button>
              </div>
            </div>

            <div className="p-4 rounded border border-border/40 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-2 mb-3">
                <Play className="text-neon-teal" size={18} />
                <span className="font-mono font-bold">Preview</span>
              </div>
              <div className="h-32 rounded border border-border/40 bg-background/40 mb-3" />
              <button className="w-full px-4 py-2 rounded bg-neon-teal text-black font-mono font-bold hover:shadow-glow">Run Simulator</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
