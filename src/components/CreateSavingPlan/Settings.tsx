"use client"
import { useState } from "react";

import Button from "~/components/Button";
import Input from "~/components/Input";
import { type QuestionsType } from "~/pages";

export default function Settings({ nextStep, questions, handleQuestionsChange }: {
    nextStep: () => void,
    questions: QuestionsType,
    handleQuestionsChange: (values: QuestionsType) => void
}) {

    const [question, setQuestions] = useState<QuestionsType>(questions)

    const handleChange = (value: string, name: keyof QuestionsType) => {
        setQuestions(prevState => ({
            ...prevState,
            [name]: value
        }))
    };

    return (
        <>
            <div>
                <div className={"text-3xl text-gray-950 font-medium w-[300px] mb-14"}>
                    Let&apos;s calculate your savings schedule
                </div>
                <div className={"flex flex-col gap-4"}>
                    <QuestionField
                        question={"How many days do you plan to save?"}
                        value={question.duration}
                        name={'duration'}
                        handleChange={handleChange}
                    />
                    <QuestionField
                        question={"How much should I increase each day?"}
                        value={question.dailyIncrease}
                        name={'dailyIncrease'}
                        handleChange={handleChange}
                    />
                    <QuestionField
                        question={"What is your initial contribution?"}
                        value={question.initialAmount}
                        name={'initialAmount'}
                        handleChange={handleChange}
                    />
                </div>

                <div className={"flex justify-center mt-8"}>
                    <Button onClick={() => {
                        handleQuestionsChange(question);
                        nextStep()
                    }}>
                        Continue
                    </Button>
                </div>
            </div>
        </>
    )
}

function QuestionField({ value, question, handleChange, name }: {
    question: string,
    value: string,
    name: keyof QuestionsType,
    handleChange: (value: string, name: keyof QuestionsType) => void
}) {
    return (
        <div>
            <span className={"pb-4 text-[16px] text-gray-900"}>{question}</span>
            <Input value={value} onChange={(event) => {
                handleChange(event.target.value, name)
            }} className={"mt-2"}/>
        </div>
    )
}