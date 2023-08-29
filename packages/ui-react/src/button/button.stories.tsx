import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
	component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
	render: () => (
		<div className="flex flex-col w-max gap-y-2">
			<Button variant="default">default</Button>
			<Button variant="destructive">destructive</Button>
			<Button variant="ghost">ghost</Button>
			<Button variant="outline">outline</Button>
			<Button variant="secondary">secondary</Button>
			<Button variant="link">link</Button>
			<hr />

			<Button variant="default" disabled>
				disabled
			</Button>
			<Button variant="default" disabled loading>
				loading
			</Button>
		</div>
	),
};
