import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from '@/providers/router';
import { QueryClientProvider } from '@/providers/tanstack-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import '@/utils/i18n';

import '@/index.css';
import 'ui-react/dist/style.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<QueryClientProvider>
			<RouterProvider />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	</React.StrictMode>
);
