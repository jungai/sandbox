import type { Express, ErrorRequestHandler } from 'express';
import { ReasonPhrases } from 'http-status-codes';
import { AppError } from '../utils/app-error';

// handle error and passing to interceptor
export function setupError(e: Express): Express {
	const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
		// known exceptions
		if (err instanceof AppError) {
			res.send(err);
			return;
		}

		// unknown exceptions
		res.send(
			new AppError(
				500,
				ReasonPhrases.INTERNAL_SERVER_ERROR,
				'Something Went Wrong'
			)
		);
	};

	return e.use(errorHandler);
}
