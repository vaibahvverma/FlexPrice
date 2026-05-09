import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { expect, within } from '@storybook/test';
import { DataTable } from './DataTable';
import { createFilterStore } from '../../../hooks/useFilterStore';
import Input from '../../atoms/Input/Input';

const meta = {
	title: 'Molecules/DataTable',
	component: DataTable,
	parameters: {
		layout: 'padded',
	},
	tags: ['autodocs'],
	argTypes: {
		isLoading: { control: 'boolean' },
		height: { control: 'text' },
	},
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic mock data
const basicData = [
	{ id: '1', name: 'Alice Smith', email: 'alice@example.com', status: 'Active' },
	{ id: '2', name: 'Bob Jones', email: 'bob@example.com', status: 'Inactive' },
	{ id: '3', name: 'Charlie Brown', email: 'charlie@example.com', status: 'Active' },
];

const columns = [
	{ key: 'id', header: 'ID', render: (row: any) => row.id, sortable: true },
	{ key: 'name', header: 'Name', render: (row: any) => row.name, sortable: true },
	{ key: 'email', header: 'Email', render: (row: any) => row.email, sortable: true },
	{ key: 'status', header: 'Status', render: (row: any) => row.status },
];

/**
 * Default Data Table
 */
export const Default: Story = {
	args: {
		data: basicData,
		columns,
		height: '200px',
	},
};

/**
 * Empty State
 */
export const Empty: Story = {
	args: {
		data: [],
		columns,
	},
};

/**
 * Virtualized List with 10,000 Rows
 */
const hugeData = Array.from({ length: 10000 }).map((_, i) => ({
	id: `${i + 1}`,
	name: `User ${i + 1}`,
	email: `user${i + 1}@example.com`,
	status: i % 2 === 0 ? 'Active' : 'Inactive',
}));

export const Virtualized10kRows: Story = {
	args: {
		data: hugeData,
		columns,
		height: '400px',
	},
};

// --- Filter Persistence Demo ---
const useInvoicesFilter = createFilterStore('invoices');

const DataTableWithFiltersComponent = () => {
	const filters = useInvoicesFilter((state) => state.filters);
	const setFilter = useInvoicesFilter((state) => state.setFilter);

	const filteredData = basicData.filter((row) => {
		if (filters.search && !row.name.toLowerCase().includes(filters.search.toLowerCase())) {
			return false;
		}
		return true;
	});

	return (
		<div className='flex flex-col gap-4'>
			<div className='flex gap-4 items-end'>
				<div className='w-64'>
					<Input placeholder='Search by name...' value={filters.search || ''} onChange={(val) => setFilter('search', val)} label='Filter' />
				</div>
				<div className='text-sm text-muted-foreground pb-2'>(Check sessionStorage or URL params ?f=1 to see persistence)</div>
			</div>
			<DataTable data={filteredData} columns={columns} height='200px' />
		</div>
	);
};

export const WithFilterPersistence: Story = {
	render: () => <DataTableWithFiltersComponent />,
};
