import { describe, it, expect } from 'vitest';
import { createQueryConfig, createGlobalQueryConfig, QUERY_PRESETS } from './createQueryConfig';

describe('createQueryConfig', () => {
	it('returns DEFAULT preset when no options provided', () => {
		expect(createQueryConfig()).toEqual(QUERY_PRESETS.DEFAULT);
	});

	it('returns REALTIME preset correctly', () => {
		expect(createQueryConfig({ preset: 'REALTIME' })).toEqual(QUERY_PRESETS.REALTIME);
	});

	it('returns STATIC preset correctly', () => {
		expect(createQueryConfig({ preset: 'STATIC' })).toEqual(QUERY_PRESETS.STATIC);
	});

	it('allows overriding staleTime', () => {
		const config = createQueryConfig({ staleTime: 1000 });
		expect(config.staleTime).toBe(1000);
		expect(config.gcTime).toBe(QUERY_PRESETS.DEFAULT.gcTime);
	});

	it('allows overriding gcTime on top of a preset', () => {
		const config = createQueryConfig({ preset: 'STATIC', gcTime: 9999 });
		expect(config.staleTime).toBe(QUERY_PRESETS.STATIC.staleTime);
		expect(config.gcTime).toBe(9999);
	});
});

describe('createGlobalQueryConfig', () => {
	it('sets default options correctly', () => {
		const config = createGlobalQueryConfig();
		expect(config.defaultOptions?.queries?.staleTime).toBe(QUERY_PRESETS.DEFAULT.staleTime);
		expect(config.defaultOptions?.queries?.gcTime).toBe(QUERY_PRESETS.DEFAULT.gcTime);
		expect(config.defaultOptions?.queries?.refetchOnWindowFocus).toBe(false);
	});
});
