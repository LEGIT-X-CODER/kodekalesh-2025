import { motion } from "framer-motion";

export default function Results() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        className="text-center space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 rounded border border-neon-teal flex items-center justify-center mx-auto">
          <span className="text-3xl text-neon-teal font-mono">📊</span>
        </div>
        <h1 className="text-4xl font-bold text-foreground font-mono">Results</h1>
        <p className="text-muted-foreground font-mono max-w-md">
          View detailed analytics, AI-verified results, and blockchain verification for your experiments.
        </p>
      </motion.div>
    </div>
  );
}
