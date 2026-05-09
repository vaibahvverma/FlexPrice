import { QueryClientConfig, DefaultOptions } from '@tanstack/react-query';

export const QUERY_PRESETS = {
	REALTIME: { staleTime: 0, gcTime: 5 * 60 * 1000 },
	DEFAULT: { staleTime: 5 * 60 * 1000, gcTime: 10 * 60 * 1000 },
	STATIC: { staleTime: 30 * 60 * 1000, gcTime: 60 * 60 * 1000 },
} as const;

export type QueryPreset = keyof typeof QUERY_PRESETS;

interface CreateQueryConfigOptions {
	preset?: QueryPreset;
	staleTime?: number;
	gcTime?: number;
}

/**
 * Creates a global query config for TanStack Query Client
 */
export const createGlobalQueryConfig = (): QueryClientConfig => {
	return {
		defaultOptions: {
			queries: {
				staleTime: QUERY_PRESETS.DEFAULT.staleTime,
				gcTime: QUERY_PRESETS.DEFAULT.gcTime,
				refetchOnWindowFocus: false,
				retry: 1,
			},
		},
	};
};

/**
 * Utility to override query settings per call site
 * Example: useQuery({ queryKey, queryFn, ...createQueryConfig({ preset: 'REALTIME' }) })
 */
export const createQueryConfig = (options?: CreateQueryConfigOptions) => {
	if (!options) return QUERY_PRESETS.DEFAULT;

	const { preset, staleTime, gcTime } = options;
	const baseOptions = preset ? QUERY_PRESETS[preset] : QUERY_PRESETS.DEFAULT;

	return {
		...baseOptions,
		...(staleTime !== undefined ? { staleTime } : {}),
		...(gcTime !== undefined ? { gcTime } : {}),
	};
};
