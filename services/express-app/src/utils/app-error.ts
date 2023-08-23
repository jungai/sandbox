import { StatusCodes, ReasonPhrases } from 'http-status-codes';

export class AppError extends Error {
	statusCode: StatusCodes;
	title: ReasonPhrases;
	message: string;

	constructor(statusCode: StatusCodes, title: ReasonPhrases, message: string) {
		super(message);
		this.statusCode = statusCode;
		this.title = title;
		this.message = message;
	}

	// TODO: parse in here??
}
