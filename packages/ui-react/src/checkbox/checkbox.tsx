import type { ReactNode } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';
import type { CheckboxProps as RadixCheckboxProps } from '@radix-ui/react-checkbox';

export type TCheckBoxProps = RadixCheckboxProps & {
	checkIcon?: ReactNode;
};

export const CheckBox = ({ checkIcon, ...restProps }: TCheckBoxProps) => (
	<div className="flex items-center">
		<Checkbox.Root
			{...restProps}
			className="hover:bg-green-300 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] bg-white shadow-[0_2px_10px] outline-none focus:shadow-[0_0_0_2px_black]"
		>
			<Checkbox.Indicator className="text-black">
				{checkIcon ? checkIcon : 'X'}
			</Checkbox.Indicator>
		</Checkbox.Root>
		<label
			className="pl-[15px] text-[15px] leading-none text-white"
			htmlFor="c1"
		>
			Accept terms and conditions.
		</label>
	</div>
);
