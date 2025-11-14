import { motion } from "framer-motion";

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

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
            className="text-5xl md:text-6xl font-bold font-mono text-foreground text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About NeuroScale
          </motion.h1>

          <motion.div
            className="space-y-8 max-w-3xl mx-auto"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={item} className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-bold font-mono mb-2">Mission</h2>
              <p className="text-muted-foreground font-mono">
                Enable anyone to run lab‑grade psychology experiments from a browser.
              </p>
            </motion.div>
            <motion.div variants={item} className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-bold font-mono mb-2">Problem We Solve</h2>
              <p className="text-muted-foreground font-mono">
                Traditional labs are costly and limited. Web tools struggle with timing and data validity.
              </p>
            </motion.div>
            <motion.div variants={item} className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-bold font-mono mb-2">Why This Matters</h2>
              <p className="text-muted-foreground font-mono">
                Democratizes cognitive science, expands participant diversity, and improves reproducibility.
              </p>
            </motion.div>
            <motion.div variants={item} className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-bold font-mono mb-2">Team</h2>
              <p className="text-muted-foreground font-mono">Researchers and engineers passionate about behavioral science.</p>
            </motion.div>
            <motion.div variants={item} className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-bold font-mono mb-2">Hackathon Story</h2>
              <p className="text-muted-foreground font-mono">Built to showcase AI + cloud precision for research at scale.</p>
            </motion.div>
            <motion.div variants={item} className="p-6 rounded border border-border/40 bg-card/50 backdrop-blur">
              <h2 className="text-2xl font-bold font-mono mb-2">Contact</h2>
              <p className="text-muted-foreground font-mono">Reach us via GitHub issues or email.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
