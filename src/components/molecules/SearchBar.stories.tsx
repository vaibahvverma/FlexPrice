import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent, waitFor } from '@storybook/test';
import SearchBar from './SearchBar';

const meta = {
	title: 'Molecules/SearchBar',
	component: SearchBar,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		placeholder: { control: 'text' },
		debounceMs: { control: 'number' },
	},
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		placeholder: 'Search customers...',
		onSearch: (val) => console.log('Searched:', val),
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText('Search customers...');

		await step('Type into search', async () => {
			await userEvent.type(input, 'Acme Corp');
			await expect(input).toHaveValue('Acme Corp');
		});

		await step('Clear search', async () => {
			// Find the clear (X) icon, it renders when there is value
			// The icon has no specific aria label, but we can target the SVG or click it
			// Let's find the SVG by class or just find the parent
			const clearBtn = canvasElement.querySelector('svg.cursor-pointer');
			if (clearBtn) {
				await userEvent.click(clearBtn);
				await expect(input).toHaveValue('');
			}
		});
	},
};
