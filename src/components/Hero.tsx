
import React from 'react';
import { Button } from "@/components/ui/button";
import { animationClasses } from "@/lib/animations";

interface HeroProps {
  onGetStartedClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStartedClick }) => {
  return (
    <div className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="hero-gradient absolute inset-0 -z-10" />
      
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className={`inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium ${animationClasses.fadeIn}`} style={{ animationDelay: '100ms' }}>
            <span className="tag bg-primary/10 text-primary mr-1.5 ml-0.5">New</span> Web3 Stack Advisor Beta
          </div>
          
          <h1 className={`text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl ${animationClasses.slideUp}`} style={{ animationDelay: '200ms' }}>
            Find Your Perfect <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">Web3 Stack</span>
          </h1>
          
          <p className={`max-w-[700px] text-muted-foreground md:text-xl ${animationClasses.slideUp}`} style={{ animationDelay: '300ms' }}>
            Discover the ideal technologies and tools for your decentralized application based on your specific project needs and preferences.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-4 ${animationClasses.slideUp}`} style={{ animationDelay: '400ms' }}>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 btn-pulse text-base font-medium px-8"
              onClick={onGetStartedClick}
            >
              Get Started
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 text-foreground hover:bg-secondary transition-colors duration-300 text-base font-medium px-8"
            >
              Learn More
            </Button>
          </div>
          
          <div className={`w-full max-w-md pt-8 opacity-70 ${animationClasses.fadeIn}`} style={{ animationDelay: '500ms' }}>
            <p className="text-sm text-muted-foreground mb-3">Recommended by leading Web3 developers</p>
            <div className="flex justify-center space-x-6 md:space-x-8">
              {['Ethereum', 'Arweave', 'Solana', 'Polygon', 'Filecoin'].map((tech, i) => (
                <div 
                  key={tech} 
                  className={`text-sm font-medium ${animationClasses.fadeIn}`}
                  style={{ animationDelay: `${500 + (i * 100)}ms` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
