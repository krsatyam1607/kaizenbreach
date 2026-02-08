import { useState, useMemo } from "react";
import { Search, Download, Database, Code, Terminal, Network, Shield, Key, RefreshCw, Cpu, Scan, FileText } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { notesData, categories } from "@/data/notes";

// Map string icon names from data to actual Lucide components
const IconMap: Record<string, any> = {
  Database, Code, Terminal, Network, Shield, Search: Scan, Key, RefreshCw, Cpu, Scan, FileText
};

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotes = useMemo(() => {
    return notesData.filter((note) => {
      const lowerQuery = searchQuery.toLowerCase();
      const matchesSearch =
        note.title.toLowerCase().includes(lowerQuery) ||
        note.tags.some((tag) => tag.toLowerCase().includes(lowerQuery));
      const matchesCategory = selectedCategory === "All" || note.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-12 space-y-4 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Cybersecurity <span className="text-primary">Notes</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl font-mono text-sm">
            // Categorized study materials, cheat sheets, and offensive security references.
          </p>
        </div>

        {/* Filters Section */}
        <div className="flex flex-col gap-6 mb-8 p-4 bg-secondary/10 rounded-lg border border-border/50">
          {/* Search Bar */}
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search notes (e.g., SQL Injection, Linux)..."
              maxLength={50} // Security: Limit input length
              className="pl-9 bg-background border-border focus:ring-primary/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs md:text-sm transition-all ${
                  selectedCategory === cat 
                    ? "bg-primary text-primary-foreground shadow-[0_0_10px_hsl(185_100%_50%_/_0.3)]" 
                    : "hover:border-primary/50"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note) => {
              const IconComponent = IconMap[note.icon] || FileText;
              
              return (
                <Card key={note.id} className="bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 flex flex-col">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <div className="p-2 bg-secondary/30 rounded-md">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <Badge variant="outline" className={`
                        border-border font-mono text-[10px] uppercase
                        ${note.difficulty === 'Advanced' ? 'text-destructive' : 
                          note.difficulty === 'Intermediate' ? 'text-yellow-500' : 'text-green-500'}
                      `}>
                        {note.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-foreground leading-tight">{note.title}</CardTitle>
                    <CardDescription className="line-clamp-2 text-muted-foreground mt-2">
                      {note.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pt-0">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {note.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[10px] text-muted-foreground bg-secondary/50 border border-border px-2 py-0.5 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full gap-2 group border-primary/20 hover:bg-primary hover:text-primary-foreground" variant="outline" asChild>
                      <a href={note.downloadUrl}>
                        <Download className="h-4 w-4 transition-transform group-hover:translate-y-1" /> 
                        Download PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20 text-muted-foreground">
              <p>No notes found matching your criteria.</p>
              <Button variant="link" onClick={() => {setSearchQuery(""); setSelectedCategory("All")}} className="mt-2 text-primary">
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;