import {
	createBrowserRouter,
	RouterProvider as LibRouterProvider,
} from 'react-router-dom';
import { Page } from '@/pages';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Page,
	},
]);

export function RouterProvider() {
	return <LibRouterProvider router={router} />;
}
