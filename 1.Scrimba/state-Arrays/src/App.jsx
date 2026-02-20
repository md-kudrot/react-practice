import React from "react"

export default function App() {
    const [addItem, addItemFunc] = React.useState([])

    const allFavoriteThings = ["💦🌹", "😺", "💡🫖", "🔥🧤", "🟤🎁",
        "🐴", "🍎🥧", "🚪🔔", "🛷🔔", "🥩🍝"]
    const thingsElements = addItem.map(thing => <p key={thing}>{thing}</p>)


    function addFavoriteThing() {
      addItemFunc(pre => [...pre, allFavoriteThings[pre.length]])
    }

    return (
        <main>
            <button onClick={addFavoriteThing}>Add item</button>
            <section aria-live="polite">
                {thingsElements}
            </section>
        </main>
    )
}