import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import About from "./About";
import userEvent from "@testing-library/user-event";


describe("About Page", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("renders the about page", () => {
        render(<About />);
        expect(screen.getByText(/about page/i)).toBeInTheDocument();
    });

    it("renders button and handles click", async () => {
        const user = userEvent.setup();
        const logSpy = vi.spyOn(console, "log");

        render(<About />);

        await user.click(screen.getByRole("button", { name: /learn more/i }));

        expect(logSpy).toHaveBeenCalledWith("Learn More button clicked");
    });

    it("renders image", () => {
        render(<About />);
        expect(screen.getByAltText("about-image")).toBeInTheDocument();
    });

    it("renders followers list correctly (async UI)", async () => {
        // mockedAxios.get.mockResolvedValue({
        //     data: {
        //         results: [
        //             {
        //                 name: { first: "Victoria", last: "Macdonald" },
        //                 login: { username: "blackbird276" },
        //                 picture: { thumbnail: "https://randomuser.me/api/portraits/women/4.jpg", }
        //             },
        //             {
        //                 name: { first: "Victoria", last: "Macdonald" },
        //                 login: { username: "blackbird276" },
        //                 picture: { thumbnail: "https://randomuser.me/api/portraits/women/4.jpg", }
        //             }
        //         ]
        //     }
        // })
        render(<About />);

        expect(await screen.findByText("Manuela Delgado")).toBeInTheDocument();
        expect(await screen.findByText(/greencat244/i)).toBeInTheDocument();
        expect(await screen.findByAltText(/Manuela Delgado/i)).toBeInTheDocument();

        // const items = await screen.findAllByRole("listitem");
        // expect(items).toHaveLength(2);

    });
});