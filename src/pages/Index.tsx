
import React, { useState } from 'react';
import Hero from '@/components/Hero';
import QuestionnaireForm from '@/components/QuestionnaireForm';
import StackRecommendation from '@/components/StackRecommendation';
import { FormData, generateStackRecommendation, StackRecommendation as StackRecommendationType } from '@/lib/stackData';
import { toast } from '@/components/ui/use-toast';

const Index = () => {
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [recommendation, setRecommendation] = useState<StackRecommendationType | null>(null);

  const handleGetStartedClick = () => {
    setShowQuestionnaire(true);
    
    // Smooth scroll to questionnaire
    setTimeout(() => {
      const element = document.getElementById('questionnaire-section');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 20,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  const handleFormSubmit = (data: FormData) => {
    // Generate recommendation based on form data
    const result = generateStackRecommendation(data);
    setRecommendation(result);
    
    toast({
      title: "Recommendation Generated",
      description: "Your personalized Web3 stack has been created.",
    });
    
    // Smooth scroll to recommendation
    setTimeout(() => {
      const element = document.getElementById('recommendation-section');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 20,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  const handleReset = () => {
    setRecommendation(null);
    setShowQuestionnaire(true);
    
    // Smooth scroll to questionnaire
    setTimeout(() => {
      const element = document.getElementById('questionnaire-section');
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 20,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero onGetStartedClick={handleGetStartedClick} />
      
      {showQuestionnaire && !recommendation && (
        <section id="questionnaire-section" className="py-16 px-4">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold tracking-tight">Your Web3 Project Details</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                Complete the questionnaire below to receive a tailored Web3 technology stack recommendation.
              </p>
            </div>
            
            <QuestionnaireForm onSubmit={handleFormSubmit} />
          </div>
        </section>
      )}
      
      {recommendation && (
        <section id="recommendation-section" className="py-16 px-4">
          <div className="container">
            <StackRecommendation recommendation={recommendation} onReset={handleReset} />
          </div>
        </section>
      )}
      
      <footer className="py-8 mt-16 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <div>
              <p className="text-sm text-muted-foreground">
                © 2023 Web3 Stack Advisor. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
