import {
	createBrowserRouter,
	RouterProvider as Provider,
} from 'react-router-dom';
import { Page } from '@/pages';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Page,
	},
]);

export function RouterProvider() {
	return <Provider router={router} />;
}
