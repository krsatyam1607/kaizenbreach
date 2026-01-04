import { useState, useMemo } from "react";
import { Search, Download, Filter, Database, Code, Terminal, Network, Shield, Key, RefreshCw, Cpu, FileText, ScanSearch } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { notesData, categories, difficulties } from "@/data/notes";
import { cn } from "@/lib/utils";

const Notes = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  const filteredNotes = useMemo(() => {
    return notesData.filter((note) => {
      const matchesSearch =
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        note.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      const matchesCategory =
        selectedCategory === "All" || note.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === "All" || note.difficulty === selectedDifficulty;

      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const iconMap: Record<string, React.ReactNode> = {
    Database: <Database className="h-8 w-8" />,
    Code: <Code className="h-8 w-8" />,
    Terminal: <Terminal className="h-8 w-8" />,
    Network: <Network className="h-8 w-8" />,
    Shield: <Shield className="h-8 w-8" />,
    Search: <ScanSearch className="h-8 w-8" />,
    Key: <Key className="h-8 w-8" />,
    RefreshCw: <RefreshCw className="h-8 w-8" />,
    Cpu: <Cpu className="h-8 w-8" />,
    Scan: <ScanSearch className="h-8 w-8" />,
    FileText: <FileText className="h-8 w-8" />,
  };

  const getIcon = (iconName: string) => {
    return iconMap[iconName] || <FileText className="h-8 w-8" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-neon-green/20 text-neon-green border-neon-green/50";
      case "Intermediate":
        return "bg-primary/20 text-primary border-primary/50";
      case "Advanced":
        return "bg-destructive/20 text-destructive border-destructive/50";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary text-glow-cyan">Cybersecurity</span> Notes
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto font-mono">
              Free, comprehensive notes covering various cybersecurity topics.
              Filter by category or difficulty to find what you need.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search notes by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 bg-card border-border focus:border-primary font-mono"
              />
            </div>

            {/* Category Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <Filter className="h-4 w-4" />
                Categories
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={cn(
                      "px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300",
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground shadow-[0_0_15px_hsl(185_100%_50%_/_0.3)]"
                        : "bg-card border border-border hover:border-primary/50"
                    )}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Difficulty Filter */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
                <Filter className="h-4 w-4" />
                Difficulty
              </div>
              <div className="flex flex-wrap gap-2">
                {difficulties.map((difficulty) => (
                  <button
                    key={difficulty}
                    onClick={() => setSelectedDifficulty(difficulty)}
                    className={cn(
                      "px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300",
                      selectedDifficulty === difficulty
                        ? "bg-secondary text-secondary-foreground shadow-[0_0_15px_hsl(270_100%_65%_/_0.3)]"
                        : "bg-card border border-border hover:border-secondary/50"
                    )}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Notes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note, index) => (
              <Card
                key={note.id}
                className="group bg-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%_/_0.1)] animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-6">
                  {/* Icon & Difficulty */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-primary transition-transform duration-300 group-hover:scale-110">
                      {getIcon(note.icon)}
                    </div>
                    <Badge
                      variant="outline"
                      className={cn("font-mono text-xs", getDifficultyColor(note.difficulty))}
                    >
                      {note.difficulty}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {note.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {note.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {note.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-mono bg-muted rounded text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Download Button */}
                  <button className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg border border-primary/50 text-primary font-mono text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:shadow-[0_0_15px_hsl(185_100%_50%_/_0.2)]">
                    <Download className="h-4 w-4" />
                    Download PDF
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredNotes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground font-mono">
                No notes found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Notes;
