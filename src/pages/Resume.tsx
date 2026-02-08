import { Download, Lock, FileText, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { siteConfig } from "@/data/config";

const TerminalBlock = () => (
  <div className="bg-card border border-border rounded-lg overflow-hidden mb-8 animate-fade-in shadow-2xl">
    {/* Terminal Header */}
    <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
      <div className="w-3 h-3 rounded-full bg-destructive/80" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
      <div className="w-3 h-3 rounded-full bg-green-500/80" />
      <span className="ml-2 font-mono text-xs text-muted-foreground opacity-50">
        bash — 80x24
      </span>
    </div>

    {/* Terminal Body */}
    <div className="p-6 font-mono text-sm text-left space-y-3 bg-black/40">
      <div className="flex gap-2">
        <span className="text-green-500">➜</span>
        <span className="text-blue-400">~</span>
        <span className="text-muted-foreground">$ ./secure_download.sh --target=resume</span>
      </div>
      
      <p className="text-muted-foreground animate-pulse">
        Initializing handshake...
      </p>
      
      <div>
        <span className="text-primary">Target:</span> {siteConfig.author}_Resume.pdf
      </div>
      
      <div className="text-muted-foreground text-xs break-all opacity-70">
        Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
      </div>
      
      <div className="text-green-400 font-bold">
        ✓ Integrity Verified. Ready for download.
      </div>
    </div>
  </div>
);

const Resume = () => {
  const handleDownload = () => {
  // Creates a link, clicks it, and removes it
  const link = document.createElement('a');
  link.href = "/Kumar_Satyam_Resume.pdf"; // Points to public/Kumar_Satyam_Resume.pdf
  link.download = "Kumar_Satyam_Resume.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            
            <TerminalBlock />

            {/* Info Text */}
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Download <span className="text-primary text-glow-cyan">Resume</span>
              </h1>
              <p className="text-muted-foreground max-w-lg mx-auto">
                Get my professional resume for collaboration opportunities, 
                security consultations, or employment inquiries.
              </p>
            </div>

            {/* Download Button Card */}
            <div 
              className="bg-card/50 border border-border rounded-lg p-8 animate-fade-in-up hover:border-primary/30 transition-colors"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">{siteConfig.author.replace(" ", "_")}_Resume.pdf</h3>
                  <p className="text-xs text-muted-foreground font-mono">PDF Format • 256 KB</p>
                </div>
              </div>

              <button
                onClick={handleDownload}
                className="group w-full flex items-center justify-center gap-3 py-4 px-6 bg-primary text-primary-foreground font-mono font-medium rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <Lock className="h-5 w-5 transition-transform group-hover:rotate-12" />
                <span>Secure Download</span>
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
              </button>

              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground/60 font-mono">
                <Shield className="h-3 w-3" />
                <span>Scanned & Verified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;