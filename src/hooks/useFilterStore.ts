import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface FilterState {
	filters: Record<string, any>;
	setFilter: (key: string, value: any) => void;
	resetFilters: () => void;
	getFilters: () => Record<string, any>;
}

export const createFilterStore = (routeKey: string) => {
	return create<FilterState>()(
		persist(
			(set, get) => ({
				filters: {},
				setFilter: (key, value) =>
					set((state) => {
						const newFilters = { ...state.filters, [key]: value };
						// Sync shallow fingerprint to URL
						if (typeof window !== 'undefined') {
							const url = new URL(window.location.href);
							const count = Object.keys(newFilters).filter((k) => newFilters[k] !== undefined && newFilters[k] !== '').length;
							if (count > 0) {
								url.searchParams.set('f', count.toString());
							} else {
								url.searchParams.delete('f');
							}
							window.history.replaceState({}, '', url.toString());
						}
						return { filters: newFilters };
					}),
				resetFilters: () =>
					set(() => {
						if (typeof window !== 'undefined') {
							const url = new URL(window.location.href);
							url.searchParams.delete('f');
							window.history.replaceState({}, '', url.toString());
						}
						return { filters: {} };
					}),
				getFilters: () => get().filters,
			}),
			{
				name: `filters:${routeKey}`,
				storage: createJSONStorage(() => sessionStorage),
			},
		),
	);
};

// Example usage: const useInvoicesFilter = createFilterStore('invoices');
