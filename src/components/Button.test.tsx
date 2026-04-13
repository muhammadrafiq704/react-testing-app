import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe('Button Component', () => {
    it('should render the button component', () => {
        render(<Button text='Click Me' />);
        // expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
        expect(screen.getByText('Click Me')).toBeInTheDocument();
    });
    it('should call the onClick handler when clicked', async () => {
        const userE = userEvent.setup();
        const handleClick = vi.fn();

        render(<Button text="Learn More" onClick={handleClick} />);
        // await userE.click(screen.getByRole('button', { name: /learn more/i }));
        await userE.click(screen.getByText('Learn More'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    })
})