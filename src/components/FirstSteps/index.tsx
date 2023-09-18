'use client'
import React, {useState} from 'react';
import {motion, AnimatePresence} from "framer-motion"
import Welcome from "~/components/FirstSteps/Welcome";
import Settings from "~/components/FirstSteps/Settings";
import Preview from "~/components/FirstSteps/Preview";
import {useCarousel} from "~/components/Carousel/hooks/useCarousel";
import {type QuestionsType} from "~/pages";
const FirstSteps = () => {
    const totalSteps = 3;
    const {currentStep, nextStep, prevStep} = useCarousel(totalSteps);

    const [questions, setQuestions] = useState<QuestionsType>({
        desiredAmount: "365",
        dailyIncrease: "10",
        startAmount: "1",
    })


    return (
        <div className={'flex items-center justify-center h-screen w-full bg-gray-100'}>
            <AnimatePresence mode={"wait"}>
                <motion.div
                    key={currentStep}
                    animate={{opacity: 1, x: "0%"}}
                    exit={{opacity: 0, x: "-100%"}}
                    transition={{duration: 0.5}}
                    layout
                >
                    {currentStep === 0 && <Welcome nextStep={nextStep}/>}
                    {currentStep === 1 &&
                        <Settings nextStep={nextStep} questions={questions} handleQuestionsChange={setQuestions} />}
                    {currentStep === 2 &&
                        <Preview nextStep={nextStep} questions={questions} prev={prevStep}/>}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default FirstSteps;