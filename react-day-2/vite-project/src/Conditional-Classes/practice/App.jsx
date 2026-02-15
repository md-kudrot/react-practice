import Conditional from "./componant/Conditional.jsx"
export default function App() {
    return (
        <>
            <Conditional
                nationalFlag = {false}
            />
            <Conditional
                nationalFlag = {true}
            />
        </>
    )
}