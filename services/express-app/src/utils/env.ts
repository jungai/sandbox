import { z } from 'zod';

const envSchema = z.object({
	PORT: z.string().regex(/^\d*$/).nonempty(),
});

export const env = envSchema.parse(process.env);
