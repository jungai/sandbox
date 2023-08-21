import { useApi } from '@/hooks/useApi';

export function Page() {
	const { getTodos } = useApi();

	const { data, isLoading, isSuccess } = getTodos();
	return (
		<div>
			{isLoading && <span>Loading...</span>}
			{isSuccess && <div>{JSON.stringify(data, null, 2)}</div>}
		</div>
	);
}

export default Page;
