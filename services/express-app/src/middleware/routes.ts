import type { Express } from 'express';
import { routers } from '../router';

export function setupRoutes(e: Express) {
	return e.use(routers);
}
