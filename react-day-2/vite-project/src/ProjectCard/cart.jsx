function ProjectCard({title, description, techStack, isCompleted}) {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{techStack.join(",")}</p>
            <p>{isCompleted ? "completed": "working"}</p>
        </div>
    )
}

export default ProjectCard;