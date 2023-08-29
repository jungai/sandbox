import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'utils';

const labelVariants = cva(
	'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

export type TLabelProps = ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
	VariantProps<typeof labelVariants> & {
		required?: boolean;
	};

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, TLabelProps>(
	({ className, required, ...props }, ref) => (
		<LabelPrimitive.Root
			ref={ref}
			className={cn(labelVariants(), className)}
			{...props}
		>
			{required && <span className="text-destructive">*</span>}
			{props.children}
		</LabelPrimitive.Root>
	)
);

export { Label };
