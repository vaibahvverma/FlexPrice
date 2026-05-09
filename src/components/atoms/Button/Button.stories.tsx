import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import Button from './Button';
import { Settings } from 'lucide-react';

const meta = {
	title: 'Atoms/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'black', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
			description: 'The visual variant of the button',
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon', 'xs'],
			description: 'The size of the button',
		},
		isLoading: {
			control: 'boolean',
			description: 'Whether the button is in a loading state',
		},
		disabled: {
			control: 'boolean',
			description: 'Whether the button is disabled',
		},
		onClick: { action: 'clicked' },
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default usage of the Button component.
 */
export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'default',
		size: 'default',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /Button/i });
		await expect(button).toBeInTheDocument();
		await expect(button).not.toBeDisabled();
	},
};

/**
 * Button in a loading state.
 */
export const Loading: Story = {
	args: {
		children: 'Loading Button',
		isLoading: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');
		await expect(button).toBeDisabled();
		// The loading spinner SVG should be present
		const spinner = button.querySelector('svg.animate-spin');
		await expect(spinner).toBeInTheDocument();
	},
};

/**
 * Disabled button.
 */
export const Disabled: Story = {
	args: {
		children: 'Disabled Button',
		disabled: true,
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button', { name: /Disabled Button/i });
		await expect(button).toBeDisabled();
	},
};

/**
 * Button with variants
 */
export const Destructive: Story = {
	args: {
		children: 'Delete',
		variant: 'destructive',
	},
};

export const Outline: Story = {
	args: {
		children: 'Cancel',
		variant: 'outline',
	},
};

/**
 * Button with an icon
 */
export const WithIcon: Story = {
	args: {
		children: 'Settings',
		prefixIcon: <Settings className='w-4 h-4' />,
	},
};
