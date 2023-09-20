export function calculateArithmeticProgression(firstTerm: number, commonDifference: number, numberOfTerms: number): number[] {
    const progression: number[] = [];
    for (let i = 0; i < numberOfTerms; i++) {
        const term = firstTerm + i * commonDifference;
        progression.push(term);
    }
    return progression;
}

export function calculateMonthlySavings(dailyAmounts: number[]): number[] {
    const monthlySavings: number[] = [];
    let monthlyTotal = 0;

    for (let i = 0; i < dailyAmounts.length; i++) {
        monthlyTotal += dailyAmounts[i] ?? 0;

        if ((i + 1) % 30 === 0) {
            monthlySavings.push(monthlyTotal);
            monthlyTotal = 0;
        }
    }

    return monthlySavings;
}

export function sum(arr: number[]): number {
    return arr.reduce((acc, curr) => acc + curr, 0)
}
