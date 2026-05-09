import { describe, it, expect } from 'vitest';

/**
 * PricingTier calculation utilities
 */
interface Tier {
	upTo: number | 'unlimited';
	flatFee: number;
	perUnit: number;
}

function calculateTieredCost(usage: number, tiers: Tier[]): number {
	let total = 0;
	let remaining = usage;
	let prevUpTo = 0;

	for (const tier of tiers) {
		const tierEnd = tier.upTo === 'unlimited' ? Infinity : tier.upTo;
		const tierSize = tierEnd - prevUpTo;
		const unitsInThisTier = Math.min(remaining, tierSize);

		if (unitsInThisTier > 0) {
			total += tier.flatFee + unitsInThisTier * tier.perUnit;
			remaining -= unitsInThisTier;
		}

		prevUpTo = tierEnd === Infinity ? prevUpTo : (tier.upTo as number);
		if (remaining <= 0) break;
	}

	return total;
}

const testTiers: Tier[] = [
	{ upTo: 100, flatFee: 0, perUnit: 1 },
	{ upTo: 500, flatFee: 10, perUnit: 0.5 },
	{ upTo: 'unlimited', flatFee: 20, perUnit: 0.1 },
];

describe('calculateTieredCost', () => {
	it('calculates correctly within first tier', () => {
		// 50 units * $1 = $50
		expect(calculateTieredCost(50, testTiers)).toBe(50);
	});

	it('calculates correctly spanning two tiers', () => {
		// First 100 units: 0 + 100 * 1 = 100
		// Next 100 units: 10 + 100 * 0.5 = 60
		expect(calculateTieredCost(200, testTiers)).toBe(160);
	});

	it('handles zero usage', () => {
		expect(calculateTieredCost(0, testTiers)).toBe(0);
	});
});
