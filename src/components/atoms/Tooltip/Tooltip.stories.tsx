import type { Meta, StoryObj } from '@storybook/react';
import { expect, within, userEvent, waitFor } from '@storybook/test';
import Tooltip from './Tooltip';
import { Button } from '../Button';
import { Info } from 'lucide-react';

const meta = {
	title: 'Atoms/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		content: {
			control: 'text',
			description: 'The content of the tooltip',
		},
		delayDuration: {
			control: 'number',
			description: 'Delay before tooltip shows up (ms)',
		},
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
		},
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Tooltip
 */
export const Default: Story = {
	args: {
		content: 'This is a helpful tooltip',
		children: <span>Hover me</span>,
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByText('Hover me');

		await step('Hover over trigger', async () => {
			await userEvent.hover(trigger);
		});

		await step('Wait for tooltip content', async () => {
			await waitFor(() => {
				// Tooltip portals to body, so we need to search the document body
				expect(document.body).toHaveTextContent('This is a helpful tooltip');
			});
		});
	},
};

/**
 * Tooltip with a Button trigger
 */
export const WithButton: Story = {
	args: {
		content: 'Click to save your changes',
		children: <Button variant='outline'>Save</Button>,
	},
};

/**
 * Informational Icon Tooltip with delay
 */
export const InfoIconWithDelay: Story = {
	args: {
		content: 'More information about this feature',
		delayDuration: 500,
		children: <Info className='w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer transition-colors' />,
	},
};

/**
 * Tooltip on the right side
 */
export const RightSide: Story = {
	args: {
		content: 'Appears on the right',
		side: 'right',
		children: <span className='border-b border-dashed border-primary cursor-help'>Side tooltip</span>,
	},
};
