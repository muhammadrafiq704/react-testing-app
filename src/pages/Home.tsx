import InputField from "../components/InputField"
import Counter from "../Counter"
import UserData from "../UserData"

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <UserData />
            <Counter />
            <InputField
                type="text"
                placeholder="Enter text"
                onChange={(value) => console.log(value)}
                name="name"
                label="Name"
            />
        </div>
    )
}

export default Home
