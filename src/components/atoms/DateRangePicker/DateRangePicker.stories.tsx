import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import DateRangePicker from './DateRangePicker';

const meta = {
	title: 'Molecules/DateRangePicker',
	component: DateRangePicker,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
	},
} satisfies Meta<typeof DateRangePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default DateRangePicker
 */
export const Default: Story = {
	args: {
		title: 'Filter by Date',
		onChange: (dates) => console.log(dates),
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('button', { name: /Select Range/i });

		await step('Open calendar', async () => {
			await userEvent.click(trigger);
			// Wait for popover to open
			await new Promise((r) => setTimeout(r, 200));
		});
	},
};

/**
 * Pre-selected Date Range
 */
export const PreSelected: Story = {
	args: {
		title: 'Billing Period',
		startDate: new Date(2023, 0, 1),
		endDate: new Date(2023, 0, 31),
		onChange: (dates) => console.log(dates),
	},
};

/**
 * Disabled
 */
export const Disabled: Story = {
	args: {
		title: 'Archived Data',
		disabled: true,
		onChange: (dates) => console.log(dates),
	},
};
