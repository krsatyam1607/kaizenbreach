import { Download, Lock, FileText, Shield } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Resume = () => {
  const handleDownload = () => {
    // Placeholder - would trigger actual PDF download
    alert("Resume download will be available once you add your PDF file.");
  };

  return (
    <Layout>
      <div className="min-h-screen py-20 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Terminal Header */}
            <div className="bg-card border border-border rounded-lg overflow-hidden mb-8 animate-fade-in">
              {/* Terminal Bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-muted/50 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-neon-green" />
                <span className="ml-2 font-mono text-sm text-muted-foreground">
                  secure_download.sh
                </span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm text-left space-y-3">
                <p>
                  <span className="text-primary">$</span> ls -la /resume/
                </p>
                <p className="text-muted-foreground">
                  -rw-r--r-- 1 kaizen breach 256K Jan 04 2026 KaizenBreach_Resume.pdf
                </p>
                <p>
                  <span className="text-primary">$</span> sha256sum KaizenBreach_Resume.pdf
                </p>
                <p className="text-muted-foreground text-xs break-all">
                  e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
                </p>
                <p>
                  <span className="text-neon-green">✓</span> File integrity verified
                </p>
              </div>
            </div>

            {/* Info */}
            <div className="mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Download <span className="text-primary text-glow-cyan">Resume</span>
              </h1>
              <p className="text-muted-foreground">
                Get my professional resume for collaboration opportunities, 
                security consultations, or employment inquiries.
              </p>
            </div>

            {/* Download Card */}
            <div 
              className="bg-card/50 border border-border rounded-lg p-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <FileText className="h-10 w-10 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">KaizenBreach_Resume.pdf</h3>
                  <p className="text-sm text-muted-foreground">Professional Resume • PDF Format</p>
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

              <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-neon-green" />
                <span>Verified & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
