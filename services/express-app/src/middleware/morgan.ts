import type { Express } from 'express';
import morgan from 'morgan';

export function setupMorgan(e: Express): Express {
	return e.use(morgan('common'));
}
