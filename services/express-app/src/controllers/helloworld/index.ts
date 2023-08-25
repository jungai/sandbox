import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { AppError } from '../../utils/app-error';
import { initServer } from '@ts-rest/express';
import { helloWorldContract } from '../../contract';
import {
	normalizeResponse,
	normalizeResponseError,
} from '../../utils/normalize-response';
import { z } from 'zod';
import { HelloWorldSchema } from '../../models/resp';

const s = initServer();

export const helloworldRouter = s.router(helloWorldContract, {
	helloworld: async () => {
		if (Math.random() < 0.5) {
			return {
				status: 500,
				body: normalizeResponseError(
					new AppError(
						StatusCodes.INTERNAL_SERVER_ERROR,
						ReasonPhrases.INTERNAL_SERVER_ERROR,
						'Random Eror'
					)
				),
			};
		}

		return {
			status: 200,
			body: normalizeResponse<z.infer<typeof HelloWorldSchema>>([
				{ name: 'iu' },
				{ name: 'chaewon' },
			]),
		};
	},
});
