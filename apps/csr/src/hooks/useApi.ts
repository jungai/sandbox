import { useQuery } from '@tanstack/react-query';
import { kGetTodos } from '@/constants/query-key';
import { callGetApi } from '@/utils/axios';
import { todosSchema } from '@/models';
import type { TTodosSchema } from '@/models';

export function useApi() {
	const getTodos = () => {
		return useQuery({
			queryKey: [kGetTodos],
			queryFn: ({ signal }) =>
				callGetApi<TTodosSchema>('/todos', todosSchema, { signal }),
		});
	};

	return {
		getTodos,
	};
}
