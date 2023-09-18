import Button from "~/components/Button";
import {calculateArithmeticProgression} from "~/pages/calendar/utils";
import {type QuestionsType} from "~/pages";
import {toMoneyString} from "~/utils/format/string";
import {api} from "~/utils/api";

export default function Preview({questions, prev}: {
    nextStep: () => void,
    questions: QuestionsType,
    prev: () => void
}) {

    const {mutate} = api.moneyBoxSettings.add.useMutation();


    const dailyAmounts = calculateArithmeticProgression(
        Number(questions.startAmount),
        Number(questions.dailyIncrease),
        Number(questions.desiredAmount))

    function sum(arr: number[]): number {
        return arr.reduce((acc, curr) => acc + curr, 0)
    }

    const total = toMoneyString(sum(dailyAmounts))
    const last = toMoneyString(dailyAmounts[dailyAmounts.length - 1] ?? 0)

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
                    <Button onClick={() => {
                        mutate({
                            desiredAmount: +questions.desiredAmount,
                            startAmount: +questions.desiredAmount,
                            dailyIncrease: +questions.dailyIncrease
                        })
                    }}>
                        Start saving!
                    </Button>
                </div>
            </div>
        </>
    )
}
