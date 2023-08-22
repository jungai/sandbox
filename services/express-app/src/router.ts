import { Router } from 'express';
import { helloworld } from './controllers/helloworld';

function generateRouter(r: Router) {
	r.get('/', helloworld);

	return r;
}

export const routers = generateRouter(Router());
