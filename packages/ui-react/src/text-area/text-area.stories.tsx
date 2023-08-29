import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './text-area';

const meta: Meta<typeof Textarea> = {
	component: Textarea,
};

export default meta;
type Story = StoryObj<typeof Textarea>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
	render: () => (
		<div className="flex flex-col w-max gap-y-2">
			<Textarea>default</Textarea>
			<Textarea placeholder="this is placeholder" />
			<Textarea placeholder="this is placeholder" disabled />
		</div>
	),
};
