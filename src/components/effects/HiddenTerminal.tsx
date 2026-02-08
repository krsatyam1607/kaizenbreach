import { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import { siteConfig } from "@/data/config";

const HiddenTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "KaizenBreach OS [Version 1.0.0]",
    "(c) 2026 KaizenBreach. All rights reserved.",
    "",
    "Type 'help' for available commands.",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  // Toggle on Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-scroll and focus
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, `user@kaizen:~$ ${input}`];

      switch (cmd) {
        case "help":
          newHistory.push("Available commands: whoami, socials, contact, tools, clear, exit");
          break;
        case "whoami":
          newHistory.push(`${siteConfig.author} - ${siteConfig.role}`);
          newHistory.push(siteConfig.tagline);
          break;
        case "socials":
          newHistory.push("GitHub: " + siteConfig.socials.github);
          newHistory.push("LinkedIn: " + siteConfig.socials.linkedin);
          newHistory.push("YouTube: " + siteConfig.socials.youtube);
          break;
        case "contact":
          newHistory.push("Email: " + siteConfig.email);
          break;
        case "tools":
          newHistory.push("Navigate to /tools to see my arsenal.");
          break;
        case "clear":
          setHistory([]);
          setInput("");
          return;
        case "exit":
          setIsOpen(false);
          break;
        case "":
          break;
        default:
          newHistory.push(`Command not found: ${cmd}`);
      }

      setHistory(newHistory);
      setInput("");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-[#0c0c0c] border border-primary/30 rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden font-mono text-sm">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 bg-secondary/20 border-b border-white/10">
          <span className="text-muted-foreground text-xs">terminal — bash</span>
          <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-white">
            <X className="h-4 w-4" />
          </button>
        </div>
        
        {/* Body */}
        <div className="p-4 h-[60vh] overflow-y-auto text-green-500" onClick={() => inputRef.current?.focus()}>
          {history.map((line, i) => (
            <div key={i} className="mb-1 whitespace-pre-wrap">{line}</div>
          ))}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-blue-400">user@kaizen:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-green-500 focus:ring-0 p-0"
              autoFocus
              spellCheck="false"
              autoComplete="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};

export default HiddenTerminal;