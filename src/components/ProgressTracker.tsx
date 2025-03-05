
import React from 'react';
import { CheckIcon, CircleIcon } from 'lucide-react';

interface ProgressTrackerProps {
  totalSteps: number;
  currentStep: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ totalSteps, currentStep }) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
                ${index + 1 < currentStep 
                  ? 'bg-primary border-primary text-primary-foreground' 
                  : index + 1 === currentStep 
                    ? 'border-primary text-primary' 
                    : 'border-muted-foreground/30 text-muted-foreground/50'}`}
              >
                {index + 1 < currentStep ? (
                  <CheckIcon className="h-5 w-5" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span className={`text-xs mt-1 font-medium 
                ${index + 1 <= currentStep ? 'text-primary' : 'text-muted-foreground/50'}`}>
                Step {index + 1}
              </span>
            </div>
            
            {index < totalSteps - 1 && (
              <div className={`flex-1 h-0.5 mx-2 
                ${index + 1 < currentStep ? 'bg-primary' : 'bg-muted-foreground/20'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressTracker;
