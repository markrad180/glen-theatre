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

	it('disables submit in money mode when the custom amount is empty', () => {
		render(Donate);
		fireEvent.click(screen.getByRole('tab', { name: 'Donate' }));
		fireEvent.click(screen.getByRole('button', { name: 'Other' }));
		const submit = screen.getByRole('button', { name: 'Donate' });
		expect(submit.hasAttribute('disabled')).toBe(true);
		fireEvent.input(screen.getByLabelText('Custom amount'), { target: { value: '25' } });
		expect(submit.hasAttribute('disabled')).toBe(false);
	});

	it('submits to the stamped state and back', () => {
		render(Donate);
		fireEvent.input(screen.getByLabelText('Your name'), { target: { value: 'Bryan' } });
		fireEvent.input(screen.getByLabelText('Email'), { target: { value: 'bryan@glen.example' } });
		fireEvent.click(screen.getByRole('button', { name: 'Sign me up' }));
		expect(screen.getByText('Thank you!')).toBeTruthy();
		fireEvent.click(screen.getByRole('button', { name: 'Give another way' }));
		expect(screen.getByText('Weekend clean-up days')).toBeTruthy();
	});
});
