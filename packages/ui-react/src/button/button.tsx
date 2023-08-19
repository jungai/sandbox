import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from 'utils';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export function Button({ children, className, ...restProps }: TButtonProps) {
	return (
		<button
			className={cn(
				'border border-black px-2 py-1 text-red-400 rounded-app',
				className,
			)}
			{...restProps}
		>
			{children}
		</button>
	);
}
