import { BookOpen, ExternalLink, Loader2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { currentLearningData } from "@/data/learning";

const LearningSection = () => {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-10">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold tracking-tight">What I'm Learning</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentLearningData.map((item) => (
            <Card key={item.id} className="bg-card border-border flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="outline" className="border-primary/20 text-primary">
                    {item.category}
                  </Badge>
                  {item.status === "In Progress" && (
                    <Loader2 className="h-4 w-4 text-muted-foreground animate-spin slow-spin" />
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">{item.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6 h-16 overflow-hidden text-ellipsis">
                  {item.description}
                </p>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-muted-foreground font-mono">
                    <span>{item.status}</span>
                    <span>{item.progress}%</span>
                  </div>
                  <Progress value={item.progress} className="h-2" />
                </div>

                {item.resourceLink && (
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <Button 
                      variant="link" 
                      className="p-0 h-auto text-xs text-muted-foreground hover:text-primary"
                      asChild
                    >
                      <a href={item.resourceLink} target="_blank" rel="noopener noreferrer">
                        View Resource <ExternalLink className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningSection;