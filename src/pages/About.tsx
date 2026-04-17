import { useEffect, useState } from "react";
import Button from "../components/Button"
import axios from "axios";

const About = () => {
    const [followers, setFollowers] = useState<{ name: { first: string; last: string }; login: { username: string }; picture: { thumbnail: string } }[]>([]);

    const handleClick = () => {
        console.log("Learn More button clicked");
    };
    const fetchFollowers = async () => {
        try {
            const response = await axios.get('https://randomuser.me/api/?results=3');
            const data = response.data.results ?? [];
            setFollowers(data);
        } catch (error) {
            console.log('error :>> ', error);
        }
    };
    useEffect(() => {
        fetchFollowers();
    }, [])
    // console.log('followers :>> ', followers);
    return (
        <>
            <div style={{ display: 'flex', gap: '20px', alignItems: "flex-start", maxWidth: '1140px', margin: "0 auto", border: '1px solid red' }}>
                <div style={{ display: 'flex', flex: 1, gap: '10px', flexDirection: 'column' }}>
                    <h1 style={{ fontSize: '4rem', fontWeight: 700 }}>About Page</h1>
                    <span style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit rem possimus earum nam, consectetur sequi, voluptatum rerum suscipit velit esse blanditiis quasi dolorem ea, fugit quia iusto reiciendis reprehenderit perspiciatis.</span>
                    <Button text="Learn More" onClick={handleClick} />
                </div>
                <div style={{ display: 'flex', flex: 1, gap: '10px', flexDirection: 'column' }}>
                    <img
                        src="/src/assets/about.jpg"
                        alt="about-image"
                        style={{ width: '100%', objectFit: 'cover' }}
                    />
                </div>
            </div>
            {/* followers list */}
            <div>
                <h2 style={{ fontSize: '4rem', fontWeight: 700 }}>Followers</h2>
                <ul>
                    {followers.map((follower, index) => (
                        <li
                            // role="listitem"
                            key={index}
                            style={{ borderBottom: "1px solid gray", listStyle: "none", borderRadius: '12px', padding: '6px 20px', marginBottom: "10px" }}
                        >
                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                                <img
                                    src={follower.picture.thumbnail}
                                    alt={`${follower.name.first} ${follower.name.last}`}
                                />
                                <p>{follower.name.first} {follower.name.last}</p>
                            </div>
                            <p>{follower.login.username}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>

    )
}

export default About
