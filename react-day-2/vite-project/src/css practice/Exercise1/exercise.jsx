function Exercise({status, string}) {
    console.log(status)
    const css = {
        backgroundColor:
            status === "success"
                ? "#10b981"
                : status === "warning"
                    ? "#f59e0b"
                    : "#ef4444",
    };

    return <span style={css}>{string}</span>
}

export default Exercise;