import "./conditional.css"

function Conditional(props) {
    console.log(props.nationalFlag)
    return (
        <div className={props.nationalFlag ? "nationalFlag" : "wrongFlag"}>
            <div className= {!props.nationalFlag ? "wrong-cercle": "right-cercle"}></div>
        </div>
    )
}

export default Conditional;