function SkillBadge({SkillName, level, icon}) {
    return (
        <div>
            <h1>{SkillName}</h1>
            <p>{level}</p>
            <p>{icon}</p>
        </div>
    )
}

export default SkillBadge;