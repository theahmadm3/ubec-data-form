"use client";

import { useState } from 'react';
import { FormType } from '@/lib/user-types';

import { AccessForm } from './forms/access-form';
import { GscciForm } from './forms/gscci-form';
import { HopeDliForm } from './forms/hope-dli-form';
import { InfrastructureForm } from './forms/infrastructure-form';
import { QualityForm } from './forms/quality-form';
import { SportsDevelopmentForm } from './forms/sports-development-form';
import { SystemsOptimizationForm } from './forms/systems-optimization-form';
import { useToast } from '@/hooks/use-toast';
import { FormProgressMilestone } from './form-progress-milestone';


const individualFormsOrder: FormType[] = ["Access", "GSCCI", "Infrastructure", "Quality", "Systems", "Sports", "HOPE_DLI"];

export const IndividualFormsView = () => {
    const { toast } = useToast();
    const [currentStep, setCurrentStep] = useState(individualFormsOrder[0]);
    const currentIndex = individualFormsOrder.indexOf(currentStep);

    const handleNext = () => {
        if(currentIndex < individualFormsOrder.length - 1) {
            setCurrentStep(individualFormsOrder[currentIndex + 1]);
        }
    };
    const handlePrev = () => {
        if(currentIndex > 0) {
            setCurrentStep(individualFormsOrder[currentIndex - 1]);
        }
    };
    const handleSubmit = () => {
        toast({
            title: "All Forms Submitted",
            description: "Thank you for completing all the forms.",
        });
    }

    const formMappingWithNav: Record<string, React.ReactNode> = {
        "Access": <AccessForm onNext={handleNext} />,
        "GSCCI": <GscciForm onPrev={handlePrev} onNext={handleNext} />,
        "Infrastructure": <InfrastructureForm onPrev={handlePrev} onNext={handleNext} />,
        "Quality": <QualityForm onPrev={handlePrev} onNext={handleNext} />,
        "Systems": <SystemsOptimizationForm onPrev={handlePrev} onNext={handleNext} />,
        "Sports": <SportsDevelopmentForm onPrev={handlePrev} onNext={handleNext} />,
        "HOPE_DLI": <HopeDliForm onPrev={handlePrev} isFinalStep={true} onSubmit={handleSubmit} />,
    };

    return (
        <>
            <h2 className="text-2xl font-semibold font-headline mb-1">Individual Data Forms</h2>
            <p className="text-muted-foreground mb-2">Please fill out all sections completely by navigating with the buttons below.</p>
            
            <FormProgressMilestone steps={individualFormsOrder} currentStep={currentStep} />
            
            <div className="mt-4">
                {formMappingWithNav[currentStep]}
            </div>
        </>
    );
}
