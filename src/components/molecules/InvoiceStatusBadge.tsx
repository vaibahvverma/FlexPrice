import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Clock, XCircle, AlertCircle } from 'lucide-react';

export type InvoiceStatus = 'paid' | 'draft' | 'open' | 'void' | 'uncollectible';

interface InvoiceStatusBadgeProps {
	status: InvoiceStatus;
	className?: string;
}

const STATUS_CONFIG: Record<InvoiceStatus, { label: string; bg: string; text: string; border: string; Icon?: React.ElementType }> = {
	paid: { label: 'Paid', bg: '#ECFBE4', text: '#377E6A', border: '#d1e9ca', Icon: Check },
	draft: { label: 'Draft', bg: '#F0F2F5', text: '#57646E', border: '#e2e5e9' },
	open: { label: 'Open', bg: '#EFF8FF', text: '#2F6FE2', border: '#bfdbfe', Icon: Clock },
	void: { label: 'Void', bg: '#FEE2E2', text: '#DC2626', border: '#fecaca', Icon: XCircle },
	uncollectible: { label: 'Uncollectible', bg: '#FFF7ED', text: '#C2410C', border: '#fed7aa', Icon: AlertCircle },
};

/**
 * InvoiceStatusBadge — maps an invoice status string to a coloured chip with icon.
 *
 * @prop status - The invoice status ('paid' | 'draft' | 'open' | 'void' | 'uncollectible')
 * @prop className - Optional extra classes
 */
export const InvoiceStatusBadge: React.FC<InvoiceStatusBadgeProps> = ({ status, className }) => {
	const config = STATUS_CONFIG[status] ?? STATUS_CONFIG.draft;
	const { label, bg, text, border, Icon } = config;

	return (
		<span
			className={cn('inline-flex items-center gap-1 px-2 py-0.5 rounded-[8px] text-[13px] font-normal select-none', className)}
			style={{ backgroundColor: bg, color: text, border: `1px solid ${border}` }}>
			{Icon && <Icon className='w-3 h-3 shrink-0' />}
			{label}
		</span>
	);
};

export default InvoiceStatusBadge;
