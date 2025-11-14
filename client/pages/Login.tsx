import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, role, signInWithGoogle, signInWithEmail } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(role === "admin" ? "/admin" : "/dashboard");
    }
  }, [user, role, navigate]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <motion.div
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Logo */}
        <div className="text-center mb-12">
          <div className="w-12 h-12 rounded border border-neon-teal flex items-center justify-center mx-auto mb-4">
            <span className="text-xl text-neon-teal font-bold font-mono">⊗</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground font-mono">NeuroScale</h1>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl font-bold text-foreground font-mono">Welcome Back</h2>
            <p className="text-muted-foreground font-mono text-sm">Sign in to access your experiments</p>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-sm font-mono text-muted-foreground">Email Address</label>
            <input
              type="email"
              placeholder="your.email@university.edu"
              className="w-full px-4 py-3 rounded border border-border/50 bg-card/50 text-foreground placeholder-muted-foreground font-mono text-sm hover:border-border transition-colors focus:outline-none focus:border-neon-teal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-sm font-mono text-muted-foreground">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded border border-border/50 bg-card/50 text-foreground placeholder-muted-foreground font-mono text-sm hover:border-border transition-colors focus:outline-none focus:border-neon-teal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link to="/login" className="text-neon-teal hover:text-neon-teal/80 transition-colors font-mono text-sm">
              Forgot Password?
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            <button
              onClick={() => signInWithEmail(email, password)}
              className="px-4 py-3 rounded bg-neon-teal text-black font-mono font-bold text-lg hover:shadow-glow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Sign In
            </button>
            <button
              onClick={signInWithGoogle}
              className="px-4 py-3 rounded border border-neon-teal/50 text-neon-teal font-mono font-bold text-lg hover:bg-neon-teal/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border/30" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background text-muted-foreground font-mono">or</span>
            </div>
          </div>

          

          {/* Sign Up Link */}
          <div className="text-center pt-4">
            <p className="text-muted-foreground font-mono text-sm">Use institution or Gmail to sign in.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
