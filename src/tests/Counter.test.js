import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';

beforeEach(() => {
	render(<Counter />);
})

test('renders counter message', () => {
	const counterMessage = screen.getByText(/Counter/i);
	expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
	const initCount = screen.getByTestId("count");
	expect(initCount.textContent).toBe("0");
});

test('clicking + increments the count', () => {
	const plusBtn = screen.getByRole("button", {name: "+"});
	userEvent.click(plusBtn);

	const plusCount = screen.getByTestId("count");
	expect(plusCount.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
	const minusBtn = screen.getByRole("button", {name: "-"});
	userEvent.click(minusBtn);

	const minusCount = screen.getByTestId("count");
	expect(minusCount.textContent).toBe("-1");
});
