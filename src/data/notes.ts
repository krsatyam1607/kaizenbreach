export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  tags: string[];
  downloadUrl: string;
  icon: string;
}

export const notesData: Note[] = [
  {
    id: "1",
    title: "SQL Injection Fundamentals",
    description: "Complete guide to understanding and exploiting SQL injection vulnerabilities in web applications.",
    category: "Web Security",
    difficulty: "Intermediate",
    tags: ["SQL", "Web", "OWASP"],
    downloadUrl: "#",
    icon: "Database",
  },
  {
    id: "2",
    title: "Cross-Site Scripting (XSS)",
    description: "Learn about reflected, stored, and DOM-based XSS attacks with practical examples.",
    category: "Web Security",
    difficulty: "Intermediate",
    tags: ["XSS", "JavaScript", "Web"],
    downloadUrl: "#",
    icon: "Code",
  },
  {
    id: "3",
    title: "Linux Fundamentals for Hackers",
    description: "Essential Linux commands, file system navigation, and bash scripting for security professionals.",
    category: "Linux",
    difficulty: "Beginner",
    tags: ["Linux", "Bash", "CLI"],
    downloadUrl: "#",
    icon: "Terminal",
  },
  {
    id: "4",
    title: "Networking Essentials",
    description: "TCP/IP, OSI model, subnetting, and network protocols explained for security testing.",
    category: "Networking",
    difficulty: "Beginner",
    tags: ["TCP/IP", "OSI", "Protocols"],
    downloadUrl: "#",
    icon: "Network",
  },
  {
    id: "5",
    title: "Privilege Escalation - Linux",
    description: "Techniques for escalating privileges on Linux systems including SUID, cron jobs, and kernel exploits.",
    category: "Post Exploitation",
    difficulty: "Advanced",
    tags: ["Linux", "PrivEsc", "Exploitation"],
    downloadUrl: "#",
    icon: "Shield",
  },
  {
    id: "6",
    title: "OSINT Techniques",
    description: "Open Source Intelligence gathering methods for reconnaissance and information gathering.",
    category: "Reconnaissance",
    difficulty: "Beginner",
    tags: ["OSINT", "Recon", "Intelligence"],
    downloadUrl: "#",
    icon: "Search",
  },
  {
    id: "7",
    title: "Password Attacks & Cracking",
    description: "Dictionary attacks, brute force, rainbow tables, and modern password cracking techniques.",
    category: "Authentication",
    difficulty: "Intermediate",
    tags: ["Passwords", "Cracking", "Hashcat"],
    downloadUrl: "#",
    icon: "Key",
  },
  {
    id: "8",
    title: "CSRF Attack Vectors",
    description: "Understanding Cross-Site Request Forgery attacks and bypass techniques.",
    category: "Web Security",
    difficulty: "Intermediate",
    tags: ["CSRF", "Web", "Tokens"],
    downloadUrl: "#",
    icon: "RefreshCw",
  },
  {
    id: "9",
    title: "Buffer Overflow Basics",
    description: "Introduction to stack-based buffer overflows and exploit development fundamentals.",
    category: "Binary Exploitation",
    difficulty: "Advanced",
    tags: ["BOF", "Assembly", "Exploitation"],
    downloadUrl: "#",
    icon: "Cpu",
  },
  {
    id: "10",
    title: "Web Application Enumeration",
    description: "Tools and techniques for discovering hidden directories, subdomains, and vulnerabilities.",
    category: "Reconnaissance",
    difficulty: "Beginner",
    tags: ["Enumeration", "Burp", "Fuzzing"],
    downloadUrl: "#",
    icon: "Scan",
  },
];

export const categories = [
  "All",
  "Web Security",
  "Linux",
  "Networking",
  "Post Exploitation",
  "Reconnaissance",
  "Authentication",
  "Binary Exploitation",
];

export const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
