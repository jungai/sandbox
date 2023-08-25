import { z } from 'zod';

export const HelloWorldSchema = z.array(z.object({ name: z.string() }));
