import { Link } from "react-router-dom";
import { ExternalLink, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { featuresData } from "@/data/config";

const FeaturesSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <span className="font-mono text-xs text-primary font-bold">RESOURCES</span>
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
          {featuresData.map((feature, index) => {
            const Icon = feature.icon;
            const CardBody = (
              <Card className="h-full group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer backdrop-blur-sm">
                <CardContent className="p-6 flex flex-col items-start h-full">
                  <div className={`${feature.color} p-3 rounded-lg bg-background/50 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    {feature.title}
                    {feature.external && (
                      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    )}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );

            return feature.external ? (
              <a key={index} href={feature.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                {CardBody}
              </a>
            ) : (
              <Link key={index} to={feature.link} className="block h-full">
                {CardBody}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;