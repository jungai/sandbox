import { AppError } from './app-error';

export function normalizeResponseError(err: AppError) {
	return {
		error: err.title,
		message: err.message,
		status: err.statusCode ?? 200,
		result: null,
	};
}

export function normalizeResponse<T extends object>(data: T, status?: number) {
	return {
		error: null,
		message: null,
		status: status ?? 200,
		result: data,
	};
}
