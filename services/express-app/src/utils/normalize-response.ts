import { AppError } from './app-error';
import { StatusCodes } from 'http-status-codes';

// TODO: add logger
export type TLoggerValue = {
	timestamp: Date;
	path: string;
	error: string;
	message: string;
	status: number;
};

export type TResponse<T = object> = {
	error: string | null;
	message: string | null;
	status: number;
	result?: T | null;
};

export function normalizeResponseError(err: AppError): TResponse {
	return {
		error: err.title,
		message: err.message,
		status: err.statusCode ?? 200,
		result: null,
	};
}

export function normalizeResponse<T extends object>(
	data: T,
	status?: StatusCodes
): TResponse<T> {
	return {
		error: null,
		message: null,
		status: status ?? 200,
		result: data,
	};
}
