import type { Meta, StoryObj } from '@storybook/react';

import { CheckBox } from './checkbox';
import { Label } from '../label';

const meta: Meta<typeof CheckBox> = {
	component: CheckBox,
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
	render: () => (
		<div className="flex flex-col gap-y-2 max-w">
			<CheckBox />
			<CheckBox checked />
			<CheckBox disabled />
			<div className="flex items-center leading-none gap-x-2">
				<CheckBox id="item1">clickme</CheckBox>
				<Label htmlFor="item1">chaewon</Label>
			</div>
		</div>
	),
};
