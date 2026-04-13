import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import About from "./About";
import userEvent from "@testing-library/user-event";

describe("About page", () => {
    it('should render the about page', () => {
        render(<About />);
        expect(screen.getByText(/about page/i)).toBeInTheDocument();
    });
    it('should render the about button label', () => {
        render(<About />);
        expect(screen.getByText(/learn more/i)).toBeInTheDocument();
    })
    it('should confirm the button clicked', async () => {
        const userE = userEvent.setup();
        const consoleLogSpy = vi.spyOn(console, 'log');
        render(<About />);
        await userE.click(screen.getByRole('button', { name: /learn more/i })),

            expect(consoleLogSpy).toHaveBeenCalledWith('Learn More button clicked');
    })
    it('should render the about image', () => {
        render(<About />);
        expect(screen.getByAltText('about-image')).toBeInTheDocument();
    })
})