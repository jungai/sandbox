import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../label';
import { Input } from './input';

const meta: Meta<typeof Input> = {
	component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
	render: () => (
		<div className="flex flex-col w-max gap-y-2">
			<Input type="email" name="email" placeholder="email" />
			<div className="flex flex-col w-full max-w-sm gap-1.5">
				<Label htmlFor="name">Email</Label>
				<Input name="name" />
			</div>
			<div className="flex flex-col w-full max-w-sm gap-1.5">
				<Label htmlFor="name" required>
					Email
				</Label>
				<Input name="name" placeholder="name..." />
			</div>
			<div className="flex flex-col w-full max-w-sm gap-1.5">
				<Label htmlFor="name" required>
					Email
				</Label>
				<Input name="name" placeholder="name..." error="some error" />
				<span className="text-xs text-destructive">some error</span>
			</div>
			<Input name="username" disabled />
		</div>
	),
};
