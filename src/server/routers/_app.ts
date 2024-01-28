/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { referralRouter } from './referral/referral';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  referral: referralRouter,
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;
