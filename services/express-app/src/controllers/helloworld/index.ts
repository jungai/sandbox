import type { RequestHandler } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { AppError } from '../../utils/app-error';

export const helloworld: RequestHandler = (_req, res, _next) => {
	if (Math.random() < 0.5) {
		throw new AppError(
			StatusCodes.INTERNAL_SERVER_ERROR,
			ReasonPhrases.INTERNAL_SERVER_ERROR,
			'fck this kub'
		);
	} else {
		res.send([{ name: 'ui' }, { name: 'chaewon' }]);
	}
};
