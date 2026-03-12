// part1


import pads from "./pads.js"
import React from "react"

export default function App({ darkMode }) {
    // console.log(darkMode)
    const [padsArr, setPads] = React.useState(pads)

    // way 1
    const buttonElement = padsArr.map(padItem => <button style={{ backgroundColor: darkMode ? "#222222" : "#cccccc", }} key={padItem.id}></button>)

    // way2
    // const styles = {
    //     backgroundColor : darkMode ? "#222222" : "#cccccc"
    // }

    // const buttonElement = padsArr.map(item => <button style={styles} key={item.id}></button>) 

    return (
        <main>
            <div className="pad-container">
                {buttonElement}
            </div>
        </main>
    )
}
/**
   * Challenge: use a ternary to determine the backgroundColor
   * of the buttons
   * If darkMode is true, set them to "#222222"
   * If darkMode is false, set them to "#cccccc"
   */