import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Spinner from './Spinner';

const meta = {
	title: 'Atoms/Spinner',
	component: Spinner,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		size: {
			control: { type: 'range', min: 12, max: 100, step: 4 },
			description: 'The size of the spinner in pixels',
		},
		className: {
			control: 'text',
			description: 'Additional CSS classes to apply to the spinner',
		},
	},
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Spinner
 */
export const Default: Story = {
	args: {
		size: 24,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		// The spinner is an SVG with no text, we can query it by its class or tag
		// Since we don't have a specific aria-label, we'll just check if the SVG exists
		const spinner = canvasElement.querySelector('svg.animate-spin');
		await expect(spinner).toBeInTheDocument();
	},
};

/**
 * Large Spinner
 */
export const Large: Story = {
	args: {
		size: 64,
		className: 'text-primary',
	},
};

/**
 * Custom Color Spinner
 */
export const CustomColor: Story = {
	args: {
		size: 32,
		className: 'text-destructive',
	},
};
