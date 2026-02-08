import { 
  FileText, Video, User, Download, 
  Github, Youtube, Linkedin, Instagram, MessageCircle 
} from "lucide-react";

export const siteConfig = {
  author: "Kr Satyam",
  role: "3rd Year CSE Student",
  tagline: "Cybersecurity Learner & Offensive Security Enthusiast",
  email: "kaizenbreach@gmail.com",
  socials: {
    github: "https://github.com/krsatyam11",
    linkedin: "https://linkedin.com/in/krsatyam07",
    youtube: "https://youtube.com/@KaizenBreach",
    instagram: "https://instagram.com/kaizenbreach",
    threads: "https://threads.net/@kaizenbreach",
  }
};

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "Notes", href: "/notes" },
  { name: "Tools", href: "/tools" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Connect", href: "/connect" },
];

export const socialLinksData = [
  {
    name: "YouTube",
    description: "Watch tutorials, CTF walkthroughs, and security content",
    url: siteConfig.socials.youtube,
    icon: Youtube,
    color: "hover:border-destructive hover:text-destructive hover:shadow-[0_0_30px_hsl(0_100%_50%_/_0.3)]",
    bgHover: "hover:bg-destructive/10",
  },
  {
    name: "Instagram",
    description: "Follow for daily security tips and updates",
    url: siteConfig.socials.instagram,
    icon: Instagram,
    color: "hover:border-secondary hover:text-secondary hover:shadow-[0_0_30px_hsl(270_100%_65%_/_0.3)]",
    bgHover: "hover:bg-secondary/10",
  },
  {
    name: "LinkedIn",
    description: "Connect for professional networking and opportunities",
    url: siteConfig.socials.linkedin,
    icon: Linkedin,
    color: "hover:border-accent hover:text-accent hover:shadow-[0_0_30px_hsl(220_100%_50%_/_0.3)]",
    bgHover: "hover:bg-accent/10",
  },
  {
    name: "Threads",
    description: "Join the conversation on Threads",
    url: siteConfig.socials.threads,
    icon: MessageCircle,
    color: "hover:border-primary hover:text-primary hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.3)]",
    bgHover: "hover:bg-primary/10",
  },
];

export const featuresData = [
  {
    icon: FileText,
    title: "Cybersecurity Notes",
    description: "Comprehensive notes on web security, networking, Linux, and more.",
    link: "/notes",
    color: "text-primary",
    external: false,
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "In-depth tutorials and walkthroughs on offensive security techniques.",
    link: siteConfig.socials.youtube,
    external: true,
    color: "text-destructive",
  },
  {
    icon: User,
    title: "About KaizenBreach",
    description: "Learn about the philosophy behind continuous improvement in security.",
    link: "/about",
    external: false,
    color: "text-secondary",
  },
  {
    icon: Download,
    title: "Resume",
    description: "Download my professional resume for collaborations and opportunities.",
    link: "/resume",
    external: false,
    color: "text-accent",
  },
];