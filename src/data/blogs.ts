export const blogsData = [
  {
    slug: "getting-started-oscp",
    title: "My Journey Starting OSCP",
    date: "2024-03-15",
    description: "How I prepared my lab environment and mindset for the PWK course.",
    content: `
# Getting Started with OSCP

The **OSCP** is a beast. Here is how I set up my environment.

## The Setup
I decided to use a dedicated laptop running Kali Linux bare metal.

### Tools Used
- Burp Suite Pro
- Terminator
- Obsidian for note taking

\`\`\`bash
sudo apt update && sudo apt upgrade
\`\`\`

More updates coming soon...
    `
  },
  {
    slug: "htb-writeup-machine",
    title: "HackTheBox: Machine Writeup",
    date: "2024-02-10",
    description: "A walkthrough of a medium difficulty Linux machine focusing on privilege escalation.",
    content: `
# HackTheBox Writeup

This box required some interesting **SQL Injection** techniques.

## Reconnaissance
We started with a standard Nmap scan:
> nmap -sC -sV -oA nmap/initial 10.10.10.x

The results showed port 80 and 22 open.
    `
  }
];