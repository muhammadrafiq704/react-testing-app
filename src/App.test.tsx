import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

vi.mock("./pages/Home",  () =>({
    default: () => <div>Home with children rendered</div>
}));

describe("App Component", () => {
    it("renders app routes", () => {
        render(
            <MemoryRouter>
                <App />
            </MemoryRouter>
        );
        expect(screen.getByText('Home with children rendered')).toBeInTheDocument();
        // expect(screen.getByText('/home/i')).toBeInTheDocument();
    });
});