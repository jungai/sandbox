import {
	Dialog,
	DialogTitle,
	DialogFooter,
	DialogHeader,
	DialogContent,
	DialogTrigger,
	DialogDescription,
} from './dialog';

import * as DialogPrimitive from '@radix-ui/react-dialog';
import type {} from '@radix-ui/react-dialog';
import { Button } from '../button';
import type { ReactNode } from 'react';

export type TDialogConfirmProps = {
	triggerNode?: ReactNode;
	title?: ReactNode;
	desc?: ReactNode;
	cancelText?: string;
	confirmTxt?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
	onOpenChange?: (open: boolean) => void;
	isClickOutside?: boolean;
};

const DialogConfirm = ({
	triggerNode,
	title,
	desc,
	confirmTxt = 'Confirm',
	cancelText = 'Cancel',
	onConfirm,
	onCancel,
	onOpenChange,
	isClickOutside = true,
}: TDialogConfirmProps) => {
	return (
		<Dialog onOpenChange={onOpenChange}>
			<DialogTrigger asChild>
				{triggerNode ? triggerNode : <Button variant="outline">action</Button>}
			</DialogTrigger>
			<DialogContent
				className="sm:max-w-[425px]"
				onInteractOutside={(e) => {
					!isClickOutside && e.preventDefault();
				}}
			>
				<DialogHeader>
					<DialogTitle>{title ? title : 'Confirm action'}</DialogTitle>
					<DialogDescription>
						{desc ? desc : 'Click confirm done.'}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<DialogPrimitive.Close asChild>
						<Button variant="destructive" onClick={onCancel}>
							{cancelText}
						</Button>
					</DialogPrimitive.Close>

					<DialogPrimitive.Close asChild>
						<Button type="submit" onClick={onConfirm}>
							{confirmTxt}
						</Button>
					</DialogPrimitive.Close>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export { DialogConfirm };
