import { useEffect, useState } from "react";

const UserData = () => {
    const [userData, setUserData] = useState<{ name: string; email: string; phone: string } | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error: any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchUserData();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!userData) return null;

    return (
        <div data-testid="user-data">
            {userData ? (
                <div>
                    <h1>Name: {userData.name}</h1>
                    <p>Email: {userData.email}</p>
                    <p>Phone: {userData.phone}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default UserData
