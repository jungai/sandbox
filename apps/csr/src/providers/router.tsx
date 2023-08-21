import { lazy, Suspense } from 'react';
import {
	createBrowserRouter,
	RouterProvider as Provider,
} from 'react-router-dom';
import { Page } from '@/pages';

const Login = lazy(() => import('@/pages/login'));

export const router = createBrowserRouter([
	{
		path: '/',
		Component: Page,
	},
	{
		path: '/login',
		element: (
			// TODO: Loading component
			<Suspense fallback={<>Loading...</>}>
				<Login />
			</Suspense>
		),
		// Component: Login,
	},
]);

export function RouterProvider() {
	return <Provider router={router} />;
}
