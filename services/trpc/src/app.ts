import { z } from 'zod';
import { router, publicProcedure } from './trpc';
import { TRPCError } from '@trpc/server';

const mock = [
	{
		id: 1,
		name: 'IU',
	},
	{
		id: 2,
		name: 'Chaewon',
	},
];

export const appRouter = router({
	healthcheck: publicProcedure
		.meta({ description: 'healthcheck' })
		.query(async () => {
			return {
				msg: 'Ok',
			};
		}),
	getUser: publicProcedure
		.input(
			z.object({
				name: z.string().nonempty(),
			})
		)
		.query(async (opts) => {
			const { input } = opts;
			const find = mock.find(
				(item) => item.name.toLowerCase() === input.name.toLowerCase()
			);

			if (!find) {
				throw new TRPCError({
					code: 'BAD_REQUEST',
					message: 'not found krub',
					// optional: pass the original error to retain stack trace
					cause: new Error('not found'),
				});
			}

			return find;
		}),
	login: publicProcedure
		.input(
			z.object({
				username: z.string().nonempty(),
				password: z.string().nonempty(),
			})
		)
		.mutation(async (opts) => {
			const { input } = opts;

			return {
				success: true,
				msg: `login success ${input.username}`,
			};
		}),
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
