import { initTRPC } from '@trpc/server';
import { TRPCPanelMeta } from 'trpc-panel';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.meta<TRPCPanelMeta>().create({
	errorFormatter: (opts) => {
		const { shape, error } = opts;
		console.log('shape', shape);
		console.log('error', error);

		return {
			...shape,
			// code: should be status
			code: shape.data.httpStatus,
		};
	},
});

export const middleware = t.middleware;

const loggerMiddleware = middleware(async (opts) => {
	const start = Date.now();

	const result = await opts.next();

	const durationMs = Date.now() - start;
	const meta = { path: opts.path, type: opts.type, durationMs };

	result.ok
		? console.log('OK request timing:', meta)
		: console.error('Non-OK request timing', meta);

	return result;
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure.use(loggerMiddleware);
