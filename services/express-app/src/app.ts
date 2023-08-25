import type { Express } from 'express';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { createExpressEndpoints } from '@ts-rest/express';
import { contract, helloWorldContract } from './contract';
import { helloworldRouter } from './controllers/helloworld';
import { generateOpenApi } from '@ts-rest/open-api';
import * as swaggerUi from 'swagger-ui-express';

export function setupBodyParser(e: Express): Express {
	return e.use(express.json()).use(express.urlencoded({ extended: true }));
}

export function setupCors(e: Express): Express {
	return e.use(cors());
}

export function setupMorgan(e: Express): Express {
	return e.use(morgan('common'));
}

export function setupContract(e: Express): Express {
	// NOTE: currently @ts-rest/express can't add global middleware for handling error
	// e.g. (err, req, res, next) => void

	createExpressEndpoints(helloWorldContract, helloworldRouter, e);

	return e;
}

export function setupOpenApi(e: Express): Express {
	const openApiDocument = generateOpenApi(
		contract,
		{
			info: {
				title: 'Example API',
				version: '1.0.0',
			},
		},
		{
			setOperationId: true,
		}
	);

	return e.use('/api-docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
}

export const app: Express = [
	setupCors,
	setupBodyParser,
	setupMorgan,
	setupContract,
	setupOpenApi,
].reduce((e, middleware) => middleware(e), express());
