import { createTRPCRouter } from "src/server/api/trpc";

import { SavingPlanRouter } from "~/server/api/routers/savingPlan";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    savingPlan: SavingPlanRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
