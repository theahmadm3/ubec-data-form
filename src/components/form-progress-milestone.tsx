"use client";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface FormProgressMilestoneProps {
  steps: string[];
  currentStep: string;
}

export const FormProgressMilestone = ({ steps, currentStep }: FormProgressMilestoneProps) => {
  const currentIndex = steps.indexOf(currentStep);

  return (
    <div className="w-full py-8">
        <div className="flex justify-between items-start relative">
            {/* The progress line */}
            <div className="absolute top-5 left-0 w-full h-0.5 bg-muted" aria-hidden="true"></div>
            <div 
                className="absolute top-5 left-0 h-0.5 bg-primary transition-all duration-300" 
                style={{ width: `${(currentIndex / (steps.length - 1)) * 100}%` }}>
            </div>

            {steps.map((step, index) => (
                <div key={step} className="flex flex-col items-center justify-center relative z-10">
                     <div
                        className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors duration-300 border-2",
                            index < currentIndex
                                ? "bg-primary text-primary-foreground border-primary"
                                : index === currentIndex
                                ? "bg-background text-primary border-primary scale-110"
                                : "bg-background text-muted-foreground border-muted"
                        )}
                    >
                        {index < currentIndex ? (
                            <Check className="w-6 h-6" />
                        ) : (
                            index + 1
                        )}
                    </div>
                    <p className={cn(
                        "text-xs mt-2 text-center w-20 font-medium",
                        index > currentIndex ? "text-muted-foreground" : "text-foreground"
                    )}>
                        {step.replace('_', '-')}
                    </p>
                </div>
            ))}
        </div>
    </div>
  );
};
