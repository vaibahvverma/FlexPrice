import React from 'react';

export interface PricingTier {
	id: string;
	upTo: number | 'unlimited';
	flatFee: number;
	perUnit: number;
}

interface PricingTierTableProps {
	title?: string;
	description?: string;
	currency?: string;
	tiers: PricingTier[];
}

/**
 * PricingTierTable — displays graduated/tiered pricing in a readable table.
 *
 * @prop title - Section title
 * @prop description - Subtitle / description
 * @prop currency - Currency symbol (default "$")
 * @prop tiers - Array of pricing tiers with upTo, flatFee, perUnit
 */
export const PricingTierTable: React.FC<PricingTierTableProps> = ({
	title = 'Graduated Pricing',
	description = 'Pricing scales based on usage volume.',
	currency = '$',
	tiers,
}) => {
	return (
		<div className='w-full border border-[#E2E8F0] rounded-[6px] overflow-hidden bg-white'>
			{/* Header */}
			<div className='px-6 py-4 border-b border-[#E2E8F0]'>
				<h3 className='text-lg font-semibold text-gray-900'>{title}</h3>
				<p className='text-sm text-gray-500 mt-0.5'>{description}</p>
			</div>

			{/* Table */}
			<div className='overflow-auto'>
				<table className='w-full caption-bottom text-sm'>
					<thead className='bg-[#f9f9f9] border-b border-[#E2E8F0]'>
						<tr>
							<th className='h-10 px-4 text-left text-[13px] font-medium text-[#64748B]'>Tier Volume</th>
							<th className='h-10 px-4 text-right text-[13px] font-medium text-[#64748B]'>Flat Fee</th>
							<th className='h-10 px-4 text-right text-[13px] font-medium text-[#64748B]'>Per Unit</th>
						</tr>
					</thead>
					<tbody>
						{tiers.map((tier, index) => {
							const prevTier = index === 0 ? 0 : tiers[index - 1].upTo;
							const start = prevTier === 'unlimited' ? 0 : (prevTier as number) + 1;
							const end = tier.upTo === 'unlimited' ? '∞' : tier.upTo.toLocaleString();
							const isLast = index === tiers.length - 1;

							return (
								<tr key={tier.id} className={`h-12 hover:bg-[#fafafa] transition-colors ${!isLast ? 'border-b border-[#E2E8F0]' : ''}`}>
									<td className='px-4 py-2 text-[14px] font-medium text-gray-900'>
										{start.toLocaleString()} – {end}
									</td>
									<td className='px-4 py-2 text-[14px] text-right text-gray-700'>
										{tier.flatFee > 0 ? `${currency}${tier.flatFee.toFixed(2)}` : <span className='text-gray-400'>—</span>}
									</td>
									<td className='px-4 py-2 text-[14px] text-right text-gray-700'>
										{tier.perUnit > 0 ? `${currency}${tier.perUnit.toFixed(4)}` : <span className='text-gray-400'>—</span>}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default PricingTierTable;
