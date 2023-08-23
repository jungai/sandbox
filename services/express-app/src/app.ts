import type { Express } from 'express';
import express from 'express';
import {
	setupBodyParser,
	setupCors,
	setupError,
	setupRoutes,
	setupMorgan,
	setupInterceptorResponse,
	setupJsonReplacer,
} from './middleware';

export const app: Express = [
	setupCors,
	setupBodyParser,
	setupMorgan, // <-- log req
	setupJsonReplacer, // <-- replace undefined with null
	setupInterceptorResponse, // <- normalize response here
	setupRoutes,
	setupError, // <-- handle all error
].reduce((e, middleware) => middleware(e), express());
