import type { RequestHandler } from 'express';

export const helloworld: RequestHandler = (_req, res, _next) => {
	res.json({ hello: 'world' });
};
