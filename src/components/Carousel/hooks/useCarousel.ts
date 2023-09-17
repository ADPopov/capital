import {useState} from "react";

export function useCarousel(totalSteps: number) {
    const [currentStep, setCurrentStep] = useState(0);

    const nextStep = () => {
        setCurrentStep((prevStep) => (prevStep < totalSteps - 1 ? prevStep + 1 : prevStep));
    };

    const prevStep = () => {
        setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
    };

    return { currentStep, nextStep, prevStep };
}