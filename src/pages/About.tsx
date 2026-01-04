import { Shield, Target, Lightbulb, TrendingUp } from "lucide-react";
import Layout from "@/components/layout/Layout";
import TypeWriter from "@/components/effects/TypeWriter";

const values = [
  {
    icon: Target,
    title: "Offensive Security Focus",
    description: "Specializing in penetration testing, vulnerability assessment, and ethical hacking techniques.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Embodying the Kaizen philosophy - constant improvement through daily practice and study.",
  },
  {
    icon: TrendingUp,
    title: "Knowledge Sharing",
    description: "Committed to making cybersecurity education accessible to everyone through free resources.",
  },
];

const About = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary text-glow-cyan">KaizenBreach</span>
            </h1>
            
            {/* Terminal-style intro */}
            <div className="bg-card border border-border rounded-lg p-6 font-mono text-left mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-neon-green" />
                <span className="ml-2 text-muted-foreground text-sm">about.sh</span>
              </div>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="text-primary">$</span>{" "}
                  <TypeWriter text="cat /etc/kaizenbreach/mission.txt" speed={30} />
                </p>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  KaizenBreach is a cybersecurity education platform built on the Japanese 
                  philosophy of "Kaizen" - continuous improvement. We believe that mastering 
                  security requires daily dedication, hands-on practice, and a mindset that 
                  embraces constant learning.
                </p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're starting your journey in ethical hacking or looking to sharpen 
              your offensive security skills, KaizenBreach provides the resources you need 
              to level up.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card/50 border border-border rounded-lg p-8 text-center hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.1)] animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              );
            })}
          </div>

          {/* Philosophy */}
          <div className="max-w-3xl mx-auto bg-card/30 border border-border rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              The <span className="text-secondary">Kaizen</span> Philosophy
            </h2>
            <p className="text-muted-foreground mb-6">
              "Kaizen" (改善) means "change for the better." In cybersecurity, this translates 
              to constantly improving your skills, staying updated with the latest techniques, 
              and never settling for "good enough." Every day is an opportunity to learn 
              something new and become a better security professional.
            </p>
            <div className="font-mono text-primary text-sm">
              while(true) {"{"} learn(); practice(); improve(); {"}"}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
