import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Donate from './Donate.svelte';

const stubTotal = () => document.querySelector('.font-display.text-5xl')?.textContent ?? '';

describe('Donate', () => {
	it('defaults to the participate tab', () => {
		render(Donate);
		expect(screen.getByRole('tab', { name: 'Participate' }).getAttribute('aria-selected')).toBe('true');
		expect(screen.getByText('How would you like to help?')).toBeTruthy();
		expect(stubTotal()).toBe('Time');
	});

	it('updates the stub total when a preset is clicked', () => {
		render(Donate);
		fireEvent.click(screen.getByRole('tab', { name: 'Sponsor' }));
		fireEvent.click(screen.getByRole('button', { name: '$250' }));
		expect(stubTotal()).toBe('$250');
	});

	it('shows the restore options when the restore tab is selected', () => {
		render(Donate);
		fireEvent.click(screen.getByRole('tab', { name: 'Restore' }));
		expect(screen.getByText('What can you bring?')).toBeTruthy();
		expect(screen.getByText('Upholstery')).toBeTruthy();
		expect(stubTotal()).toBe('Craft');
	});

});
