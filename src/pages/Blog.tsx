import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { blogsData } from "@/data/blogs";
import { Calendar } from "lucide-react";

const Blog = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12 space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            Security <span className="text-primary">Logs</span>
          </h1>
          <p className="text-muted-foreground font-mono text-sm">
            // Thoughts, writeups, and research notes.
          </p>
        </div>

        <div className="space-y-6">
          {blogsData.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="block group">
              <Card className="bg-card/30 border-border hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-2">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <CardTitle className="text-xl md:text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;