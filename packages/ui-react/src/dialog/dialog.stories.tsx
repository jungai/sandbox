import type { Meta, StoryObj } from '@storybook/react';

import { DialogConfirm } from '.';

const meta: Meta<typeof DialogConfirm> = {
	component: DialogConfirm,
};

export default meta;
type Story = StoryObj<typeof DialogConfirm>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Base: Story = {
	render: () => (
		<div className="flex flex-col w-max gap-y-2">
			<DialogConfirm
				onConfirm={() => alert('confirm')}
				onCancel={() => alert('cancel')}
			/>

			<DialogConfirm
				triggerNode={<div className="cursor-pointer">click me pls</div>}
				onConfirm={() => alert('confirm')}
				onCancel={() => alert('cancel')}
			/>

			<DialogConfirm
				isClickOutside={false}
				triggerNode={<div className="cursor-pointer">can't click out side</div>}
				onConfirm={() => alert('confirm')}
				onCancel={() => alert('cancel')}
			/>
		</div>
	),
};
