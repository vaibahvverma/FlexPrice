import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
	title: string;
	value: number;
	currency?: string;
	isPercent?: boolean;
	showChangeIndicator?: boolean;
	isNegative?: boolean;
}

/**
 * MetricCard — A KPI card for dashboards.
 *
 * @prop title - The label for the metric
 * @prop value - Numeric value to display
 * @prop currency - ISO currency code (e.g. "USD")
 * @prop isPercent - Format as percentage
 * @prop showChangeIndicator - Show trending up/down arrow
 * @prop isNegative - Use red/down arrow for negative trend
 */
const MetricCard: React.FC<MetricCardProps> = ({
	title,
	value,
	currency,
	isPercent = false,
	showChangeIndicator = false,
	isNegative = false,
}) => {
	const arrowColor = isNegative ? 'text-[#DC2626]' : 'text-[#16A34A]';

	const getCurrencySymbol = (code: string): string => {
		try {
			return (
				new Intl.NumberFormat('en', { style: 'currency', currency: code, maximumFractionDigits: 0 })
					.formatToParts(0)
					.find((p) => p.type === 'currency')?.value ?? code
			);
		} catch {
			return code;
		}
	};

	const formatNumber = (n: number, decimals = 2): string =>
		n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

	const renderValue = () => {
		if (isPercent) return `${formatNumber(value, 2)}%`;
		if (currency) return `${getCurrencySymbol(currency)} ${formatNumber(value, 2)}`;
		return formatNumber(value, 2);
	};

	return (
		<div className='bg-white border border-[#E5E7EB] p-[25px] flex flex-col gap-3 rounded-md min-w-[200px]'>
			<p className='text-[14px] leading-[21px] text-[#4B5563] font-normal'>{title}</p>
			<p className='text-[24px] leading-[28px] font-medium text-[#111827] flex items-center gap-2'>
				{renderValue()}
				{showChangeIndicator && (
					<span className={`inline-block ${arrowColor}`}>{isNegative ? <TrendingDown size={18} /> : <TrendingUp size={18} />}</span>
				)}
			</p>
		</div>
	);
};

export default MetricCard;
