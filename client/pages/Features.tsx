import { motion } from "framer-motion";
import {
  Zap,
  Cpu,
  Brain,
  Lock,
  BarChart3,
  Share2,
  Grid3x3,
  Image,
  Music,
  Gamepad2,
  GitBranch,
  CheckCircle,
  Cloud,
  Shield,
  Download,
  Users,
} from "lucide-react";

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <motion.section
        className="relative px-6 py-24 pt-32 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-mono text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Deep Dive Into NeuroScale Features
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground font-mono max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Comprehensive breakdown of every capability that makes NeuroScale
            the most powerful cognitive research platform
          </motion.p>
        </div>
      </motion.section>

      {/* 1️⃣ NO-CODE EXPERIMENT BUILDER */}
      <motion.section
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Zap className="w-8 h-8 text-neon-teal" />
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
                No-Code Experiment Builder
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono max-w-3xl">
              Build sophisticated cognitive experiments without writing a single
              line of code. Drag, drop, and deploy.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Grid3x3,
                title: "Drag & Drop Blocks",
                desc: "Intuitive visual builder with drag-and-drop interface. Compose experiments by arranging modular blocks in sequence. No programming knowledge required.",
              },
              {
                icon: Image,
                title: "Rich Stimuli Support",
                desc: "Add text, images, audio, and shapes as experimental stimuli. Built-in media library and custom upload support for all file types.",
              },
              {
                icon: Gamepad2,
                title: "Multiple Response Modes",
                desc: "Capture responses via keyboard, mouse clicks, touchscreen, or custom input devices. Fully customizable response collection.",
              },
              {
                icon: GitBranch,
                title: "Conditional Branching",
                desc: "Create adaptive experiments with conditional logic. Route participants based on their responses for personalized testing paths.",
              },
              {
                icon: Zap,
                title: "Randomization Engine",
                desc: "Built-in randomization for stimulus presentation order, timing, and condition assignment. Avoid presentation bias automatically.",
              },
              {
                icon: CheckCircle,
                title: "Real-time Preview",
                desc: "See your experiment exactly as participants will experience it. Live preview updates as you build.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded border border-neon-teal/20 bg-neon-teal/5 hover:border-neon-teal/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #00FFC6" }}
                >
                  <Icon className="w-8 h-8 text-neon-teal mb-4" />
                  <h3 className="text-xl font-bold text-foreground font-mono mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 2️⃣ TIMING ENGINE */}
      <motion.section
        className="relative px-6 py-24 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Cpu className="w-8 h-8 text-neon-teal" />
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
                Timing Engine
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono max-w-3xl">
              Achieve millisecond-level timing accuracy crucial for cognitive
              science research, far exceeding traditional browser capabilities.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Cloud,
                title: "AWS Lambda@Edge Integration",
                desc: "Runs timing logic at AWS edge locations nearest to participants. Reduces network latency and ensures consistent timing across geographies.",
              },
              {
                icon: Shield,
                title: "Latency Calibration Preview",
                desc: "Interactive tool to measure and calibrate your specific network latency before the experiment. Automatic compensation applied during testing.",
              },
              {
                icon: BarChart3,
                title: "Sub-10ms Error Tolerance",
                desc: "Achieves timing precision below 10 milliseconds, meeting rigorous standards for psychological and neuroscience research.",
              },
              {
                icon: Cpu,
                title: "Custom Timing Pipelines",
                desc: "Configure complex timing sequences with stimulus onset, response windows, inter-stimulus intervals, and inter-trial intervals.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #A78BFA" }}
                >
                  <Icon className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground font-mono mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 3️⃣ AI VALIDITY GUARDIAN */}
      <motion.section
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Brain className="w-8 h-8 text-neon-teal" />
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
                AI Validity Guardian
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono max-w-3xl">
              Intelligent quality control powered by Gemini AI. Automatically
              identify and flag low-quality data in real-time.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Users,
                title: "Inattentive Participant Detection",
                desc: "AI analyzes response patterns to identify participants who are not paying attention. Flags inconsistent timing, random responses, and behavioral anomalies.",
              },
              {
                icon: Shield,
                title: "Noise Filtering",
                desc: "Automatically detect and flag outlier responses, mechanical errors, and data anomalies. Separate signal from noise in your results.",
              },
              {
                icon: Gamepad2,
                title: "Bot Behavior Detection",
                desc: "Identify automated responses and bot accounts using behavioral fingerprinting. Protect data integrity from malicious participation.",
              },
              {
                icon: CheckCircle,
                title: "Quality Scoring",
                desc: "Each response receives a quality score based on attention, consistency, and behavior patterns. Export datasets with configurable quality thresholds.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded border border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #60A5FA" }}
                >
                  <Icon className="w-8 h-8 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground font-mono mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 4️⃣ BLOCKCHAIN PROOF */}
      <motion.section
        className="relative px-6 py-24 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Lock className="w-8 h-8 text-neon-teal" />
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
                Blockchain Proof
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono max-w-3xl">
              Immutable, verifiable proof of experiment authenticity and
              participant integrity using blockchain technology.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Lock,
                title: "Results Hashing",
                desc: "Every result set is cryptographically hashed using SHA-256. Create tamper-proof records of your experimental data.",
              },
              {
                icon: Cloud,
                title: "Ethereum Testnet Storage",
                desc: "Store experiment metadata and result hashes on Ethereum testnet. Permanent, immutable record of your research integrity.",
              },
              {
                icon: GitBranch,
                title: "Experiment Authenticity Verification",
                desc: "Generate verifiable certificates proving when experiments were conducted and their integrity. Shareable with reviewers and peers.",
              },
              {
                icon: Zap,
                title: "NFT Participation Certificates",
                desc: "Participants receive NFT certificates on Aptos blockchain. Recognizes valuable research contributions and creates engagement incentives.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded border border-pink-500/20 bg-pink-500/5 hover:border-pink-500/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #F472B6" }}
                >
                  <Icon className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground font-mono mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 5️⃣ ANALYTICS */}
      <motion.section
        className="relative px-6 py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <BarChart3 className="w-8 h-8 text-neon-teal" />
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
                Analytics
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono max-w-3xl">
              Comprehensive analytics dashboard with powerful visualization and
              filtering tools for research insights.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: BarChart3,
                title: "Reaction Time Charts",
                desc: "Interactive histograms and time-series plots of reaction times. Analyze distributions, detect outliers, and identify temporal patterns.",
              },
              {
                icon: BarChart3,
                title: "Accuracy Graphs",
                desc: "Visualize accuracy rates, error distributions, and correctness patterns. Track performance across experimental blocks and conditions.",
              },
              {
                icon: Users,
                title: "Demographic Filtering",
                desc: "Slice data by participant demographics, experimental conditions, time windows, and custom variables. Create cohort comparisons instantly.",
              },
              {
                icon: Download,
                title: "Comparative Analysis",
                desc: "Side-by-side comparison of different participant groups or experimental conditions. Statistical summaries and export-ready visualizations.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded border border-green-500/20 bg-green-500/5 hover:border-green-500/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #4ADE80" }}
                >
                  <Icon className="w-8 h-8 text-green-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground font-mono mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 6️⃣ SHARING & DEPLOYMENT */}
      <motion.section
        className="relative px-6 py-24 bg-gradient-to-b from-background via-card/20 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-4">
              <Share2 className="w-8 h-8 text-neon-teal" />
              <h2 className="text-4xl md:text-5xl font-bold font-mono text-foreground">
                Sharing & Deployment
              </h2>
            </div>
            <p className="text-lg text-muted-foreground font-mono max-w-3xl">
              Instantly share and deploy experiments. Control access and reach
              participants globally with a single link.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Link as any,
                title: "One-Click Experiment Links",
                desc: "Generate shareable experiment links instantly. Custom URLs, analytics tracking, and participant flow management built-in.",
              },
              {
                icon: Gamepad2,
                title: "Mobile-Friendly Testing",
                desc: "All experiments automatically optimized for mobile and tablet displays. Touch-based response collection and responsive layouts.",
              },
              {
                icon: Users,
                title: "Public/Private Mode",
                desc: "Control experiment visibility. Public mode for open recruitment, private mode for closed studies with access codes.",
              },
              {
                icon: Cloud,
                title: "Global Deployment",
                desc: "Experiments served globally via CDN. Auto-scaling infrastructure handles traffic spikes without performance degradation.",
              },
            ].map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-8 rounded border border-orange-500/20 bg-orange-500/5 hover:border-orange-500/50 transition-all"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px #FB923C" }}
                >
                  <Icon className="w-8 h-8 text-orange-500 mb-4" />
                  <h3 className="text-xl font-bold text-foreground font-mono mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* COMPARISON TABLE SECTION */}
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
            NeuroScale vs Traditional Methods
          </motion.h2>

          <motion.div
            className="overflow-x-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border/30">
                  <th className="text-left p-4 font-mono font-bold text-foreground">
                    Feature
                  </th>
                  <th className="text-center p-4 font-mono font-bold text-neon-teal">
                    NeuroScale
                  </th>
                  <th className="text-center p-4 font-mono font-bold text-muted-foreground">
                    Lab-Based
                  </th>
                  <th className="text-center p-4 font-mono font-bold text-muted-foreground">
                    Other Web Tools
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Millisecond Timing",
                    neuroscale: "✓ <10ms",
                    lab: "~5ms",
                    other: "100-500ms",
                  },
                  {
                    feature: "No-Code Builder",
                    neuroscale: "✓ Yes",
                    lab: "✗ No",
                    other: "Limited",
                  },
                  {
                    feature: "AI Quality Control",
                    neuroscale: "✓ Yes",
                    lab: "✗ No",
                    other: "✗ No",
                  },
                  {
                    feature: "Blockchain Proof",
                    neuroscale: "✓ Yes",
                    lab: "✗ No",
                    other: "✗ No",
                  },
                  {
                    feature: "Mobile Support",
                    neuroscale: "✓ Full",
                    lab: "✗ No",
                    other: "Partial",
                  },
                  {
                    feature: "Global Deployment",
                    neuroscale: "✓ CDN",
                    lab: "✗ No",
                    other: "Basic",
                  },
                  {
                    feature: "Cost",
                    neuroscale: "Free",
                    lab: "$100k+",
                    other: "$500-2k",
                  },
                ].map((row, idx) => (
                  <motion.tr
                    key={idx}
                    className="border-b border-border/20 hover:bg-card/20 transition-colors"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <td className="p-4 font-mono text-foreground">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center font-mono text-neon-teal font-bold">
                      {row.neuroscale}
                    </td>
                    <td className="p-4 text-center font-mono text-muted-foreground">
                      {row.lab}
                    </td>
                    <td className="p-4 text-center font-mono text-muted-foreground">
                      {row.other}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA SECTION */}
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
              Ready to Experience All Features?
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground font-mono max-w-2xl mx-auto"
              variants={itemVariants}
            >
              Start building your first high-precision cognitive experiment
              today. No credit card required.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                className="px-8 py-4 rounded bg-neon-teal text-black font-mono font-bold text-lg hover:shadow-glow-lg transition-all inline-flex items-center justify-center gap-2"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px #00FFC6" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Building Now →
              </motion.button>
              <motion.button
                className="px-8 py-4 rounded border border-neon-teal/50 text-neon-teal font-mono font-bold text-lg hover:bg-neon-teal/10 transition-all"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Watch Feature Tour →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* FOOTER */}
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
