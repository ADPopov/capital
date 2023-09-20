'use client'
import { useRouter } from "next/navigation";

import Button from "~/components/Button";
import { type QuestionsType } from "~/pages";
import { api } from "~/utils/api";
import { toMoneyString } from "~/utils/formatters";
import { calculateArithmeticProgression } from "~/utils/planCalculating";

export default function Preview({ questions, prev }: {
    nextStep: () => void,
    questions: QuestionsType,
    prev: () => void
}) {
    const router = useRouter();

    const { mutateAsync } = api.savingPlan.create.useMutation();
    const plan = api.savingPlan.findPlan.useQuery();


    const dailyAmounts = calculateArithmeticProgression(
        Number(questions.initialAmount),
        Number(questions.dailyIncrease),
        Number(questions.duration))

    function sum(arr: number[]): number {
        return arr.reduce((acc, curr) => acc + curr, 0)
    }

    const total = toMoneyString(sum(dailyAmounts))
    const last = toMoneyString(dailyAmounts[dailyAmounts.length - 1] ?? 0)

    const unSubmit = async () => {
        try {
            await mutateAsync({
                duration: +questions.duration,
                dailyIncrease: +questions.dailyIncrease,
                initialAmount: +questions.initialAmount
            })

            await plan.refetch()

            router.push('/')
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <>
            <div className={'m-6'}>
                <div className={"mb-1 text-gray-500"} onClick={prev}>
                    ← back
                </div>
                <div className={"text-3xl text-gray-950 font-medium w-[300px] mb-6"}>
                    Your plan is calculated
                </div>

                <div className={"flex flex-col gap-8"}>
                    <div>
                        <div className={"text-[16px] text-gray-900"}>Total savings</div>
                        <div className={"text-[32px] text-gray-900"}>{total}</div>
                    </div>
                    <div>
                        <div className={"text-[16px] text-gray-900"}>Last transfer</div>
                        <div className={"text-[32px] text-gray-900"}>{last}</div>
                    </div>
                </div>

                <div className={"flex justify-center mt-8"}>
                    <Button onClick={unSubmit}>
                        Start saving!
                    </Button>
                </div>
            </div>
        </>
    )
}
