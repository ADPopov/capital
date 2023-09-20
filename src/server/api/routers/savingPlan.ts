import { createTRPCRouter, publicProcedure } from "src/server/api/trpc";
import { z } from "zod";

import { savingPlanSchema } from "~/schemas/SavingPlanSchema";


export const SavingPlanRouter = createTRPCRouter({
    create: publicProcedure
        .input(savingPlanSchema)
        .output(z.object({ id: z.number() }))
        .mutation(async ({ input, ctx }) => {
            const data = await ctx.db.savingPlan.create({ data: input })

            return { id: data.id }
        }),
    findPlan: publicProcedure
        .query(async ({ ctx }) => {
            return await ctx.db.savingPlan.count()
        })
})