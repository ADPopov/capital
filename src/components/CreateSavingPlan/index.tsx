'use client'
import React, { useState } from 'react';
import { AnimatePresence, motion } from "framer-motion"

import Preview from "~/components/CreateSavingPlan/Preview";
import Settings from "~/components/CreateSavingPlan/Settings";
import Welcome from "~/components/CreateSavingPlan/Welcome";
import { useCarousel } from "~/hooks/useCarousel";
import { type QuestionsType } from "~/pages";


const FirstSteps = () => {
    const totalSteps = 3;
    const { currentStep, nextStep, prevStep } = useCarousel(totalSteps);

    const [questions, setQuestions] = useState<QuestionsType>({
        duration: "365",
        dailyIncrease: "10",
        initialAmount: "1",
    })

    return (
        <div className={'flex items-center justify-center h-screen bg-gray-100'}>
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={currentStep}
                    animate={{ opacity: 1, x: "0%" }}
                    exit={{ opacity: 0, x: "-100%" }}
                    transition={{ duration: 0.5 }}
                    layout
                >
                    {currentStep === 0 && <Welcome nextStep={nextStep}/>}
                    {currentStep === 1 &&
                        <Settings nextStep={nextStep} questions={questions} handleQuestionsChange={setQuestions}/>}
                    {currentStep === 2 &&
                        <Preview nextStep={nextStep} questions={questions} prev={prevStep}/>}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default FirstSteps;