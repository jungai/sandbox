import { initContract } from '@ts-rest/core';
import { BaseResponseSchema, ResponseErrorSchema } from './models/common';
import { HelloWorldSchema } from './models/resp';

const c = initContract();

export const helloWorldContract = c.router({
	helloworld: {
		method: 'GET',
		path: '/helloworld',
		summary: 'getHelloWord',
		responses: {
			200: BaseResponseSchema.extend({ result: HelloWorldSchema }),
			500: ResponseErrorSchema,
		},
	},
});

export const contract = c.router({
	helloworld: helloWorldContract,
});
