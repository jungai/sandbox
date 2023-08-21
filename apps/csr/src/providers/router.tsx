import {
	createBrowserRouter,
	RouterProvider as Provider,
} from 'react-router-dom';
import { Page } from '@/pages';
import { Login } from '@/pages/login';

// TODO: code splitting
export const router = createBrowserRouter([
	{
		path: '/',
		Component: Page,
	},
	{
		path: '/login',
		Component: Login,
	},
]);

export function RouterProvider() {
	return <Provider router={router} />;
}
