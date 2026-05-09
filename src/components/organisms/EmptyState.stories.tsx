import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent } from '@storybook/test';
import EmptyState from './EmptyState';
import { Inbox, FilePlus } from 'lucide-react';

const meta = {
	title: 'Organisms/EmptyState',
	component: EmptyState,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		title: { control: 'text' },
		description: { control: 'text' },
		actionLabel: { control: 'text' },
	},
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: 'No invoices found',
		description: 'You do not have any invoices yet. Create your first invoice to get paid.',
		actionLabel: 'Create Invoice',
		icon: <Inbox className='w-12 h-12' />,
		onAction: () => console.log('Create invoice clicked'),
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const title = canvas.getByText('No invoices found');
		await expect(title).toBeInTheDocument();

		await step('Click action button', async () => {
			const button = canvas.getByRole('button', { name: /Create Invoice/i });
			await userEvent.click(button);
		});
	},
};

export const WithoutAction: Story = {
	args: {
		title: 'No Data Available',
		description: 'There is no analytical data for this time period.',
	},
};
