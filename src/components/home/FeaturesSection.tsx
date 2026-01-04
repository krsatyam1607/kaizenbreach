import { Link } from "react-router-dom";
import { FileText, Video, User, ExternalLink, Download, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "Cybersecurity Notes",
    description: "Comprehensive notes on web security, networking, Linux, and more.",
    link: "/notes",
    color: "text-primary",
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "In-depth tutorials and walkthroughs on offensive security techniques.",
    link: "https://youtube.com/@KaizenBreach",
    external: true,
    color: "text-destructive",
  },
  {
    icon: User,
    title: "About KaizenBreach",
    description: "Learn about the philosophy behind continuous improvement in security.",
    link: "/about",
    color: "text-secondary",
  },
  {
    icon: Download,
    title: "Resume",
    description: "Download my professional resume for collaborations and opportunities.",
    link: "/resume",
    color: "text-accent",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-mono text-sm text-primary">What I Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Resources for <span className="text-primary">Security Enthusiasts</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Everything you need to start your journey in ethical hacking and cybersecurity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const content = (
              <Card
                key={index}
                className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.1)] cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className={`${feature.color} mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {feature.title}
                    {feature.external && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    )}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );

            return feature.external ? (
              <a
                key={index}
                href={feature.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            ) : (
              <Link key={index} to={feature.link}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
