
import React, { useRef } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpenIcon, PlayIcon, FileTextIcon, GithubIcon, ExternalLink } from "lucide-react";
import { Resource } from '@/lib/stackData';
import { useInView, animationClasses } from '@/lib/animations';

interface ResourceCardProps {
  resource: Resource;
  index: number;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });
  
  // Determine the icon based on resource type
  const getResourceIcon = () => {
    switch (resource.type) {
      case 'documentation':
        return <BookOpenIcon className="h-4 w-4" />;
      case 'video':
        return <PlayIcon className="h-4 w-4" />;
      case 'article':
        return <FileTextIcon className="h-4 w-4" />;
      case 'github':
        return <GithubIcon className="h-4 w-4" />;
      default:
        return null;
    }
  };
  
  return (
    <div 
      ref={ref} 
      className={`transition-all duration-500 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Card className="h-full overflow-hidden bg-white/90 backdrop-blur-xs border border-border/80 shadow-sm hover:shadow-md transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg font-semibold">{resource.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
                {getResourceIcon()}
                {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
              </CardDescription>
            </div>
            <div className="text-xs font-medium rounded-full bg-secondary/80 px-2.5 py-0.5 uppercase tracking-wide text-secondary-foreground">
              {resource.type === 'documentation' ? 'Docs' 
                : resource.type === 'tutorial' ? 'Tutorial'
                : resource.type === 'video' ? 'Video'
                : resource.type === 'article' ? 'Article'
                : 'GitHub'}
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{resource.description}</p>
        </CardContent>
        <CardFooter className="pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full gap-1 border-primary/20 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/40 transition-colors"
            asChild
          >
            <a href={resource.url} target="_blank" rel="noopener noreferrer">
              View Resource <ExternalLink className="h-3.5 w-3.5 ml-1" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResourceCard;
