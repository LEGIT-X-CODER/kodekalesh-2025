import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Dashboard", href: "/dashboard" },
    { label: "Builder", href: "/builder" },
    { label: "Results", href: "/results" },
    { label: "Settings", href: "/settings" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-neon-teal/10 bg-background/40 backdrop-blur-xl">
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
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

        {/* Right Side - Auth Buttons */}
        <div className="flex items-center gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/login"
              className="text-sm font-mono text-muted-foreground hover:text-neon-teal transition-colors"
            >
              Login
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px #00FFC6",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              to="/dashboard"
              className="px-4 py-2 rounded bg-neon-teal text-black font-mono font-semibold text-sm hover:shadow-glow transition-all duration-300"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-neon-teal"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden border-t border-neon-teal/20 bg-background/60 backdrop-blur-xl"
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
          </div>
        </motion.div>
      )}
    </header>
  );
}
