import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import UserData from './UserData';
import { describe, expect, it } from 'vitest';


describe('UserData Component', () => {

    it('displays user data when fetch is successful', async () => {
        (fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => ({
                name: 'John Doe',
                email: 'Sincere@april.biz',
                phone: '123-456-7890'
            })
        });

        render(<UserData />);
        expect(screen.getByText(/loading/i)).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText(/Name: John Doe/i)).toBeInTheDocument();
            expect(screen.getByText(/Email: Sincere@april.biz/i)).toBeInTheDocument();
            expect(screen.getByText(/Phone: 123-456-7890/i)).toBeInTheDocument();
        })
        // same as above waitFor 
        
        // await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
        // expect(screen.getByText(/Name: John Doe/i)).toBeInTheDocument();
        // expect(screen.getByText(/Email: Sincere@april.biz/i)).toBeInTheDocument();
        // expect(screen.getByText(/Phone: 123-456-7890/i)).toBeInTheDocument();
    });

    it('displays error message when fetch fails', async () => {
        (fetch as any).mockResolvedValueOnce({
            ok: false,
        });

        render(<UserData />);
        await waitForElementToBeRemoved(() => screen.queryByText(/loading/i));
        expect(screen.getByText(/error:/i)).toBeInTheDocument();
    })

});