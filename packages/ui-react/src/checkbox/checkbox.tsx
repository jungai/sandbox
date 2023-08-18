import type { ReactNode } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';

export type TCheckBoxProps = RadixCheckboxProps & {
	checkIcon?: ReactNode;
};

export const CheckBox = ({ checkIcon, ...restProps }: TCheckBoxProps) => (
	<Checkbox.Root {...restProps}>
		<Checkbox.Indicator>{checkIcon ? checkIcon : 'X'}</Checkbox.Indicator>
	</Checkbox.Root>
);
