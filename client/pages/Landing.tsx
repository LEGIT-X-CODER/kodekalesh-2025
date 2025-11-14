import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Cpu,
  Brain,
  Lock,
  Box,
  GitBranch,
  Eye,
} from "lucide-react";

export default function Landing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1️⃣ HERO SECTION */}
      <motion.section
        className="relative min-h-screen flex items-center px-6 pt-20 pb-16 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Backgrounds */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute top-40 left-1/4 w-96 h-96 bg-neon-teal/10 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0], x: [0, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-40 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
            animate={{ y: [0, -50, 0], x: [0, -30, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 0.5 }}
          />
        </div>

        <motion.div
          className="max-w-7xl mx-auto w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold font-mono text-foreground leading-tight">
              Turn Any Browser Into a Cognitive Research Lab
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground font-mono leading-relaxed max-w-2xl">
              Run millisecond-accurate cognitive experiments without hardware,
              labs, or coding.
            </p>

            <div className="p-4 rounded border border-neon-teal/30 bg-neon-teal/5 backdrop-blur">
              <p className="text-neon-teal font-mono text-sm font-bold">
                NeuroScale = AI + Cloud Precision + Blockchain Validity for
                Behavioral Science
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00FFC6" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/dashboard"
                  className="px-8 py-4 rounded bg-neon-teal text-black font-mono font-bold text-lg hover:shadow-glow-lg transition-all duration-300 inline-flex items-center gap-2 group"
                >
                  Try Live Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-8 py-4 rounded border border-neon-teal/50 text-neon-teal font-mono font-bold text-lg hover:bg-neon-teal/10 transition-all duration-300 inline-flex items-center gap-2">
                  Watch 30-sec Overview
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["No installation", "No hardware", "100% Browser-Based"].map(
                (tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded border border-border/50 text-muted-foreground hover:text-neon-teal hover:border-neon-teal transition-colors"
                  >
                    ✓ {tag}
                  </span>
                ),
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* 2️⃣ PROBLEM SECTION */}
      <motion.section
        className="relative px-6 py-24 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-mono text-foreground text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Hidden Problem in Cognitive Science
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Research Stuck in Labs",
                description:
                  "Millions of researchers still rely on physical labs, expensive equipment, and outdated desktop tools.",
              },
              {
                title: "Small Participant Pools",
                description:
                  "Studies often run on 20–50 students, leading to biased and non-generalizable findings.",
              },
              {
                title: "Web Experiments Are Unreliable",
                description:
                  "Most online tools can't achieve millisecond precision, causing data noise and reproducibility issues.",
              },
            ].map((problem, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded border border-border/50 bg-card/30 backdrop-blur hover:border-neon-teal/50 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFC6" }}
              >
                <h3 className="text-xl font-bold text-foreground font-mono mb-3">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 3️⃣ SOLUTION SECTION */}
      <motion.section
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center space-y-4"
              variants={itemVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
                Our Solution: Browser-Based Neuroscience, Reinvented
              </h2>
              <p className="text-lg text-muted-foreground font-mono max-w-3xl mx-auto">
                NeuroScale transforms cognitive research by enabling anyone to
                design, deploy, and validate high-precision experiments directly
                from a browser.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: Zap,
                  title: "No Code Experiment Builder",
                  desc: "Create tasks in minutes.",
                },
                {
                  icon: Cpu,
                  title: "Millisecond Accuracy Engine",
                  desc: "Custom timing pipeline.",
                },
                {
                  icon: Brain,
                  title: "AI Validity Guardian",
                  desc: "Detects inattentive participants.",
                },
              ].map((h, idx) => {
                const Icon = h.icon;
                return (
                  <motion.div
                    key={idx}
                    className="p-6 rounded border border-neon-teal/20 bg-neon-teal/5 hover:bg-neon-teal/10 transition-all"
                    variants={itemVariants}
                    whileHover={{
                      borderColor: "#00FFC6",
                      boxShadow: "0 0 15px #00FFC6",
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                      <Icon className="text-neon-teal mb-4" size={32} />
                    </motion.div>
                    <h3 className="font-bold text-foreground font-mono mb-2">
                      {h.title}
                    </h3>
                    <p className="text-muted-foreground font-mono text-sm">
                      {h.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 4️⃣ INNOVATIONS SECTION */}
      <motion.section
        className="relative px-6 py-24 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-mono text-foreground text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why NeuroScale Has No Competition
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                num: "1",
                title: "Millisecond Precision Engine",
                sub: "(AWS Lambda@Edge)",
                points: [
                  "Runs timing at nearest AWS edge",
                  "Compensates latency in real time",
                  "Achieves <10ms error",
                ],
                color: "border-neon-teal",
              },
              {
                num: "2",
                title: "AI Validity Guardian",
                sub: "(Gemini)",
                points: [
                  "Detects attention drops",
                  "Flags low-quality responses",
                  "Identifies bots",
                ],
                color: "border-purple-500",
              },
              {
                num: "3",
                title: "Blockchain Experiment Proof",
                sub: "(Ethereum + Aptos)",
                points: [
                  "Every result is hashed",
                  "Stored on Ethereum testnet",
                  "Aptos NFT certificates",
                ],
                color: "border-pink-500",
              },
            ].map((inn, idx) => (
              <motion.div
                key={idx}
                className={`group relative p-8 rounded border ${inn.color} border-opacity-30 bg-card/40 backdrop-blur hover:border-opacity-100 transition-all`}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <motion.div
                  className={`absolute -top-4 -left-4 w-10 h-10 rounded-full ${inn.color === "border-neon-teal" ? "bg-neon-teal" : inn.color === "border-purple-500" ? "bg-purple-500" : "bg-pink-500"} flex items-center justify-center text-black font-bold text-lg font-mono`}
                  whileHover={{ scale: 1.2 }}
                >
                  {inn.num}
                </motion.div>

                <h3 className="text-xl font-bold text-foreground font-mono mt-4 mb-1">
                  {inn.title}
                </h3>
                <p
                  className={
                    inn.color === "border-neon-teal"
                      ? "text-neon-teal"
                      : inn.color === "border-purple-500"
                        ? "text-purple-500"
                        : "text-pink-500"
                  }
                >
                  {inn.sub}
                </p>

                <motion.ul className="mt-6 space-y-2">
                  {inn.points.map((pt, pi) => (
                    <li
                      key={pi}
                      className="text-muted-foreground font-mono text-sm flex gap-2"
                    >
                      <span className="text-neon-teal">→</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 5️⃣ DEMO SECTION */}
      <motion.section
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-mono text-foreground"
              variants={itemVariants}
            >
              Try a Live Cognitive Test
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Experience how fast and precise browser-based experiments can be.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "⚡ Reaction Time Test",
                "🎨 Stroop Task",
                "🧠 N-Back Memory Test",
              ].map((opt, idx) => (
                <motion.button
                  key={idx}
                  className="px-6 py-3 rounded border border-neon-teal/50 text-neon-teal font-mono font-bold hover:border-neon-teal hover:bg-neon-teal/10 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, boxShadow: "0 0 20px #00FFC6" }}
                  whileTap={{ scale: 0.95 }}
                >
                  {opt}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 6️⃣ IMPACT SECTION */}
      <motion.section
        className="relative px-6 py-24 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-mono text-foreground text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Impact That Scales With Every Click
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Expand participant pools from 50 → 5,000 instantly",
              "Reduce experiment deployment from weeks → minutes",
              "Improve data reliability by 40% with AI validity",
              "Zero hardware cost → perfect for all researchers",
            ].map((impact, idx) => (
              <motion.div
                key={idx}
                className="p-6 rounded border border-neon-teal/20 bg-neon-teal/5 hover:border-neon-teal/50 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 15px #00FFC6" }}
              >
                <div className="flex gap-4 items-start">
                  <motion.span
                    className="text-2xl text-neon-teal flex-shrink-0"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.3,
                    }}
                  >
                    ✓
                  </motion.span>
                  <p className="text-foreground font-mono font-bold">
                    {impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 7️⃣ TECH STACK SECTION */}
      <motion.section
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold font-mono text-foreground text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powered by Modern Cloud Infrastructure
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: GitBranch, title: "Frontend", tech: "React + Builder" },
              { icon: Box, title: "Backend", tech: "Supabase Edge" },
              { icon: Brain, title: "AI", tech: "Gemini API" },
              { icon: Lock, title: "Blockchain", tech: "Aptos + Ethereum" },
              { icon: Eye, title: "Storage", tech: "Cloudinary" },
              { icon: Cpu, title: "Latency", tech: "AWS Lambda@Edge" },
            ].map((tech, idx) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-6 rounded border border-border/50 bg-card/40 backdrop-blur hover:border-neon-teal/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFC6" }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-neon-teal mb-4" size={32} />
                  </motion.div>
                  <h3 className="font-bold text-foreground font-mono mb-1">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {tech.tech}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 8️⃣ CTA SECTION */}
      <motion.section
        className="relative px-6 py-24 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold font-mono text-foreground"
              variants={itemVariants}
            >
              Ready to Build Your First Cognitive Experiment?
            </motion.h2>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00FFC6" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/dashboard"
                  className="px-8 py-4 rounded bg-neon-teal text-black font-mono font-bold text-lg hover:shadow-glow-lg transition-all inline-flex items-center gap-2"
                >
                  Start Free →
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="px-8 py-4 rounded border border-neon-teal/50 text-neon-teal font-mono font-bold text-lg hover:bg-neon-teal/10 transition-all">
                  View Experiments →
                </button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* 9️⃣ FOOTER */}
      <motion.footer
        className="relative px-6 py-12 border-t border-border/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="flex gap-6 font-mono text-muted-foreground text-sm"
              variants={itemVariants}
            >
              {["About", "Docs", "Experiments", "Contact"].map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="hover:text-neon-teal transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-6 font-mono text-muted-foreground text-sm"
              variants={itemVariants}
            >
              <motion.a
                href="#"
                className="hover:text-neon-teal transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-neon-teal transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                Terms
              </motion.a>
            </motion.div>

            <motion.div
              className="text-center md:text-right font-mono text-muted-foreground text-sm"
              variants={itemVariants}
            >
              <p>Built by Team NeuroScale</p>
              <p className="text-xs mt-2">
                Made for Hackathons • Powered by Innovation
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
