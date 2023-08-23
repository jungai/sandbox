import { z } from 'zod';

const envSchema = z.object({
	PORT: z.string().regex(/^\d*$/).nonempty(),
	LOG_LEVEL: z.string().optional(),
});

export const env = envSchema.parse(process.env);
