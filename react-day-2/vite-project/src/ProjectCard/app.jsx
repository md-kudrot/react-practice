import ProjectCard from "./cart.jsx";

function App() {
    return (
        <div>
            <ProjectCard
                title="Random OTP Generator"
                description="Built a secure OTP generator using JavaScript"
                techStack={["HTML", "CSS", "JavaScript"]}
                isCompleted={true}
            />

            <ProjectCard
                title="Weather App"
                description="Real-time weather data using API"
                techStack={["React", "API", "CSS"]}
                isCompleted={false}
            />
        </div>
    )
}

export default App;