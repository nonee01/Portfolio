// Single source of truth for everything the page renders.
// Edit here, not in the components.

export const site = {
  name: "Yassine El Aidous",
  initials: "YEA",
  role: "Software engineering student",
  school: "ENSAM Meknès",
  location: "Meknès, Morocco",
  url: "https://yassine-elaidous.vercel.app",
  email: "y.elaidous@edu.umi.ac.ma",
  githubHandle: "nonee01",
  github: "https://github.com/nonee01",
  linkedin: "https://www.linkedin.com/in/yassine-el-aidous/",
  coffee: "https://coff.ee/elaidousyaz",
  // Drop a PDF at public/cv.pdf and this button goes live.
  cv: "/cv.pdf",
  description:
    "Software engineering student at ENSAM Meknès. Monitoring and alerting, security tooling, wire protocols written by hand, and the tools I use every day.",
}

// Rotating lines under the hero. Same set as the GitHub profile header.
export const taglines = [
  "No framework where the JDK will do.",
  "Suppression is harder than detection.",
  "Two lists nobody reconciles are one list plus a lie.",
  "Wire protocols, by hand, on purpose.",
]

export const about = {
  lead: "I build the kind of software that has to keep running when nobody is watching it.",
  paragraphs: [
    "Most of my work is monitoring and alerting. A service monitor for a production Linux estate, written against the JDK with no third-party dependency: thirteen protocol-aware checks, an alert engine whose hard part is suppression rather than detection, and ownership resolved from the machine's own Linux groups. It runs as the local monitoring service for that estate at 71 MB resident, 35 OS threads, no swap.",
    "The rest splits between security tooling, wire protocols I would rather implement than import, and tools I actually use. A PostgreSQL client that speaks the frontend/backend protocol directly, SCRAM-SHA-256 included, because taking a driver would have ended the no-dependency claim. An offline client for my school's results portal that implements the evaluation règlement from the official text.",
    "I am a software engineering student at ENSAM Meknès. My most recent internship was at COD Partner, where the monitoring work below was built. Earlier work on SMT production lines and AOI systems is where the defect-analysis dashboard comes from.",
  ],
  // The honest note from the GitHub profile, kept because it explains the repo list.
  quiet: {
    title: "Why the counters look quiet",
    body: "Most of what I would want to show is not public, for four separate reasons. Some is covered by a confidentiality agreement: the monitoring work was built inside a company, against its estate, and the configuration alone is a map of an internal network and of who is on call for each part of it. Some is running in production right now, on machines that belong to someone else. Some is a product rather than a demonstration. And a good deal of it I simply use every day, which means it carries my data, my notes and my habits.",
    close: "So the fair way to judge the private half is by what it does and what it is built from.",
  },
  facts: [
    { label: "Studying", value: "Software engineering, ENSAM Meknès" },
    { label: "Internship", value: "COD Partner, service monitoring" },
    { label: "Based in", value: "Meknès, Morocco" },
    { label: "Bias", value: "Zero dependencies" },
  ],
}

export type Project = {
  id: string
  title: string
  kind: string
  blurb: string
  stack: string[]
  repo?: string
  // Private work has no link. The entry says so instead of pretending.
  status?: "private" | "production"
}

export const projects: Project[] = [
  {
    id: "estate-monitoring",
    title: "Estate monitoring",
    kind: "COD Partner · monitoring",
    blurb:
      "An estate of 300 services throws off roughly 20 events a second. A team reads maybe ten messages a day before it starts ignoring the channel, and squeezing the first number down to the second is the whole job. Ownership resolves from the machine's own Linux groups.",
    stack: ["Java (JDK only)", "systemd", "Prometheus", "Grafana", "Loki", "PostgreSQL wire protocol"],
    status: "private",
  },
  {
    id: "ctf-platform",
    title: "Competition security platform",
    kind: "Security tooling",
    blurb:
      "A capture-the-flag event end to end: scoring, phase control, per-player DNS accounting, an AI-domain firewall, and the ten challenges that run on it.",
    stack: ["Rust", "Ratatui", "HTTP API", "iptables"],
    status: "private",
  },
  {
    id: "schoolapp-watcher",
    title: "schoolapp_watcher",
    kind: "School tooling",
    blurb:
      "Offline CLI for the ENSAM results portal. Local store, watch mode with snapshot diffing, and the evaluation règlement implemented from the official text. One store behind a CLI, an HTTP API, Android and KDE clients.",
    stack: ["Python", "SQLite", "Android", "KDE Plasma"],
    repo: "https://github.com/nonee01/schoolapp_watcher",
  },
  {
    id: "ict-defect-dashboard",
    title: "ict-defect-dashboard",
    kind: "Industrial data",
    blurb:
      "Dashboard for in-circuit-test defects on an SMT line. Per-component failure rate and reliability, an SPC control chart, heatmaps, and a resolution workflow with live updates.",
    stack: ["TypeScript", "Next.js", "SPC", "Charting"],
    repo: "https://github.com/nonee01/ict-defect-dashboard",
  },
  {
    id: "practice-platforms",
    title: "Auto-graded practice platforms",
    kind: "Teaching tools",
    blurb:
      "Three of them, for Java, Rust and Git. Problem banks, hidden test suites, sandboxed repositories, and progress that survives syncing between two machines.",
    stack: ["Java", "Rust", "Python", "PostgreSQL", "Git plumbing"],
    status: "private",
  },
  {
    id: "lifeos",
    title: "A personal operating system",
    kind: "Daily driver",
    blurb:
      "Journal, notes, habit and health tracking, daily reports. State kept as text so two laptops can merge it by union instead of conflicting.",
    stack: ["Python", "Text-as-database", "Syncthing"],
    status: "private",
  },
  {
    id: "calendar-organizer",
    title: "calendar-organizer",
    kind: "Automation",
    blurb:
      "Organises a course calendar into Google Calendar: colour assignment, validation with row numbers, statistics and splitting.",
    stack: ["Python", "Google Calendar API"],
    repo: "https://github.com/nonee01/calendar-organizer",
  },
  {
    id: "cpp-dungeon",
    title: "cpp-dungeon",
    kind: "Teaching tools",
    blurb: "A terminal game in C++ that teaches eleven language features, one per room, in French.",
    stack: ["C++", "Terminal UI"],
    repo: "https://github.com/nonee01/cpp-dungeon",
  },
  {
    id: "arthemis",
    title: "arthemis",
    kind: "Simulation",
    blurb:
      "A free-return lunar flyby in two dimensions. The trajectory is the easy half: the interesting stretch is the one where the Moon sits between the spacecraft and the only antenna that can hear it, so occultation is decided by point-to-line geometry rather than by eye. The model is held against real AROW telemetry and JPL Horizons ephemerides.",
    stack: ["Python", "Matplotlib", "JPL Horizons", "Streamlit"],
    repo: "https://github.com/nonee01/arthemis",
  },
]

export const skills = [
  {
    title: "Systems and languages",
    items: ["Java", "Rust", "Python", "C", "C++", "TypeScript"],
  },
  {
    title: "Runtime and infrastructure",
    items: ["Linux", "systemd", "Docker", "Prometheus", "Grafana", "Loki"],
  },
  {
    title: "Data",
    items: ["PostgreSQL", "SQLite", "Wire protocols", "Text-as-database"],
  },
  {
    title: "Web",
    items: ["Next.js", "React", "Tailwind", "Node"],
  },
  {
    title: "Industrial and ML",
    items: ["AOI systems", "Computer vision", "SPC", "Defect classification"],
  },
  {
    title: "Tooling",
    items: ["Git", "Bash", "Neovim", "LaTeX", "Obsidian"],
  },
]
