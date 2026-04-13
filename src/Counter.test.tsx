import { render, screen, } from '@testing-library/react';
import Counter from './Counter';
import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('Counter Component', () => {
    it('should render Counter component', () => {
        render(<Counter />);
        expect(screen.getByText(/counter:/i)).toBeInTheDocument();
        // expect(screen.getByText(/Counter:/)).toBeInTheDocument();
    });
    it('should display the dynamic counter value', () => {
        render(<Counter />);
        // const counterValue = screen.getByTestId('counter-value'); //not recommended to use this 
        const counterValue = screen.getByText(/counter: 10/i) // recommended to use this gettextvalue with regex and case insensitive
        expect(counterValue).toHaveTextContent('Counter: 10'); 
        // expect(counterValue.textContent).toEqual('Counter: 10');
    })
    it('should increment counter on Increment button click', async () => {
        render(<Counter />);
        const userE = userEvent.setup();
        await userE.click(screen.getByRole('button', {name: /increment/i }));

        // const incrementButton = screen.getByText('Increment');
        // fireEvent.click(incrementButton);

        expect(screen.getByText(/counter: 11/i)).toBeInTheDocument();
    });
    it('should decrement counter on Decrement button click',  async() => {
        render(<Counter />);

        const userE = userEvent.setup();
        await userE.click(screen.getByRole('button', {name: /decrement/i}));

        expect(screen.getByText(/counter: 9/i)).toBeInTheDocument();
        // const decrementButton = screen.getByText('Decrement');
        // fireEvent.click(decrementButton);
    });
    it('should reset counter on Reset Button click', async() =>{
        render(<Counter/>);
        const userE = userEvent.setup();
        await userE.click(screen.getByRole('button', {name: /reset/i}));

        expect(screen.getByText(/counter: 10/i)).toBeInTheDocument();
    })
})