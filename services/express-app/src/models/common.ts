import { z } from 'zod';

export const BaseResponseSchema = z.object({
	error: z.string().or(z.null()),
	message: z.string().or(z.null()),
	status: z.number(),
	result: z.null(),
});

export const ResponseErrorSchema = BaseResponseSchema;
