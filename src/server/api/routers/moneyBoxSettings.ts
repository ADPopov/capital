import {createTRPCRouter, publicProcedure} from "src/server/api/trpc";
import {z} from "zod";

const SettingsScheme = z.object({
    desiredAmount: z.number(),
    dailyIncrease: z.number(),
    startAmount: z.number(),
});

export const MoneyBoxSettingsRouter = createTRPCRouter({
    add: publicProcedure
        .input(SettingsScheme)
        .output(z.object({id: z.number()}))
        .mutation(async ({input, ctx}) => {
            const data = await ctx.db.moneyBoxSettings.create({
                data: input,
            })

            return {id: data.id}
        })
});
