import React, { useRef, useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { ChevronDown, ChevronUp, Loader2 } from 'lucide-react';

interface Column<T> {
	key: string;
	header: React.ReactNode;
	render: (row: T) => React.ReactNode;
	sortable?: boolean;
}

interface DataTableProps<T> {
	data: T[];
	columns: Column<T>[];
	isLoading?: boolean;
	emptyState?: React.ReactNode;
	height?: string;
}

export function DataTable<T>({
	data,
	columns,
	isLoading = false,
	emptyState = <div className='p-8 text-center text-muted-foreground'>No data found</div>,
	height = '400px',
}: DataTableProps<T>) {
	const [sortConfig, setSortConfig] = useState<{ key: string; direction: 'asc' | 'desc' } | null>(null);

	const parentRef = useRef<HTMLDivElement>(null);

	const sortedData = React.useMemo(() => {
		let sortableItems = [...data];
		if (sortConfig !== null) {
			sortableItems.sort((a: any, b: any) => {
				if (a[sortConfig.key] < b[sortConfig.key]) {
					return sortConfig.direction === 'asc' ? -1 : 1;
				}
				if (a[sortConfig.key] > b[sortConfig.key]) {
					return sortConfig.direction === 'asc' ? 1 : -1;
				}
				return 0;
			});
		}
		return sortableItems;
	}, [data, sortConfig]);

	const rowVirtualizer = useVirtualizer({
		count: sortedData.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 40,
		overscan: 5,
	});

	const handleSort = (key: string) => {
		let direction: 'asc' | 'desc' = 'asc';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
			direction = 'desc';
		}
		setSortConfig({ key, direction });
	};

	return (
		<div className='border border-[#E2E8F0] rounded-[6px] overflow-hidden bg-white'>
			{/* Fixed header */}
			<div className='bg-[#f9f9f9] border-b border-[#E2E8F0]'>
				<table className='w-full text-sm'>
					<thead>
						<tr>
							{columns.map((col) => (
								<th
									key={col.key}
									className={`h-10 px-4 text-left text-[13px] font-medium text-[#64748B] ${col.sortable ? 'cursor-pointer hover:bg-gray-100' : ''}`}
									onClick={() => col.sortable && handleSort(col.key)}>
									<div className='flex items-center gap-1'>
										{col.header}
										{col.sortable &&
											sortConfig?.key === col.key &&
											(sortConfig.direction === 'asc' ? <ChevronUp className='w-3 h-3' /> : <ChevronDown className='w-3 h-3' />)}
									</div>
								</th>
							))}
						</tr>
					</thead>
				</table>
			</div>

			<div ref={parentRef} style={{ height, overflow: 'auto' }} className='relative'>
				{isLoading ? (
					<div className='flex justify-center items-center h-full p-8'>
						<Loader2 className='w-6 h-6 animate-spin text-muted-foreground' />
					</div>
				) : sortedData.length === 0 ? (
					emptyState
				) : (
					<div
						style={{
							height: `${rowVirtualizer.getTotalSize()}px`,
							width: '100%',
							position: 'relative',
						}}>
						{rowVirtualizer.getVirtualItems().map((virtualRow) => {
							const item = sortedData[virtualRow.index];
							return (
								<div
									key={virtualRow.index}
									style={{
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										height: `${virtualRow.size}px`,
										transform: `translateY(${virtualRow.start}px)`,
									}}
									className='border-b border-[#E2E8F0] hover:bg-muted/50 flex items-center px-4'>
									{columns.map((col) => (
										<div key={col.key} className='flex-1 text-[14px] px-2 truncate'>
											{col.render(item)}
										</div>
									))}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}
