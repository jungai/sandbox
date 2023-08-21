import { z } from 'zod';

const envSchema = z.object({
	VITE_API_URL: z.string().nonempty(),
	VITE_SAMPLE_ENV: z.string().nonempty(),
});

export const env = envSchema.parse(import.meta.env);
