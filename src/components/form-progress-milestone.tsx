"use client";

import { cn } from "@/lib/utils";

interface FormProgressMilestoneProps {
  steps: string[];
  currentStep: string;
}

export const FormProgressMilestone = ({ steps, currentStep }: FormProgressMilestoneProps) => {
  const currentIndex = steps.indexOf(currentStep);

  if (steps.length === 0) {
    return null;
  }

  const progressWidth = (currentIndex / (steps.length - 1)) * 100;

  return (
    <div className="w-full py-8">
        <div className="flex justify-between items-start relative px-2 sm:px-4">
            {/* The full-width background line */}
            <div 
                className="absolute top-2 left-0 w-full h-1 bg-muted" 
                style={{transform: 'translateY(-50%)'}} 
                aria-hidden="true">
            </div>
            
            {/* The active progress line */}
            <div 
                className="absolute top-2 left-0 h-1 bg-primary transition-all duration-300" 
                style={{ 
                    width: `${progressWidth}%`,
                    transform: 'translateY(-50%)'
                }}>
            </div>

            {steps.map((step, index) => (
                <div key={step} className="flex flex-col items-center justify-start relative z-10 text-center">
                    {/* Milestone Circle */}
                     <div
                        className={cn(
                            "w-4 h-4 rounded-full transition-colors duration-300",
                            index <= currentIndex
                                ? "bg-primary" // Completed or current
                                : "bg-muted"   // Pending
                        )}
                    >
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};
