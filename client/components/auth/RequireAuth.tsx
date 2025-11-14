import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function RequireAuth() {
  const navigate = useNavigate();
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <motion.div
        className="max-w-md w-full p-6 rounded border border-border/40 bg-card/50 backdrop-blur text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl font-bold font-mono mb-2">Sign in required</h2>
        <p className="text-muted-foreground font-mono mb-6">Login to access this page.</p>
        <div className="grid grid-cols-1 gap-3">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-3 rounded bg-neon-teal text-black font-mono font-bold hover:shadow-glow"
          >
            Go to Login
          </button>
        </div>
      </motion.div>
    </div>
  );
}
