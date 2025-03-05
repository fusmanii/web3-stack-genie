
import React, { useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { StackRecommendation as StackRecommendationType, Technology } from '@/lib/stackData';
import ResourceCard from './ResourceCard';
import { useInView, animationClasses } from '@/lib/animations';
import { LockIcon, UnlockIcon, ExternalLinkIcon, ChevronRightIcon, LayersIcon } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

interface StackRecommendationProps {
  recommendation: StackRecommendationType;
  onReset: () => void;
}

const StackRecommendation: React.FC<StackRecommendationProps> = ({ recommendation, onReset }) => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { threshold: 0.1 });
  const [isPremiumUnlocked, setIsPremiumUnlocked] = useState(false);
  
  // Group technologies by category for the stack visualization
  const groupedTechnologies: Record<string, Technology[]> = recommendation.technologies.reduce(
    (groups, technology) => {
      const category = technology.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(technology);
      return groups;
    },
    {} as Record<string, Technology[]>
  );
  
  // Category display names and ordering for the stack
  const categoryOrder = [
    'frontend', 
    'framework', 
    'language', 
    'blockchain', 
    'wallet', 
    'storage', 
    'compute'
  ];
  
  const categoryNames: Record<string, string> = {
    blockchain: 'Blockchain Networks',
    language: 'Smart Contract Languages',
    framework: 'Development Frameworks',
    storage: 'Storage Solutions',
    wallet: 'Wallets & Authentication',
    compute: 'Compute & Oracles',
    frontend: 'Frontend Libraries'
  };

  const handlePremiumUnlock = () => {
    // Simulating a payment process
    const confirmPayment = window.confirm(
      "Premium Upgrade - $19.99\n\nUnlock all technology recommendations and detailed implementation guides. Would you like to proceed to payment?"
    );
    
    if (confirmPayment) {
      // In a real application, this would redirect to a payment processor
      setTimeout(() => {
        setIsPremiumUnlocked(true);
        toast({
          title: "Premium Access Unlocked",
          description: "Thank you for your purchase! You now have access to all recommendations.",
        });
      }, 1000);
    }
  };
  
  // Sort categories according to the predefined order
  const orderedCategories = Object.keys(groupedTechnologies).sort((a, b) => {
    return categoryOrder.indexOf(a) - categoryOrder.indexOf(b);
  });
  
  return (
    <div className="max-w-4xl mx-auto">
      <div 
        ref={headerRef}
        className={`space-y-4 text-center mb-12 transition-all duration-700 ${isHeaderInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
          Generated Recommendation
        </div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{recommendation.title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{recommendation.description}</p>
      </div>
      
      <div className="space-y-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <LayersIcon className="h-6 w-6 text-primary" />
            Technology Stack
          </h3>
          
          <div className="relative">
            {/* Stack visualization with connecting lines */}
            <div className="absolute left-8 top-6 bottom-6 w-0.5 bg-primary/20 z-0"></div>
            
            {orderedCategories.map((category, categoryIndex) => {
              const isPremiumCategory = categoryIndex > 2 && !isPremiumUnlocked;
              
              return (
                <div 
                  key={category}
                  className={`relative z-10 transition-all duration-500 ${
                    isPremiumCategory ? 'opacity-70 pointer-events-none blur-sm' : ''
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 100}ms` }}
                >
                  <div className="mb-4 flex items-center">
                    <div className="bg-primary rounded-full p-1.5 mr-4">
                      <ChevronRightIcon className="h-4 w-4 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold">{categoryNames[category] || category}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-10">
                    {groupedTechnologies[category].map((tech, techIndex) => (
                      <div 
                        key={tech.id}
                        className={`feature-card bg-white/70 backdrop-blur-xs border border-border/60 ${animationClasses.fadeIn}`}
                        style={{ animationDelay: `${(categoryIndex * 200) + (techIndex * 100)}ms` }}
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h5 className="font-medium text-lg">{tech.name}</h5>
                            <p className="text-sm text-muted-foreground mt-1">{tech.description}</p>
                          </div>
                          <div className={`text-xs px-2 py-0.5 rounded font-medium 
                            ${tech.difficulty === 'beginner' ? 'bg-green-100 text-green-800' : 
                              tech.difficulty === 'intermediate' ? 'bg-blue-100 text-blue-800' : 
                              'bg-purple-100 text-purple-800'}`}
                          >
                            {tech.difficulty.charAt(0).toUpperCase() + tech.difficulty.slice(1)}
                          </div>
                        </div>
                        
                        <div className="mt-4">
                          <Button 
                            variant="outline" 
                            size="sm"
                            className="w-full text-xs border-primary/20 text-primary hover:bg-primary/5 hover:text-primary hover:border-primary/40"
                            asChild
                          >
                            <a href={tech.url} target="_blank" rel="noopener noreferrer">
                              Visit Official Website
                            </a>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {categoryIndex < orderedCategories.length - 1 && <div className="h-6"></div>}
                </div>
              );
            })}
            
            {/* Premium unlock overlay */}
            {!isPremiumUnlocked && (
              <div className="mt-4 bg-gradient-to-b from-transparent to-background/95 absolute bottom-0 left-0 right-0 z-20 p-8 pt-48 flex flex-col items-center justify-end">
                <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 shadow-lg text-center">
                  <LockIcon className="h-10 w-10 mx-auto mb-4 text-amber-500" />
                  <h3 className="text-xl font-bold mb-2">Unlock Premium Stack</h3>
                  <p className="text-muted-foreground mb-6">
                    Gain access to all technology recommendations, detailed implementation guides, and premium resources.
                  </p>
                  <Button 
                    onClick={handlePremiumUnlock}
                    className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-none shadow-md hover:shadow-lg transition-all"
                  >
                    Upgrade to Premium
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {recommendation.resources.length > 0 && (
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight">Learning Resources</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendation.resources.slice(0, isPremiumUnlocked ? recommendation.resources.length : 2).map((resource, index) => (
                <ResourceCard key={resource.id} resource={resource} index={index} />
              ))}
              
              {!isPremiumUnlocked && recommendation.resources.length > 2 && (
                <div className="col-span-1 md:col-span-2 text-center p-6 bg-muted/50 rounded-xl border border-dashed border-muted-foreground/30">
                  <LockIcon className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                  <h4 className="text-lg font-medium mb-2">Unlock {recommendation.resources.length - 2} More Resources</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get access to all curated learning materials with premium.
                  </p>
                  <Button 
                    variant="outline"
                    onClick={handlePremiumUnlock}
                    className="mx-auto"
                  >
                    Upgrade to Premium
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
        
        <div className="flex justify-center pt-8">
          <Button 
            onClick={onReset}
            className="btn-pulse bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start New Recommendation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StackRecommendation;
