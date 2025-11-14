import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { user, role, logout } = useAuth();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Experiments", href: "/experiments" },
    { label: "Builder", href: "/builder" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "About", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-transparent pointer-events-none">
      <nav className="pointer-events-auto flex items-center justify-between px-6 py-3 max-w-7xl mx-auto mt-3 mb-3 rounded-2xl border border-neon-teal/20 bg-background/20 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,255,198,0.12)]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            className="w-8 h-8 rounded border border-neon-teal flex items-center justify-center"
            whileHover={{
              boxShadow: "0 0 20px #00FFC6",
              scale: 1.1,
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-neon-teal font-bold text-xs font-mono">
              ⊗
            </span>
          </motion.div>
          <motion.span
            className="text-lg font-bold text-foreground hidden sm:inline"
            whileHover={{ color: "#00FFC6" }}
            transition={{ duration: 0.3 }}
          >
            NeuroScale
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              onMouseEnter={() => setHoveredItem(item.href)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative"
            >
              <Link
                to={item.href}
                className="text-muted-foreground font-mono text-sm relative z-10 inline-block py-2 px-3"
              >
                {item.label}
              </Link>

              {/* Animated hover box background */}
              {hoveredItem === item.href && (
                <motion.div
                  className="absolute inset-0 rounded border border-neon-teal/50 bg-neon-teal/5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  style={{ left: -12, right: -12 }}
                />
              )}

              {/* Animated underline */}
              <motion.span
                className="absolute -bottom-0 left-0 h-0.5 bg-neon-teal"
                initial={{ width: 0 }}
                animate={{ width: hoveredItem === item.href ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {!user && (
              <Link
                to="/login"
                className="text-sm font-mono text-muted-foreground hover:text-neon-teal transition-colors"
              >
                Login
              </Link>
            )}
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px #00FFC6",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            {user ? (
              <div className="relative group">
                <div className="flex items-center gap-2 px-3 py-2 rounded border border-neon-teal/40 bg-background/30 backdrop-blur text-foreground font-mono text-sm hover:border-neon-teal/80 transition-all cursor-pointer">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-neon-teal/50 text-neon-teal text-xs">
                    {(user.displayName ?? user.email ?? "").slice(0,1).toUpperCase()}
                  </span>
                  <span className="max-w-[160px] truncate">{user.displayName ?? user.email}</span>
                </div>
                <div className="absolute top-full right-0 mt-2 w-48 bg-background/80 backdrop-blur-lg border border-neon-teal/20 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible z-20">
                  <Link
                    to={role === "admin" ? "/admin" : "/dashboard"}
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-neon-teal/10 hover:text-neon-teal"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-muted-foreground hover:bg-neon-teal/10 hover:text-neon-teal"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 rounded bg-neon-teal text-black font-mono font-semibold text-sm hover:shadow-glow transition-all duration-300"
              >
                Get Started
              </Link>
            )}
          </motion.div>

          
        </div>
        {user && (
          <motion.button
            className="md:hidden text-muted-foreground"
            onClick={logout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Logout
          </motion.button>
        )}
        <motion.button
          className="md:hidden text-neon-teal"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden mx-6 mb-4 rounded-2xl border border-neon-teal/20 bg-background/60 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,255,198,0.12)]"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-neon-teal transition-colors font-mono block"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-neon-teal transition-colors font-mono"
              >
                Login
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navItems.length * 0.1 + 0.1 }}
            >
              <Link
                to={!user ? "/login" : role === "admin" ? "/admin" : "/dashboard"}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded bg-neon-teal text-black font-mono font-semibold text-sm hover:shadow-glow transition-all duration-300 inline-block"
              >
                {!user ? "Get Started" : role === "admin" ? "Admin" : "Get Started"}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
