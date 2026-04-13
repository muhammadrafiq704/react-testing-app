import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Home from "./Home";

vi.mock("../UserData", () => ({
  default: () => <div data-testid="user-data">UserData Mock</div>,
}));

// vi.mock("../Counter", () => ({
//   default: () => <div data-testid="counter">Counter Mock</div>,
// }));

describe("Home Page", () => {
  it("renders home page", () => {
    render(<Home />);
    // screen.getByRole("heading", { name: /home page/i });
    // expect(screen.getByRole("heading", { name: /home page/i })).toBeInTheDocument();
    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it("renders UserData component", () => {
    render(<Home />);
    expect(screen.getByTestId("user-data")).toBeInTheDocument();
  });

  it("renders Counter component", () => {
    render(<Home />);
    expect(screen.getByTestId("counter")).toBeInTheDocument();
  });
});