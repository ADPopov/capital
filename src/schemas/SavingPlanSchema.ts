import { z } from "zod";

export const savingPlanSchema = z.object({
    duration: z.number(),
    dailyIncrease: z.number(),
    initialAmount: z.number()
})