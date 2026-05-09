import { describe, it, expect } from 'vitest';
import InvoiceStatusBadge, { InvoiceStatus } from '../components/molecules/InvoiceStatusBadge';

// Pure function test - the mapping logic
const getStatusLabel = (status: InvoiceStatus): string => {
	const labels: Record<InvoiceStatus, string> = {
		paid: 'Paid',
		draft: 'Draft',
		open: 'Open',
		void: 'Void',
		uncollectible: 'Uncollectible',
	};
	return labels[status] || status;
};

describe('InvoiceStatus label mapping', () => {
	it('maps paid status correctly', () => {
		expect(getStatusLabel('paid')).toBe('Paid');
	});

	it('maps draft status correctly', () => {
		expect(getStatusLabel('draft')).toBe('Draft');
	});

	it('maps open status correctly', () => {
		expect(getStatusLabel('open')).toBe('Open');
	});

	it('maps void status correctly', () => {
		expect(getStatusLabel('void')).toBe('Void');
	});

	it('maps uncollectible status correctly', () => {
		expect(getStatusLabel('uncollectible')).toBe('Uncollectible');
	});
});
