
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import ProgressTracker from './ProgressTracker';
import { 
  FormData, 
  ProjectType, 
  ExperienceLevel, 
  Blockchain, 
  UseCase, 
  Preference 
} from '@/lib/stackData';

interface QuestionnaireFormProps {
  onSubmit: (data: FormData) => void;
}

const QuestionnaireForm: React.FC<QuestionnaireFormProps> = ({ onSubmit }) => {
  const [step, setStep] = useState(1);
  const TOTAL_STEPS = 5;
  
  const [formData, setFormData] = useState<FormData>({
    projectType: 'nft',
    experienceLevel: 'intermediate',
    blockchain: 'ethereum',
    useCase: ['smart-contracts'],
    preferences: ['developer-experience'],
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleTypeChange = (value: ProjectType) => {
    setFormData({ ...formData, projectType: value });
  };

  const handleExperienceChange = (value: ExperienceLevel) => {
    setFormData({ ...formData, experienceLevel: value });
  };

  const handleBlockchainChange = (value: Blockchain) => {
    setFormData({ ...formData, blockchain: value });
  };

  const handleUseCaseChange = (value: UseCase, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, useCase: [...formData.useCase, value] });
    } else {
      setFormData({ ...formData, useCase: formData.useCase.filter(item => item !== value) });
    }
  };

  const handlePreferenceChange = (value: Preference, checked: boolean) => {
    if (checked) {
      setFormData({ ...formData, preferences: [...formData.preferences, value] });
    } else {
      setFormData({ ...formData, preferences: formData.preferences.filter(item => item !== value) });
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white/50 backdrop-blur-sm rounded-2xl shadow-glass p-6 md:p-8">
      <ProgressTracker totalSteps={TOTAL_STEPS} currentStep={step} />
      
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div className="form-step-appear space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold leading-none tracking-tight">Project Type</h2>
              <p className="text-sm text-muted-foreground">What kind of Web3 project are you building?</p>
            </div>
            
            <RadioGroup
              value={formData.projectType}
              onValueChange={handleTypeChange}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { value: 'nft', label: 'NFT Collection or Marketplace' },
                { value: 'defi', label: 'DeFi Application' },
                { value: 'dao', label: 'DAO or Governance' },
                { value: 'gaming', label: 'Web3 Gaming' },
                { value: 'ai-web3', label: 'AI & Web3 Integration' },
                { value: 'social', label: 'Social Network / Community' },
                { value: 'identity', label: 'Identity / Authentication' },
                { value: 'other', label: 'Other / Multiple Uses' },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`project-${option.value}`} className="focus-ring" />
                  <Label htmlFor={`project-${option.value}`} className="flex-1 cursor-pointer font-medium">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="pt-4">
              <Button type="button" onClick={nextStep} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 btn-pulse">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="form-step-appear space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold leading-none tracking-tight">Experience Level</h2>
              <p className="text-sm text-muted-foreground">How experienced are you with Web3 development?</p>
            </div>
            
            <RadioGroup 
              value={formData.experienceLevel} 
              onValueChange={handleExperienceChange}
              className="space-y-3"
            >
              <div className="flex items-start space-x-3 rounded-lg border p-3 shadow-sm transition-all hover:bg-secondary/50">
                <RadioGroupItem value="beginner" id="exp-beginner" className="mt-1 focus-ring" />
                <div>
                  <Label htmlFor="exp-beginner" className="font-medium cursor-pointer">Beginner</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    New to Web3 development, looking for accessible tools and comprehensive guides.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rounded-lg border p-3 shadow-sm transition-all hover:bg-secondary/50">
                <RadioGroupItem value="intermediate" id="exp-intermediate" className="mt-1 focus-ring" />
                <div>
                  <Label htmlFor="exp-intermediate" className="font-medium cursor-pointer">Intermediate</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Some experience with Web3 development or strong background in traditional web development.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 rounded-lg border p-3 shadow-sm transition-all hover:bg-secondary/50">
                <RadioGroupItem value="advanced" id="exp-advanced" className="mt-1 focus-ring" />
                <div>
                  <Label htmlFor="exp-advanced" className="font-medium cursor-pointer">Advanced</Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    Experienced Web3 developer looking for optimized tooling and advanced capabilities.
                  </p>
                </div>
              </div>
            </RadioGroup>
            
            <div className="pt-4 flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="button" onClick={nextStep} className="bg-primary text-primary-foreground hover:bg-primary/90 btn-pulse">
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="form-step-appear space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold leading-none tracking-tight">Preferred Blockchain</h2>
              <p className="text-sm text-muted-foreground">Which blockchain would you like to build on?</p>
            </div>
            
            <RadioGroup 
              value={formData.blockchain} 
              onValueChange={handleBlockchainChange}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                { value: 'ethereum', label: 'Ethereum' },
                { value: 'arweave', label: 'Arweave' },
                { value: 'solana', label: 'Solana' },
                { value: 'polygon', label: 'Polygon' },
                { value: 'avalanche', label: 'Avalanche' },
                { value: 'cosmos', label: 'Cosmos' },
                { value: 'near', label: 'NEAR' },
                { value: 'other', label: 'Other / Not Sure' },
              ].map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={`chain-${option.value}`} className="focus-ring" />
                  <Label htmlFor={`chain-${option.value}`} className="flex-1 cursor-pointer font-medium">
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
            
            <div className="pt-4 flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="button" onClick={nextStep} className="bg-primary text-primary-foreground hover:bg-primary/90 btn-pulse">
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {step === 4 && (
          <div className="form-step-appear space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold leading-none tracking-tight">Use Cases</h2>
              <p className="text-sm text-muted-foreground">What features will your application need? (Select all that apply)</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'storage', label: 'Decentralized Storage' },
                { id: 'smart-contracts', label: 'Smart Contracts' },
                { id: 'payments', label: 'Payments / Transactions' },
                { id: 'identity', label: 'Identity / Authentication' },
                { id: 'compute', label: 'Off-chain Computation' },
                { id: 'governance', label: 'Governance / Voting' },
                { id: 'other', label: 'Other / Custom Logic' },
              ].map((item) => (
                <div key={item.id} className="flex items-start space-x-2">
                  <Checkbox 
                    id={`usecase-${item.id}`} 
                    checked={formData.useCase.includes(item.id as UseCase)}
                    onCheckedChange={(checked) => handleUseCaseChange(item.id as UseCase, checked as boolean)}
                    className="mt-1 focus-ring"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor={`usecase-${item.id}`} className="cursor-pointer font-medium">
                      {item.label}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button type="button" onClick={nextStep} className="bg-primary text-primary-foreground hover:bg-primary/90 btn-pulse">
                Continue
              </Button>
            </div>
          </div>
        )}
        
        {step === 5 && (
          <div className="form-step-appear space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold leading-none tracking-tight">Additional Preferences</h2>
              <p className="text-sm text-muted-foreground">What factors are most important to you? (Select all that apply)</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { id: 'privacy', label: 'Privacy / Security' },
                { id: 'decentralization', label: 'Maximum Decentralization' },
                { id: 'gas-fees', label: 'Low Gas Fees' },
                { id: 'scalability', label: 'Scalability / Performance' },
                { id: 'developer-experience', label: 'Developer Experience' },
                { id: 'other', label: 'Other / Custom Requirements' },
              ].map((item) => (
                <div key={item.id} className="flex items-start space-x-2">
                  <Checkbox 
                    id={`pref-${item.id}`} 
                    checked={formData.preferences.includes(item.id as Preference)}
                    onCheckedChange={(checked) => handlePreferenceChange(item.id as Preference, checked as boolean)}
                    className="mt-1 focus-ring"
                  />
                  <div className="grid gap-1.5 leading-none">
                    <Label htmlFor={`pref-${item.id}`} className="cursor-pointer font-medium">
                      {item.label}
                    </Label>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-4 flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
              <Button 
                type="submit" 
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg transition-all duration-300 btn-pulse"
              >
                Generate Stack Recommendation
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default QuestionnaireForm;
