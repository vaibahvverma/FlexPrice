import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import PricingTierTable from './PricingTierTable';

const meta = {
	title: 'Organisms/PricingTierTable',
	component: PricingTierTable,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PricingTierTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'API Calls Pricing',
		description: 'Volume-based pricing for API usage',
		currency: '$',
		tiers: [
			{ id: '1', upTo: 1000, flatFee: 0, perUnit: 0.05 },
			{ id: '2', upTo: 5000, flatFee: 50, perUnit: 0.04 },
			{ id: '3', upTo: 10000, flatFee: 200, perUnit: 0.03 },
			{ id: '4', upTo: 'unlimited', flatFee: 400, perUnit: 0.02 },
		],
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const title = canvas.getByText('API Calls Pricing');
		await expect(title).toBeInTheDocument();
	},
};
