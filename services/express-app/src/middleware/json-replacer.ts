import type { Express } from 'express';

export function setupJsonReplacer(e: Express): Express {
	return e.set('json replacer', (_key: string, value: unknown) => {
		if (typeof value === 'undefined') {
			return null;
		}

		return value;
	});
}
