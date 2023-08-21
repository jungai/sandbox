import { z } from 'zod';

// write models here
export const todosSchema = z.array(
	z
		.object({
			userId: z.number(),
			id: z.number(),
			title: z.string(),
			completed: z.boolean(),
		})
		.strict(),
);

// convert model to type
export type TTodosSchema = z.infer<typeof todosSchema>;
