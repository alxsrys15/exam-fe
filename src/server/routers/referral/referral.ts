/**
 *
 * This is an example router, you can delete this file and then update `../pages/api/trpc/[trpc].tsx`
 */
import { router, publicProcedure } from '../../trpc';
import type { Prisma } from '@prisma/client';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { prisma } from '@/server/prisma';

/**
 * Default selector for Post.
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @link https://github.com/prisma/prisma/issues/9353
 */
const defaultReferralSelect = {
  id: true,
  given_name: true,
  email: true,
  surname: true,
  phone: true,
  house_number: true,
  street_name: true,
  suburb: true,
  state: true,
  post_code: true,
  country: true,
} satisfies Prisma.ReferralsSelect;

const UserModel = z.object({
  given_name: z.string(),
  email: z.string().email(),
  surname: z.string(),
  phone: z.string(),
  house_number: z.string(),
  street_name: z.string(),
  suburb: z.string(),
  state: z.string(),
  post_code: z.number(),
  country: z.string(),
});

export const referralRouter = router({
  all: publicProcedure.query(async () => {
    const referrals = await prisma.referrals.findMany();
    return referrals;
  }),
  create: publicProcedure.input(UserModel).mutation(async ({ input }) => {
    const referral = await prisma.referrals.create({
      data: input,
      select: defaultReferralSelect,
    });

    return referral;
  }),
  one: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      const referral = await prisma.referrals.findFirst({
        select: defaultReferralSelect,
        where: {
          id: input.id,
        },
      });

      return referral;
    }),
});
