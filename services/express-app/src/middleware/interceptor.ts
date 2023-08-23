import type { Express } from 'express';
import { AppError } from '../utils/app-error';
import {
	normalizeResponse,
	normalizeResponseError,
} from '../utils/normalize-response';

export function setupInterceptorResponse(e: Express): Express {
	return e.use((_req, res, next) => {
		const nativeSendFn = res.send;

		res.send = (data: Record<string, unknown>) => {
			res.send = nativeSendFn;
			if (data instanceof AppError) {
				return res.status(data.statusCode).send(normalizeResponseError(data));
			}

			return res.send(normalizeResponse(data, res.statusCode));
		};

		next();
	});
}
