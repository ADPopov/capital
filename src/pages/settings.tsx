import {calculateArithmeticProgression, calculateMonthlySavings} from "./calendar/utils";
import Input from "~/components/Input";
import {useState} from "react";
import Link from "next/link";
import Button from "~/components/Button";

export default function Settings() {
    function sum(arr: number[]): number {
        return arr.reduce((acc, curr) => acc + curr, 0)
    }

    const [desiredAmount, setDesiredAmount] = useState("365");
    const [dailyIncrease, setDailyIncrease] = useState("10");
    const [startAmount, setStartAmount] = useState("1");

    const dailyAmounts = calculateArithmeticProgression(+startAmount, +dailyIncrease, +desiredAmount)
    const monthlySavings = calculateMonthlySavings(dailyAmounts);

    console.log({
        daily: dailyAmounts,
        month: monthlySavings,
        sum: sum(dailyAmounts)
    })

    return (
        <main className={'bg-gray-50 h-screen'}>
            <div className={'flex items-center justify-center'}>
                <div className={'m-6'}>
                    <div className={"text-3xl text-gray-950 font-medium w-[300px] mb-14"}>
                        Let&apos;s calculate your savings schedule
                    </div>
                    <div className={"flex flex-col gap-4"}>
                        <QuestionField
                            question={"How many days do you plan to save?"}
                            value={desiredAmount}
                            handleChange={(value) => setDesiredAmount(value)}
                        />
                        <QuestionField
                            question={"How much should I increase each day?"}
                            value={dailyIncrease}
                            handleChange={(value) => {
                                setDailyIncrease(value)
                            }}
                        />
                        <QuestionField
                            question={"How much will we start saving?"}
                            value={startAmount}
                            handleChange={(value) => {
                                setStartAmount(value)
                            }}
                        />
                    </div>

                    <div className={"flex justify-center mt-8"}>
                        <Link href={'/calendar'}>
                            <Button>
                                Continue
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={"flex flex-wrap"}>
                {sum(dailyAmounts)}
                {
                    monthlySavings.map((item) => (<div key={item} className={'p-3 text-green-400'}>{item}</div>))
                }
                {
                    dailyAmounts.map((item) => (<div key={item} className={'p-3'}>{item}</div>))
                }
            </div>


        </main>
    )
}

function QuestionField({value, question, handleChange}: {
    question: string,
    value: string,
    handleChange: (value: string) => void
}) {
    return (
        <div>
            <span className={"pb-4 text-[16px] text-gray-900"}>{question}</span>
            <Input value={value} onChange={(event) => {
                handleChange(event.target.value)
            }} className={"mt-2"}/>
        </div>
    )
}