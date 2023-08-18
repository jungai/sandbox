import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export function Button({ children, ...restProps }: TButtonProps) {
	return (
		<button
			className="border border-black px-2 py-1 text-red-400 rounded-app"
			{...restProps}
		>
			{children}
		</button>
	);
}
