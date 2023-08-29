import type { Meta, StoryObj } from '@storybook/react';

import { Label } from './label';

const meta: Meta<typeof Label> = {
	component: Label,
};

export default meta;
type Story = StoryObj<typeof Label>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
	render: () => (
		<div className="flex flex-col w-max gap-y-2">
			<Label htmlFor="test">Accept terms and conditions</Label>
			<Label htmlFor="test" required>
				Accept terms and conditions
			</Label>
		</div>
	),
};
