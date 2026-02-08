import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ExternalLink, Terminal, Wrench } from "lucide-react";
import { toolsData } from "@/data/tools";
import { Button } from "@/components/ui/button";

const Tools = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            <span className="text-primary">Tool</span> Arsenal
          </h1>
          <p className="text-muted-foreground max-w-2xl font-mono text-sm">
            // Custom scripts and utilities developed for security operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool, index) => (
            <Card key={index} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div className="p-2 bg-secondary/30 rounded-md">
                    <Terminal className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="outline" className="font-mono text-xs">{tool.status}</Badge>
                </div>
                <CardTitle className="text-xl">{tool.title}</CardTitle>
                <CardDescription className="mt-2">{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {tool.tech.map((t) => (
                    <span key={t} className="text-[10px] text-muted-foreground bg-secondary/50 px-2 py-0.5 rounded-full border border-border">
                      {t}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" className="w-full gap-2 mt-4" asChild>
                  <a href={tool.link} target="_blank" rel="noreferrer">
                    <ExternalLink className="h-4 w-4" /> View Source
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Tools;