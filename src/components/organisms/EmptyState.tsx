import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface EmptyStateProps {
	icon?: ReactNode;
	title: string;
	description?: string;
	actionLabel?: string;
	onAction?: () => void;
	className?: string;
}

/**
 * EmptyState — Full-page empty state for when a list/table has no data.
 *
 * @prop icon - React node for the illustration (e.g. a Lucide icon)
 * @prop title - Headline text
 * @prop description - Subtext explaining the empty state
 * @prop actionLabel - CTA button label
 * @prop onAction - CTA button click handler
 * @prop className - Optional extra classes on the container
 */
export const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, actionLabel, onAction, className }) => {
	return (
		<div
			className={cn(
				'flex flex-col items-center justify-center p-12 text-center h-[500px]',
				'border border-dashed border-[#E2E8F0] rounded-[6px] bg-[#fafafa]',
				className,
			)}>
			{icon && <div className='mb-6 text-gray-400 flex items-center justify-center w-16 h-16 rounded-full bg-gray-100'>{icon}</div>}
			<h3 className='text-[20px] font-semibold text-gray-900 mb-2'>{title}</h3>
			{description && <p className='text-[15px] text-gray-500 max-w-[380px] mb-8 leading-relaxed'>{description}</p>}
			{actionLabel && onAction && (
				<button
					onClick={onAction}
					className='inline-flex items-center px-4 py-2 rounded-[7px] text-sm font-medium bg-[#092E44] text-white hover:opacity-90 transition-opacity'>
					{actionLabel}
				</button>
			)}
		</div>
	);
};

export default EmptyState;
