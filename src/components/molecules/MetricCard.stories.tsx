import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import MetricCard from './MetricCard';

const meta = {
	title: 'Molecules/MetricCard',
	component: MetricCard,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		value: { control: 'number' },
		currency: { control: 'text' },
		isPercent: { control: 'boolean' },
		showChangeIndicator: { control: 'boolean' },
		isNegative: { control: 'boolean' },
	},
} satisfies Meta<typeof MetricCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default MetricCard
 */
export const Default: Story = {
	args: {
		title: 'Total Revenue',
		value: 125000,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const title = canvas.getByText('Total Revenue');
		await expect(title).toBeInTheDocument();
		// formatNumber usually formats 125000 -> 125,000.00 or similar based on locale,
		// assuming here it might render "125,000" or similar
		const value = canvas.getByText(/125,000/i);
		await expect(value).toBeInTheDocument();
	},
};

/**
 * MetricCard with Currency
 */
export const WithCurrency: Story = {
	args: {
		title: 'MRR',
		value: 45000,
		currency: 'USD',
	},
};

/**
 * MetricCard with Percentage and Positive Trend
 */
export const PercentagePositiveTrend: Story = {
	args: {
		title: 'Growth Rate',
		value: 15.4,
		isPercent: true,
		showChangeIndicator: true,
		isNegative: false,
	},
};

/**
 * MetricCard with Currency and Negative Trend
 */
export const CurrencyNegativeTrend: Story = {
	args: {
		title: 'Churned Revenue',
		value: 2300,
		currency: 'EUR',
		showChangeIndicator: true,
		isNegative: true,
	},
};
