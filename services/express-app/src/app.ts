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
	setupMorgan,
	setupJsonReplacer,
	setupInterceptorResponse,
	setupRoutes,
	setupError,
].reduce((e, middleware) => middleware(e), express());
