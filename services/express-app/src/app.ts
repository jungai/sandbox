import type { Express } from 'express';
import express from 'express';
import { setupCors } from './middleware/cors';
import { setupBodyParser } from './middleware/body-parser';
import { setupRoutes } from './middleware/routes';

export const app: Express = [setupCors, setupBodyParser, setupRoutes].reduce(
	(e, middleware) => middleware(e),
	express()
);
