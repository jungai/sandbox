import { type AxiosRequestConfig, AxiosError } from 'axios';
import axios from 'axios';
import { env } from '@/utils/env';
import { type ZodType, ZodError } from 'zod';

// TODO: handle interceptor ??
const instance = axios.create({
	baseURL: env.VITE_API_URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'application/json;charset=utf-8',
		'Access-Control-Allow-Origin': '*',
		// TODO: Authorization things
	},
});

export async function callGetApi<T>(
	path: string,
	schema: ZodType<T>,
	axiosOpts?: AxiosRequestConfig,
) {
	try {
		const rawResp = await instance.get<T>(path, axiosOpts);

		return schema.parse(rawResp.data);
	} catch (error) {
		// TODO: handle error
		if (error instanceof ZodError) throw new Error('ZOD_ERROR');
		if (error instanceof AxiosError) throw new Error('AXIOS_ERROR');

		throw new Error('INTERNAL_ERROR');
	}
}
