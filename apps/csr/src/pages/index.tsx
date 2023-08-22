import { useApi } from '@/hooks/useApi';
import { useTranslation } from 'react-i18next';

export function Page() {
	const { getTodos } = useApi();
	const { t } = useTranslation(['common', 'example']);

	const { data, isLoading, isSuccess } = getTodos();
	return (
		<div>
			<h1>
				{t('hello')} | {t('i', { ns: 'example' })}
			</h1>
			<hr />
			{isLoading && <span>Loading...</span>}
			{isSuccess && <div>{JSON.stringify(data, null, 2)}</div>}
		</div>
	);
}

export default Page;
