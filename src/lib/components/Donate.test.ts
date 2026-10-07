import { render, screen, fireEvent } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Donate from './Donate.svelte';

const stubTotal = () => document.querySelector('.font-display.text-5xl')?.textContent ?? '';

describe('Donate', () => {
	it('defaults to the volunteer tab', () => {
		render(Donate);
		expect(screen.getByRole('tab', { name: 'Volunteer' }).getAttribute('aria-selected')).toBe('true');
		expect(screen.getByText('How would you like to help?')).toBeTruthy();
		expect(stubTotal()).toBe('Time');
	});

	it('updates the stub total when a preset is clicked', () => {
		render(Donate);
		fireEvent.click(screen.getByRole('tab', { name: 'Donate' }));
		fireEvent.click(screen.getByRole('button', { name: '$250' }));
		expect(stubTotal()).toBe('$250');
	});

	it('shows the skills options when the skills tab is selected', () => {
		render(Donate);
		fireEvent.click(screen.getByRole('tab', { name: 'Skills' }));
		expect(screen.getByText('What can you bring?')).toBeTruthy();
		expect(screen.getByText('Electrical')).toBeTruthy();
		expect(stubTotal()).toBe('Craft');
	});

});
