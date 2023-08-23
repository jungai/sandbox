import { createLogger, format, transports } from 'winston';
import { env } from './env';

const { timestamp, json, errors, combine } = format;

export const logger = createLogger({
	level: env.LOG_LEVEL ?? 'info',
	format: combine(timestamp(), json(), errors({ stack: true })),
	transports: [
		new transports.Console(),
		// TODO: write file
		// TODO: http to log service??
	],
});
