import {
	QueryClient,
	QueryClientProvider as Provider,
} from '@tanstack/react-query';
import type { ReactNode } from 'react';
// Create a client
const queryClient = new QueryClient();

type TQueryClientProviderProps = {
	children: ReactNode;
};
export const QueryClientProvider = ({
	children,
}: TQueryClientProviderProps) => (
	<Provider client={queryClient}>{children}</Provider>
);
