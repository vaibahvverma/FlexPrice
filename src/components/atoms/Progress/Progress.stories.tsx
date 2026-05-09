import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Progress from './Progress';

const meta = {
	title: 'Molecules/UsageBar',
	component: Progress,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		value: { control: { type: 'range', min: 0, max: 100 } },
		indicatorColor: { control: 'text' },
		backgroundColor: { control: 'text' },
		label: { control: 'text' },
		labelColor: { control: 'text' },
	},
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default UsageBar
 */
export const Default: Story = {
	args: {
		value: 45,
		label: '450 / 1000 API calls used',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const label = canvas.getByText('450 / 1000 API calls used');
		await expect(label).toBeInTheDocument();
	},
};

/**
 * Danger UsageBar (Near Limit)
 */
export const NearLimit: Story = {
	args: {
		value: 95,
		label: '950 / 1000 API calls used (Approaching limit)',
		indicatorColor: 'bg-destructive',
		labelColor: 'text-destructive',
	},
};

/**
 * Success UsageBar
 */
export const Healthy: Story = {
	args: {
		value: 12,
		label: '12 / 1000 GB storage used',
		indicatorColor: 'bg-[#16A34A]',
	},
};
