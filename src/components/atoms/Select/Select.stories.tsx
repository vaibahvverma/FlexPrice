import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent, waitFor } from '@storybook/test';
import Select from './Select';

const meta = {
	title: 'Atoms/Select',
	component: Select,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		label: { control: 'text' },
		placeholder: { control: 'text' },
		disabled: { control: 'boolean' },
		isRadio: { control: 'boolean' },
		error: { control: 'text' },
	},
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const MOCK_OPTIONS = [
	{ value: 'monthly', label: 'Monthly Plan' },
	{ value: 'annual', label: 'Annual Plan' },
	{ value: 'custom', label: 'Custom Enterprise' },
];

/**
 * Default Select
 */
export const Default: Story = {
	args: {
		options: MOCK_OPTIONS,
		placeholder: 'Choose a plan...',
		label: 'Subscription Plan',
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');

		await step('Open select dropdown', async () => {
			await userEvent.click(trigger);
		});

		await step('Select an option', async () => {
			await waitFor(() => {
				// Find the portal body where shadcn select renders items
				expect(document.body).toHaveTextContent('Annual Plan');
			});
			// The role in shadcn is typically option
			const option = within(document.body).getByRole('option', { name: /Annual Plan/i });
			await userEvent.click(option);
			expect(trigger).toHaveTextContent('Annual Plan');
		});
	},
};

/**
 * Select with Error
 */
export const WithError: Story = {
	args: {
		options: MOCK_OPTIONS,
		label: 'Select a plan',
		error: 'Please select a plan to continue',
	},
};

/**
 * Disabled Select
 */
export const Disabled: Story = {
	args: {
		options: MOCK_OPTIONS,
		label: 'Archived Plan',
		value: 'monthly',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByRole('combobox');
		await expect(trigger).toBeDisabled();
	},
};

/**
 * Radio Style Select Items
 */
export const RadioStyle: Story = {
	args: {
		options: [
			{ value: 'card', label: 'Credit Card', description: 'Pay with Visa, Mastercard, etc.' },
			{ value: 'bank', label: 'Bank Transfer', description: 'Direct ACH transfer' },
		],
		label: 'Payment Method',
		isRadio: true,
	},
};
