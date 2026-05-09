import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import Input from './Input';
import { Mail } from 'lucide-react';

const meta = {
	title: 'Atoms/Input',
	component: Input,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		variant: {
			control: 'select',
			options: ['text', 'number', 'formatted-number', 'integer'],
			description: 'The validation variant of the input',
		},
		disabled: {
			control: 'boolean',
		},
		error: {
			control: 'text',
		},
	},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default text input.
 */
export const Default: Story = {
	args: {
		placeholder: 'Enter text here',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Enter text here');
		await expect(input).toBeInTheDocument();
		await userEvent.type(input, 'Hello world');
		await expect(input).toHaveValue('Hello world');
	},
};

/**
 * Input with a label.
 */
export const WithLabel: Story = {
	args: {
		label: 'Email Address',
		placeholder: 'Enter your email',
		type: 'email',
	},
};

/**
 * Input in an error state.
 */
export const WithError: Story = {
	args: {
		label: 'Password',
		type: 'password',
		error: 'Password must be at least 8 characters long',
		placeholder: 'Enter your password',
	},
};

/**
 * Disabled input.
 */
export const Disabled: Story = {
	args: {
		label: 'Username',
		placeholder: 'Cannot edit this',
		disabled: true,
		value: 'flexprice_user',
	},
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByDisplayValue('flexprice_user');
		await expect(input).toBeDisabled();
	},
};

/**
 * Number formatted input with currency prefix.
 */
export const FormattedCurrency: Story = {
	args: {
		label: 'Amount',
		placeholder: '0.00',
		variant: 'formatted-number',
		inputPrefix: <span className='text-muted-foreground'>$</span>,
	},
};
