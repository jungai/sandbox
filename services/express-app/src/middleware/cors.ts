import type { Express } from 'express';
import cors from 'cors';

export function setupCors(e: Express): Express {
	return e.use(cors());
}
