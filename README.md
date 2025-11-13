# kodekalesh-2025
problem statement 1 :--> 
Research in cognitive science and psychology has historically been confined to controlled laboratory settings, relying on specialized, expensive equipment and desktop software. This approach, while precise, severely limits the scale and demographic diversity of participant pools, often leading to findings that are not generalizable. Furthermore, the technical complexity of deploying millisecond sensitive experiments on the web has been a significant barrier for researchers, preventing them from accessing larger, more representative samples online.


# 🧠 NeuroScale — Turning Any Browser Into a Cognitive Research Lab

> “What if anyone, anywhere, could run lab-grade psychology experiments from their browser?”

---

## 🚀 Overview

**NeuroScale** is a web-based cognitive research platform that democratizes psychological experimentation.  
It enables researchers to design, deploy, and analyze millisecond-accurate cognitive tests — without expensive lab equipment or coding expertise.

Our platform combines **AI, blockchain, and cloud precision** to deliver the world’s first **browser-based neuro-lab**.

---

## 🎯 Problem Statement

Cognitive and psychological research is traditionally bound to laboratory settings that require costly hardware and complex software (like E-Prime or PsychoPy).  
This limits:
- Participant diversity  
- Experiment scalability  
- Accessibility for students and independent researchers  

Moreover, online platforms fail to achieve **millisecond accuracy** and **data validity**, creating a reproducibility crisis in behavioral research.

---

## 💡 Our Solution

NeuroScale allows researchers to:
1. Design cognitive experiments visually (drag & drop)
2. Deploy them instantly via a sharable web link
3. Collect precise reaction-time and attention data
4. Validate data quality using AI
5. Verify experiment authenticity using blockchain proofs

All within a browser — no installation, no paid servers.

---

## ⚙️ Tech Stack

| Layer | Technology | Description |
|--------|-------------|--------------|
| **Frontend** | React.js + Builder.io | Drag-drop UI + interactive tests |
| **Backend** | Supabase Edge Functions | Secure REST APIs + auth |
| **Database** | Supabase (PostgreSQL) | Stores experiments and responses |
| **AI Layer** | Gemini API | Detects bot-like patterns and validity scores |
| **Storage** | Cloudinary | Stores experimental media |
| **Blockchain Layer** | Aptos + Ethereum (Testnets) | Verifiable participation NFTs + experiment proof |
| **Latency Engine** | AWS Lambda@Edge | Sub-10ms calibration & timing logger |

---

## 🧩 Key Innovations

| Innovation | Description |
|-------------|--------------|
| ⚡ **Latency Calibration Engine (AWS)** | Uses AWS Lambda@Edge to measure and compensate latency in real-time, achieving millisecond-level experiment accuracy. |
| 🧠 **AI Validity Guardian** | Gemini AI models detect inattentive participants, abnormal response patterns, and ensure data reliability. |
| 🔒 **Proof-of-Experiment Hashing (Ethereum)** | Every experiment result is hashed (SHA256) and anchored to the Ethereum testnet for tamper-proof verification. |
| 🎓 **Research Contribution Tokens (Aptos)** | Participants receive NFT-based certificates on Aptos testnet for verified contributions to research. |
| 🌍 **Open Cognitive Marketplace** | Researchers can share, fork, and remix experiments — like GitHub for cognitive science. |

---

## 🧪 Example Experiments

| Experiment | Description |
|-------------|--------------|
| ⚡ Reaction Time Test | Measures reflex latency with <10ms precision using browser-based performance timers. |
| 🎨 Stroop Effect | Tests cognitive interference by comparing color-word mismatches. |
| 🧠 N-Back Task | Evaluates short-term memory and attention span. |

---

## 🧰 Architecture

                    🧠 NeuroScale System Flow
 ┌───────────────────────────────────────────────┐
 │                User Browser                   │
 │        (Participant / Researcher)             │
 └──────────────────────────┬────────────────────┘
                            │
                            ▼
 ┌───────────────────────────────────────────────┐
 │       React + Builder.io Frontend             │
 │        (Drag-drop experiment UI)              │
 └──────────────────────────┬────────────────────┘
                            │
                            ▼
 ┌───────────────────────────────────────────────┐
 │          Supabase Edge Functions              │
 │        (APIs, Auth, Business Logic)           │
 └──────────────────────────┬────────────────────┘
                            │
                            ▼
      ┌────────────┬────────────┬────────────┬────────────┬────────────┐
      ▼            ▼            ▼            ▼            ▼
 ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐
 │ PostgreSQL │ │ AWS Lambda │ │ Gemini API │ │ Cloudinary │ │ Blockchain │
 │ Experiments│ │  @Edge     │ │ AI Validity│ │   Media    │ │ Aptos + ETH│
 │ & Responses│ │ Latency Cal│ │  Checking  │ │  Storage   │ │ NFT + Proof│
 └────────────┘ └────────────┘ └────────────┘ └────────────┘ └────────────┘

---

🔐 Security & Privacy

🔒 Anonymous Participation — No personal data collected; participants use auto-generated IDs.

🧾 JWT-Based Access — Secure API endpoints with token authentication.

🧠 AI-Validated Submissions — Gemini API ensures response authenticity before storage.

⛓️ Blockchain Integrity — All results are cryptographically hashed and verifiable on-chain.

🧍‍♀️ No Central Ownership — Research data remains user-owned and exportable at any time.

🌍 Impact & Scalability

| Metric           | Before NeuroScale       | After NeuroScale                       |
| ---------------- | ----------------------- | -------------------------------------- |
| Participant Cost | ~$50 per participant    | **<$2 per participant**                |
| Experiment Setup | 3–5 days (manual setup) | **10 minutes (no-code deploy)**        |
| Research Scale   | 50–100 participants     | **5,000+ global participants**         |
| Data Reliability | Manual verification     | **AI-validated + blockchain-anchored** |

Long-Term Vision:
Enable every psychology student, independent researcher, and EdTech startup to run cognitive studies at global scale — from a single link.