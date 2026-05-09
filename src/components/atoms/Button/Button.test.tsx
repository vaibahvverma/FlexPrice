import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Button from './Button';

describe('Button component', () => {
	it('renders children correctly', () => {
		render(<Button>Click Me</Button>);
		expect(screen.getByRole('button', { name: /Click Me/i })).toBeInTheDocument();
	});

	it('shows loading spinner when isLoading is true', () => {
		render(<Button isLoading>Submit</Button>);
		expect(screen.getByRole('button')).toBeDisabled();
		// Search for SVG or spinner class
		const spinner = document.querySelector('svg.animate-spin');
		expect(spinner).toBeInTheDocument();
	});

	it('is disabled when disabled prop is true', () => {
		render(<Button disabled>Disabled</Button>);
		expect(screen.getByRole('button')).toBeDisabled();
	});
});
