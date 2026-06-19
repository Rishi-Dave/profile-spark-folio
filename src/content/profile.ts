import type { Profile } from "./types";
import prStats from "./generated/pr-stats.json";

/* =============================================================================
   SINGLE SOURCE OF TRUTH for everything on the page.
   Edit a number, link, PR, experience, or project HERE and the site updates.

   Conventions:
   - `confirm: true`  → stat is unverified; the UI flags it visibly until removed.
                        Verify against the live source, then delete the flag.
   - `pending: true`  → link target isn't live yet (e.g. arXiv preprint). The UI
                        renders a clearly-marked "forthcoming" slot — NEVER a fake
                        URL. Drop in the real href and remove `pending` when live.
   - Merged-PR count is sourced from generated/pr-stats.json (build-time GitHub
     fetch) and falls back to STATIC_MERGED_PRS below when offline.
   ========================================================================== */

const STATIC_MERGED_PRS = 38; // [CONFIRM] sources disagree — verify before launch
const mergedPRs =
  typeof prStats.merged === "number" && prStats.merged > 0
    ? prStats.merged
    : STATIC_MERGED_PRS;

const PR_SEARCH_MERGED =
  "https://github.com/search?q=author%3ARishi-Dave+is%3Apr+is%3Amerged&type=pullrequests";

export const profile: Profile = {
  identity: {
    name: "Rishi Dave",
    positioning: "ML systems & hardware-accelerated inference.",
    gpa: "3.97 / 4.00",
    gradDate: "June 2027",
    honors: ["Dean's Honor List", "Chancellor's Honor List"],
    citizenship: "US Citizen",
    contact: {
      email: "rishipdave@gmail.com",
      phone: "(510) 894-9147",
    },
    profiles: [
      { label: "GitHub", href: "https://github.com/Rishi-Dave", kind: "github" },
      { label: "LinkedIn", href: "https://linkedin.com/in/rishi-dave1", kind: "linkedin" },
      { label: "Résumé", href: "/Rishi-Resume.pdf", kind: "resume" },
      { label: "Email", href: "mailto:rishipdave@gmail.com", kind: "email" },
    ],
  },

  // Hero anchors: lead recruiter signal — current role, open-source scale, one
  // flagship research number (FPGA). Breadth lives in the Experience section.
  heroStats: [
    {
      value: "Capital One",
      unit: "'26",
      label: "Data Engineering Intern · Dallas",
      evidence: { label: "View on LinkedIn", href: "https://linkedin.com/in/rishi-dave1", kind: "linkedin" },
    },
    {
      value: String(mergedPRs),
      unit: "merged",
      label: "PRs into ONNX Runtime & PyTorch",
      evidence: { label: "View merged PRs", href: PR_SEARCH_MERGED, kind: "pr" },
      confirm: true,
    },
    {
      value: "491×",
      unit: "vs CPU",
      label: "FPGA inference speedup vs CPU",
      evidence: { label: "Preprint forthcoming", href: "#", kind: "arxiv", pending: true },
      confirm: true,
    },
  ],

  // ── LEAD SIGNAL ───────────────────────────────────────────────────────────
  openSource: {
    mergedCount: {
      value: String(mergedPRs),
      unit: "merged",
      label: "Pull requests merged into Microsoft ONNX Runtime & Meta PyTorch",
      evidence: { label: "View on GitHub", href: PR_SEARCH_MERGED, kind: "pr" },
      confirm: true,
    },
    totalNote:
      "48 PRs opened across Microsoft ONNX Runtime (42) and Meta PyTorch (6).",
    reviewers: [
      { name: "Tianlei Wu", org: "Microsoft — transformer-optimization lead" },
      { name: "wconstab", org: "Meta — PyTorch" },
    ],
    subsystems: [
      "Python graph optimizer",
      "Quantization toolchain — QDQ / MatMulNBits / FP8",
      "ORT training",
      "Core C++ graph verification",
      "Python bindings — DLPack / typing",
      "Build & portability",
    ],
    featured: [
      {
        repo: "onnxruntime",
        number: 27418,
        title: "Pre-LayerNorm Attention Fusion",
        impact: "Unlocks attention fusion for GPT / LLaMA / Mistral-class LLMs.",
        url: "https://github.com/microsoft/onnxruntime/pull/27418",
      },
      {
        repo: "onnxruntime",
        number: 27707,
        title: "Subgraph type propagation in graph.cc (C++)",
        impact: "Merged after a 70-day review; fixed BeamSearch / Whisper type-info errors.",
        url: "https://github.com/microsoft/onnxruntime/pull/27707",
      },
      {
        repo: "onnxruntime",
        number: 27556,
        title: "Qwen3 RoPE fusion (with #27590)",
        impact: "56 nodes fused on Qwen3-0.6B — a 37% node reduction.",
        url: "https://github.com/microsoft/onnxruntime/pull/27556",
      },
      {
        repo: "onnxruntime",
        number: 27489,
        title: "SkipLayerNorm broadcasting",
        impact: "Verified against 4 Hugging Face models.",
        url: "https://github.com/microsoft/onnxruntime/pull/27489",
      },
      {
        repo: "pytorch",
        number: 176979,
        title: "DTensor sharding for aten.detach_",
        impact:
          "Approved by wconstab; fixes crashes in gradient accumulation, mixed-precision & checkpointing.",
        url: "https://github.com/pytorch/pytorch/pull/176979",
      },
    ],
    framing:
      "Production ML-infrastructure depth in codebases used by millions — reviewed and merged by the engineers who own those subsystems.",
  },

  // ── RESEARCH ──────────────────────────────────────────────────────────────
  research: [
    {
      id: "fpga",
      title: "FPGA-Accelerated Time-Series Classification",
      advisor: "Prof. Phillip Brisk",
      role: "First author",
      summary:
        "First work to hardware-accelerate MiniRocket / MultiRocket (UCR Time Series Archive) on FPGA. An AMD Alveo U280 (Virtex UltraScale+ with HBM) is configured as a SmartNIC and classifies time series directly off a 100G Ethernet interface with zero host copies.",
      stats: [
        {
          value: "491×",
          unit: "vs CPU",
          label: "speedup — 9,585 inferences/sec on GunPoint",
          evidence: { label: "Preprint forthcoming", href: "#", kind: "arxiv", pending: true },
          confirm: true,
        },
        {
          value: "1,069×",
          unit: "vs CPU",
          label: "energy efficiency — 0.0072 J vs 7.69 J per inference",
          evidence: { label: "Preprint forthcoming", href: "#", kind: "arxiv", pending: true },
          confirm: true,
        },
        {
          value: "II=1",
          label: "sustained initiation interval (throughput)",
          evidence: { label: "Code forthcoming", href: "#", kind: "github-repo", pending: true },
          confirm: true,
        },
        {
          value: "~40%",
          unit: "fewer",
          label: "dot-products, via the DP-Reuse engine",
          evidence: { label: "Preprint forthcoming", href: "#", kind: "arxiv", pending: true },
          confirm: true,
        },
      ],
      contributions: [
        "Dot-Product Reuse (DP-Reuse) convolution engine",
        "Fused CONV+PPV single-pass kernel — 0 DSPs, −18% BRAM",
        "SmartNIC streaming architecture — zero host copies off 100G Ethernet",
        "Multi-CU scaling across SLRs",
      ],
      status:
        "Accepted as poster / extended abstract at IEEE FCCM 2026. Full-paper resubmission sequenced through FPL / ARC / ReConFig. arXiv preprint + public GitHub release in preparation.",
      links: [
        { label: "arXiv preprint", href: "#", kind: "arxiv", pending: true },
        { label: "GitHub release", href: "#", kind: "github-repo", pending: true },
        { label: "UCR Research Symposium talk (Apr 2026)", href: "#", kind: "talk", pending: true },
      ],
    },
    {
      id: "coop",
      title: "Send-Before-Transform (SBT) for V2V 3D Detection",
      advisor: "Prof. Hang Qiu",
      role: "Sole author",
      summary:
        "Cooperative 3D object detection where connected vehicles share compressed BEV features over V2V links. SBT trades AP for O(1) transmitter scalability versus Transform-Before-Send's O(N) cost — and quantifies that the remaining gap is closeable through supervision design, not model capacity.",
      stats: [
        {
          value: "0.67",
          unit: "AP@0.7",
          label: "PP-SBT — best configuration",
          evidence: { label: "Preprint possible", href: "#", kind: "arxiv", pending: true },
          confirm: true,
        },
        {
          value: "0.79",
          unit: "AP@0.7",
          label: "channel-swap oracle — isolates the gap as supervision, not capacity",
          evidence: { label: "Preprint possible", href: "#", kind: "arxiv", pending: true },
          confirm: true,
        },
        {
          value: "+0.233",
          unit: "AP",
          label: "detection-loss supervision over the warp baseline",
          evidence: { label: "Preprint possible", href: "#", kind: "arxiv", pending: true },
          confirm: true,
        },
        {
          value: "500+",
          unit: "GPU-hrs",
          label: "across 120+ experiments — A6000 Ada, SLURM / Apptainer",
          evidence: { label: "Preprint possible", href: "#", kind: "arxiv", pending: true },
          confirm: true,
        },
      ],
      contributions: [
        "Send-Before-Transform paradigm — O(1) transmitter scalability",
        "Channel-swap oracle diagnostic isolating the supervision gap",
        "Detection-loss supervision — +0.233 AP over the warp baseline",
      ],
      status: "Active; targeting a 2026–2027 venue. arXiv preprint possible.",
      links: [{ label: "arXiv preprint", href: "#", kind: "arxiv", pending: true }],
    },
    {
      id: "nitr",
      title: "NITR — LLMs on Repository-Scale C++ Reasoning",
      advisor: "Prof. Qian Zhang",
      role: "Contributor — authored Case 24",
      summary:
        "A UCR-led benchmark for large language models on repository-scale C++ reasoning. I authored Case 24, a multi-file dependency / complex-language-feature test case.",
      stats: [],
      contributions: [
        "Authored Case 24 — multi-file dependency & complex-language-feature reasoning",
      ],
      status: "Active arXiv preprint.",
      links: [{ label: "arXiv preprint", href: "#", kind: "arxiv", pending: true }],
    },
  ],

  // ── SELECTED PROJECTS (curated) ─────────────────────────────────────────────
  projects: [
    {
      name: "MUTA",
      blurb: "ML system for time allocation with a full production MLOps loop.",
      stack: ["AWS ECS", "Feature store", "Prometheus", "Python"],
      highlights: [
        "Automated retraining + drift detection",
        "<200ms inference latency",
        "End-to-end monitoring (Prometheus)",
      ],
    },
    {
      name: "Autonomous AI Research Assistant",
      blurb:
        "LangGraph multi-agent system for autonomous research — scraping, fact-checking, and report generation.",
      stack: ["LangGraph", "Pinecone", "MongoDB", "PostgreSQL"],
      highlights: [
        "Multi-agent orchestration: scrape / fact-check / report-gen",
        "Hybrid vector + relational retrieval",
      ],
    },
    {
      name: "Sous Chef",
      blurb: "Voice AI cooking assistant built at a hackathon.",
      stack: ["Gemini", "Web Audio", "React"],
      highlights: [
        "Four-state audio state machine",
        "Gemini-powered natural-language understanding",
      ],
    },
  ],

  // ── EXPERIENCE (compact) ────────────────────────────────────────────────────
  experience: [
    {
      org: "Capital One",
      role: "Technology Intern",
      track: "Data Engineering",
      location: "Dallas, TX",
      period: "June – August 2026",
      featured: true,
      oneLiner: "ML data pipelines, feature-engineering infrastructure, and MLOps.",
    },
    {
      org: "UC Riverside ITS",
      role: "Data Science Fellow",
      location: "Riverside, CA",
      period: "Summer 2025",
      oneLiner:
        "Built an AI academic planner adopted by 250–500+ students, cutting planning from 45 min to under 2.",
      details: [
        "AI academic planner adopted by 250–500+ students — planning 45 min → <2 min",
        "CatBoost course-size predictor: <15% MAPE on 95% of classes",
        "RAG pipeline over 10,000+ course sections at <100ms latency",
        "$5,500 fellowship stipend",
      ],
    },
    {
      org: "Reeko Cabinets",
      role: "ML Engineer (sole)",
      period: "June – September 2024",
      oneLiner:
        "Built a demand-forecasting system — +25% accuracy over manual — with automated ordering.",
    },
    {
      org: "Crest Data Systems",
      role: "Software Engineer Intern",
      period: "June – August 2023",
      oneLiner:
        "Real-time log-streaming pipeline (1,000+ files/min); resolved a 12% login-failure rate.",
    },
  ],

  // ── LEADERSHIP (brief tail) ─────────────────────────────────────────────────
  leadership: [
    {
      org: "AI Student Collective (AISC)",
      role: "Projects Lead",
      note: "Taught 50+ students to build production AI agents with LangGraph + MCP.",
    },
    {
      org: "UCR AAG",
      role: "Captain (3 yrs) · Production Lead",
      note: "Competitive dance team — 3 national trophies.",
    },
  ],

  meta: { siteUrl: "https://rishidave.com" },
};
