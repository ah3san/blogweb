export interface Project {
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  category: 'Cybersecurity' | 'AI' | 'Programming' | 'Tools';
}

export const projects: Project[] = [
  {
    name: "AegisGuard",
    description: "A real-time Linux security auditing daemon leveraging eBPF to monitor and block suspicious process executions and network activity.",
    tech: ["Rust", "eBPF", "Linux Kernel", "Security Auditing"],
    github: "https://github.com/novexa/aegisguard",
    category: "Cybersecurity"
  },
  {
    name: "OllamaAgentKit",
    description: "A lightweight, zero-dependency TypeScript SDK to orchestrate autonomous local AI agents with tool-calling support using Ollama.",
    tech: ["TypeScript", "Ollama", "Node.js", "AI Agents"],
    github: "https://github.com/novexa/ollama-agent-kit",
    demo: "https://agent-kit-demo.novexa.tech",
    category: "AI"
  },
  {
    name: "NovaChain",
    description: "An educational, single-file proof-of-authority blockchain implementation to demonstrate cryptography, consensus, and block creation.",
    tech: ["TypeScript", "Node.js", "SHA-256", "Cryptography"],
    github: "https://github.com/novexa/novachain",
    category: "Programming"
  },
  {
    name: "SubSpy",
    description: "A background reconnaissance monitor that polls public certificate transparency logs and sends Slack alerts when new assets are registered.",
    tech: ["Go", "Docker", "PostgreSQL", "Telegram API"],
    github: "https://github.com/novexa/subspy",
    category: "Tools"
  },
  {
    name: "GhostShell",
    description: "A minimal, custom shell written in C with built-in chroot sandboxing, memory tracking, and process isolation tools.",
    tech: ["C", "Linux System API", "Systems Programming", "Sandboxing"],
    github: "https://github.com/novexa/ghostshell",
    category: "Cybersecurity"
  },
  {
    name: "SpecterLink",
    description: "A peer-to-peer file transfer CLI tool that negotiates direct connections using WebRTC, bypassing intermediate storage servers.",
    tech: ["Go", "WebRTC", "P2P", "CLI Interface"],
    github: "https://github.com/novexa/specterlink",
    demo: "https://specterlink.novexa.tech",
    category: "Tools"
  }
];
