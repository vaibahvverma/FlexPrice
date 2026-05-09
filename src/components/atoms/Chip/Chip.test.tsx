import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Chip from './Chip';

describe('Chip component', () => {
	it('renders label correctly', () => {
		render(<Chip label='Status: Active' />);
		expect(screen.getByText('Status: Active')).toBeInTheDocument();
	});

	it('handles click events when not disabled', () => {
		const handleClick = vi.fn();
		render(<Chip label='Click Me' onClick={handleClick} />);

		const chip = screen.getByRole('button');
		fireEvent.click(chip);
		expect(handleClick).toHaveBeenCalledTimes(1);
	});

	it('does not trigger click when disabled', () => {
		const handleClick = vi.fn();
		render(<Chip label='Disabled' onClick={handleClick} disabled />);

		// the span will not have role="button" if disabled in our implementation, or it won't trigger click
		const span = screen.getByText('Disabled').closest('span');
		if (span) {
			fireEvent.click(span);
		}
		expect(handleClick).not.toHaveBeenCalled();
	});

	it('renders with an icon', () => {
		render(<Chip label='With Icon' icon={<span data-testid='test-icon'>Icon</span>} />);
		expect(screen.getByTestId('test-icon')).toBeInTheDocument();
	});
});
