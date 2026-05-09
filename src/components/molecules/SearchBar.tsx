import React from 'react';
import { Search, X } from 'lucide-react';
import { useDebounce } from 'use-debounce';

interface SearchBarProps {
	onSearch: (value: string) => void;
	placeholder?: string;
	debounceMs?: number;
	className?: string;
}

/**
 * SearchBar — A debounced search input with clear button.
 *
 * @prop onSearch - Callback called with the debounced search string
 * @prop placeholder - Placeholder text
 * @prop debounceMs - Debounce delay in milliseconds (default 300)
 * @prop className - Optional container class
 */
const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = 'Search...', debounceMs = 300, className }) => {
	const [value, setValue] = React.useState('');
	const [debouncedValue] = useDebounce(value, debounceMs);

	React.useEffect(() => {
		onSearch(debouncedValue);
	}, [debouncedValue, onSearch]);

	const handleClear = () => {
		setValue('');
		onSearch('');
	};

	return (
		<div className={`relative flex items-center ${className ?? ''}`}>
			<Search className='absolute left-3 w-4 h-4 text-gray-400 pointer-events-none' />
			<input
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
				placeholder={placeholder}
				className='w-full pl-9 pr-9 py-2 h-9 rounded-[6px] border border-input bg-background text-sm outline-none focus:border-black transition-colors placeholder:text-muted-foreground'
			/>
			{value && (
				<button
					onClick={handleClear}
					className='absolute right-3 text-gray-400 hover:text-gray-600 transition-colors'
					aria-label='Clear search'>
					<X className='w-4 h-4' />
				</button>
			)}
		</div>
	);
};

export default SearchBar;
