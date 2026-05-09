import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Chip from './Chip';
import { Check, AlertCircle } from 'lucide-react';

const meta = {
	title: 'Atoms/Chip',
	component: Chip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'success', 'warning', 'failed', 'info'],
			description: 'The visual style variant of the chip',
		},
		label: {
			control: 'text',
			description: 'The text label of the chip',
		},
		disabled: {
			control: 'boolean',
		},
	},
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Chip
 */
export const Default: Story = {
	args: {
		label: 'Draft',
		variant: 'default',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const chip = canvas.getByText('Draft');
		await expect(chip).toBeInTheDocument();
	},
};

/**
 * Success Variant (Active Plan)
 */
export const Success: Story = {
	args: {
		label: 'Active',
		variant: 'success',
		icon: <Check className='w-3 h-3' />,
	},
};

/**
 * Warning Variant
 */
export const Warning: Story = {
	args: {
		label: 'Past Due',
		variant: 'warning',
		icon: <AlertCircle className='w-3 h-3' />,
	},
};

/**
 * Failed Variant
 */
export const Failed: Story = {
	args: {
		label: 'Void',
		variant: 'failed',
	},
};

/**
 * Info Variant
 */
export const Info: Story = {
	args: {
		label: 'Processing',
		variant: 'info',
	},
};
