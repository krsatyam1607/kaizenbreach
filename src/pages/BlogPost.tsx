import { useParams, Navigate } from "react-router-dom";
import Markdown from "react-markdown";
import Layout from "@/components/layout/Layout";
import { blogsData } from "@/data/blogs";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogsData.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link to="/blog">
          <Button variant="ghost" className="pl-0 gap-2 mb-8 hover:bg-transparent hover:text-primary">
            <ArrowLeft className="h-4 w-4" /> Back to Logs
          </Button>
        </Link>
        
        <article className="prose prose-invert prose-green max-w-none">
          <div className="mb-8 border-b border-border pb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
              <Calendar className="h-4 w-4" />
              {post.date}
            </div>
          </div>
          
          {/* Markdown Rendering with Custom Styling for Cybersecurity Feel */}
          <Markdown
            components={{
              code(props) {
                const {children, className, ...rest} = props
                return (
                  <code {...rest} className={`${className} bg-secondary/50 text-primary rounded px-1 py-0.5 font-mono text-sm`}>
                    {children}
                  </code>
                )
              },
              pre(props) {
                 return <pre className="bg-black/50 border border-border p-4 rounded-lg overflow-x-auto my-4" {...props} />
              },
              h1: ({node, ...props}) => <h1 className="text-2xl font-bold mt-8 mb-4 text-foreground" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-xl font-bold mt-6 mb-3 text-foreground" {...props} />,
              p: ({node, ...props}) => <p className="leading-7 mb-4 text-muted-foreground" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 text-muted-foreground" {...props} />,
              blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-muted-foreground" {...props} />,
            }}
          >
            {post.content}
          </Markdown>
        </article>
      </div>
    </Layout>
  );
};

export default BlogPost;