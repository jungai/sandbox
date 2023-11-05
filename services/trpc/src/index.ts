import { server } from './fastify';

(async () => {
	try {
		await server.listen({ port: 3000 });
		console.log('server listening on port 3000');
	} catch (err) {
		server.log.error(err);
		process.exit(1);
	}
})();
