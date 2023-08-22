import type { Express } from 'express';
import express from 'express';

export function setupBodyParser(e: Express): Express {
	return e.use(express.json()).use(express.urlencoded({ extended: true }));
}
