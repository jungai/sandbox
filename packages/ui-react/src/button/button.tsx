import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: ReactNode;
};

export function Button({ children, ...restProps }: TButtonProps) {
	return <button {...restProps}>{children}</button>;
}