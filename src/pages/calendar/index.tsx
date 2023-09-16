import { calculateArithmeticProgression, calculateMonthlySavings } from "./utils";

export default function Calendar() {
  
      const dailyAmounts = calculateArithmeticProgression(1, 10, 365)

      function sum(arr: number[]): number {
        return arr.reduce((acc, curr) => acc + curr, 0)
      }
      
      const monthlySavings = calculateMonthlySavings(dailyAmounts);
      console.log(monthlySavings);
      console.log(sum(dailyAmounts))

      return (
        <div className="flex flex-wrap">

        </div>
      )
}