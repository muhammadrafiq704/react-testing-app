import Button from "../components/Button"

const About = () => {
    const handleClick = () => {
        console.log("Learn More button clicked");
    };
    return (
        <div style={{ display: 'flex', gap: '20px', alignItems: "flex-start" }}>
            <div style={{ display: 'flex', flex: 1, gap: '10px', flexDirection: 'column' }}>
                <h1 style={{ fontSize: '4rem', fontWeight: 700 }}>About Page</h1>
                <span style={{ fontSize: '1.5rem', }}>Some information about the application.</span>
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
    )
}

export default About
