import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import React, { useState } from 'react';
import {
	Home,
	Layers2,
	Landmark,
	BarChart3,
	Settings,
	CodeXml,
	Puzzle,
	GalleryHorizontalEnd,
	ChevronRight,
	ChevronLeft,
} from 'lucide-react';
import { cn } from '@/lib/utils';

/**
 * SidebarNav — A self-contained collapsible sidebar component
 * for the FlexPrice design system Storybook.
 * Demonstrates: active route highlighting, icon+label, collapse.
 */

interface NavItem {
	title: string;
	icon: React.ElementType;
	url: string;
	items?: { title: string; url: string }[];
}

const NAV_ITEMS: NavItem[] = [
	{ title: 'Home', icon: Home, url: '/dashboard' },
	{
		title: 'Product Catalog',
		icon: Layers2,
		url: '/features',
		items: [
			{ title: 'Features', url: '/features' },
			{ title: 'Plans', url: '/plans' },
			{ title: 'Coupons', url: '/coupons' },
		],
	},
	{
		title: 'Billing',
		icon: Landmark,
		url: '/customers',
		items: [
			{ title: 'Customers', url: '/customers' },
			{ title: 'Subscriptions', url: '/subscriptions' },
			{ title: 'Invoices', url: '/invoices' },
		],
	},
	{ title: 'Revenue', icon: BarChart3, url: '/revenue' },
	{
		title: 'Developers',
		icon: CodeXml,
		url: '/events',
		items: [
			{ title: 'Events Debugger', url: '/events' },
			{ title: 'API Keys', url: '/api-keys' },
		],
	},
	{ title: 'Integrations', icon: Puzzle, url: '/integrations' },
	{ title: 'Settings', icon: Settings, url: '/settings' },
];

const SidebarNav = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [activeUrl, setActiveUrl] = useState('/dashboard');
	const [openGroups, setOpenGroups] = useState<string[]>(['Product Catalog']);

	const toggleGroup = (title: string) => {
		setOpenGroups((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]));
	};

	return (
		<div
			className={cn(
				'flex flex-col h-screen bg-[#f9f9f9] border-r border-gray-200 transition-all duration-300',
				collapsed ? 'w-14' : 'w-56',
			)}>
			{/* Header */}
			<div className='flex items-center justify-between px-3 py-4 border-b border-gray-200'>
				{!collapsed && <span className='font-semibold text-sm text-gray-900'>FlexPrice</span>}
				<button
					onClick={() => setCollapsed((c) => !c)}
					className='p-1 rounded hover:bg-gray-100 text-gray-500 ml-auto'
					aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}>
					{collapsed ? <ChevronRight className='w-4 h-4' /> : <ChevronLeft className='w-4 h-4' />}
				</button>
			</div>

			{/* Nav */}
			<nav className='flex-1 overflow-y-auto py-2'>
				{NAV_ITEMS.map((item) => {
					const Icon = item.icon;
					const isOpen = openGroups.includes(item.title);
					const isActive = activeUrl === item.url || item.items?.some((i) => i.url === activeUrl);

					return (
						<div key={item.title}>
							<button
								onClick={() => {
									if (item.items) {
										toggleGroup(item.title);
									} else {
										setActiveUrl(item.url);
									}
								}}
								className={cn(
									'flex items-center w-full px-3 py-2 text-sm rounded-md mx-1 gap-2 transition-colors',
									collapsed ? 'justify-center' : 'justify-between',
									isActive ? 'bg-[#092E44]/10 text-[#092E44] font-medium' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900',
								)}>
								<div className='flex items-center gap-2'>
									<Icon className='w-4 h-4 shrink-0' />
									{!collapsed && <span>{item.title}</span>}
								</div>
								{!collapsed && item.items && (
									<ChevronRight className={cn('w-3 h-3 transition-transform text-gray-400', isOpen ? 'rotate-90' : '')} />
								)}
							</button>

							{!collapsed && item.items && isOpen && (
								<div className='ml-4 border-l border-gray-200 pl-2 mt-1 mb-1'>
									{item.items.map((sub) => (
										<button
											key={sub.url}
											onClick={() => setActiveUrl(sub.url)}
											className={cn(
												'flex items-center w-full px-3 py-1.5 text-sm rounded-md gap-2 transition-colors',
												activeUrl === sub.url
													? 'text-[#092E44] font-medium bg-[#092E44]/5'
													: 'text-gray-500 hover:text-gray-900 hover:bg-gray-100',
											)}>
											{sub.title}
										</button>
									))}
								</div>
							)}
						</div>
					);
				})}
			</nav>

			{/* Footer */}
			{!collapsed && (
				<div className='px-3 py-3 border-t border-gray-200'>
					<p className='text-xs text-gray-400'>FlexPrice v1.0</p>
				</div>
			)}
		</div>
	);
};

const meta = {
	title: 'Organisms/SidebarNav',
	component: SidebarNav,
	parameters: {
		layout: 'fullscreen',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SidebarNav>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default collapsible sidebar with active route and nested groups.
 */
export const Default: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement);
		const homeBtn = canvas.getByRole('button', { name: /Home/i });
		await expect(homeBtn).toBeInTheDocument();
	},
};
