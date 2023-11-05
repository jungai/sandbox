import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import fastify from 'fastify';
import { createContext } from './context';
import { appRouter } from './app';
import { renderTrpcPanel } from 'trpc-panel';

export const server = fastify({
	maxParamLength: 5000,
});

server.register(fastifyTRPCPlugin, {
	prefix: '/v1',
	trpcOptions: { router: appRouter, createContext },
});

server.get('/v1/panel', (_, reply) => {
	reply.type('text/html').send(
		renderTrpcPanel(appRouter, {
			url: 'http://localhost:3000/v1',
		})
	);
});
