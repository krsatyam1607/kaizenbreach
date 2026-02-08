import { ExternalLink, MessageCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { socialLinksData, siteConfig } from "@/data/config";

const Connect = () => {
  const handleContact = () => {
    const subject = "Collaboration / Cybersecurity Query – KaizenBreach";
    const body = `Hello KaizenBreach,

I hope this message finds you well. I am reaching out regarding:

[ ] Collaboration opportunity
[ ] Cybersecurity query
[ ] Feedback on your content
[ ] Other: _______________

Details:
[Please describe your inquiry here]`;

    // Modern way to construct mailto links
    const params = new URLSearchParams({
      subject: subject,
      body: body
    });

    window.location.href = `mailto:${siteConfig.email}?${params.toString()}`;
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
            {socialLinksData.map((link, index) => {
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
          <div className="max-w-xl mx-auto text-center animate-fade-in-up delay-500">
            <div className="bg-card/30 border border-border rounded-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
              
              <h2 className="text-2xl font-bold mb-4">
                Want to <span className="text-secondary-foreground">Collaborate</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                Have a question, collaboration idea, or just want to say hi? 
                Click below to send me an email with a pre-filled template.
              </p>
              <button
                onClick={handleContact}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-mono font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.5)] hover:scale-105 active:scale-95"
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