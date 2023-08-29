import type { ComponentPropsWithoutRef, ElementRef, ReactNode } from 'react';
import { forwardRef } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react';
import { cn } from 'utils';

export type TCheckBoxProps = ComponentPropsWithoutRef<
	typeof CheckboxPrimitive.Root
> & {
	checkIcon?: ReactNode;
};

const CheckBox = forwardRef<
	ElementRef<typeof CheckboxPrimitive.Root>,
	TCheckBoxProps
>(({ className, checkIcon, ...props }, ref) => (
	<CheckboxPrimitive.Root
		ref={ref}
		className={cn(
			'peer h-5 w-5 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
			className
		)}
		{...props}
	>
		<CheckboxPrimitive.Indicator
			className={cn('flex items-center justify-center text-current')}
		>
			{checkIcon ? checkIcon : <Check className="h-5 w-5" />}
		</CheckboxPrimitive.Indicator>
	</CheckboxPrimitive.Root>
));

export { CheckBox };
