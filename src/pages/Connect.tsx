import { Youtube, Instagram, Linkedin, MessageCircle, ExternalLink } from "lucide-react";
import Layout from "@/components/layout/Layout";

const socialLinks = [
  {
    name: "YouTube",
    description: "Watch tutorials, CTF walkthroughs, and security content",
    url: "https://youtube.com/@KaizenBreach",
    icon: Youtube,
    color: "hover:border-destructive hover:text-destructive hover:shadow-[0_0_30px_hsl(0_100%_50%_/_0.3)]",
    bgHover: "hover:bg-destructive/10",
  },
  {
    name: "Instagram",
    description: "Follow for daily security tips and updates",
    url: "https://instagram.com/kaizenbreach",
    icon: Instagram,
    color: "hover:border-secondary hover:text-secondary hover:shadow-[0_0_30px_hsl(270_100%_65%_/_0.3)]",
    bgHover: "hover:bg-secondary/10",
  },
  {
    name: "LinkedIn",
    description: "Connect for professional networking and opportunities",
    url: "https://linkedin.com/in/kaizenbreach",
    icon: Linkedin,
    color: "hover:border-accent hover:text-accent hover:shadow-[0_0_30px_hsl(220_100%_50%_/_0.3)]",
    bgHover: "hover:bg-accent/10",
  },
  {
    name: "Threads",
    description: "Join the conversation on Threads",
    url: "https://threads.net/@kaizenbreach",
    icon: MessageCircle,
    color: "hover:border-primary hover:text-primary hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.3)]",
    bgHover: "hover:bg-primary/10",
  },
];

const Connect = () => {
  const handleContact = () => {
    const subject = encodeURIComponent("Collaboration / Cybersecurity Query – KaizenBreach");
    const body = encodeURIComponent(
`Hello KaizenBreach,

I hope this message finds you well. I am reaching out regarding:

[ ] Collaboration opportunity
[ ] Cybersecurity query
[ ] Feedback on your content
[ ] Other: _______________

Details:
[Please describe your inquiry here]

Looking forward to hearing from you.

Best regards,
[Your Name]`
    );
    window.location.href = `mailto:contact@kaizenbreach.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary text-glow-cyan">Connect</span> with Me
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
              Let's connect! Follow me on social media or reach out directly.
            </p>
          </div>

          {/* Social Links Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center gap-4 p-6 bg-card/50 border border-border rounded-lg transition-all duration-300 ${link.color} ${link.bgHover} animate-fade-in-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <Icon className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold flex items-center gap-2">
                      {link.name}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Section */}
          <div className="max-w-xl mx-auto text-center">
            <div className="bg-card/30 border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4">
                Want to <span className="text-secondary">Collaborate</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                Have a question, collaboration idea, or just want to say hi? 
                Click below to send me an email with a pre-filled template.
              </p>
              <button
                onClick={handleContact}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.5)] hover:scale-105"
              >
                <MessageCircle className="h-5 w-5" />
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Connect;
