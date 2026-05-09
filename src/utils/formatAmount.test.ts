import { describe, it, expect } from 'vitest';
import { formatAmount, removeFormatting } from '../components/atoms/Input/Input';

describe('formatAmount', () => {
	it('formats thousands correctly', () => {
		expect(formatAmount('1000')).toBe('1,000');
		expect(formatAmount('1000000')).toBe('1,000,000');
	});

	it('handles decimals correctly', () => {
		expect(formatAmount('1000.50')).toBe('1,000.50');
		expect(formatAmount('0.99')).toBe('0.99');
	});

	it('handles negative numbers', () => {
		expect(
			formatAmount('-1000.50', {
				allowNegative: true,
				allowDecimals: true,
				thousandSeparator: ',',
				decimalSeparator: '.',
			}),
		).toBe('-1,000.50');
	});

	it('returns empty string for falsy input', () => {
		expect(formatAmount('')).toBe('');
	});
});

describe('removeFormatting', () => {
	it('removes thousands separators', () => {
		expect(removeFormatting('1,000,000')).toBe('1000000');
		expect(removeFormatting('1,234.56')).toBe('1234.56');
	});
});
