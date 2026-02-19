import React from "react"



export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]


    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
    */


    function handleSubmit(event) {
        const kk = React.useState()
        console.log(kk)
        // console.log(event)
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
    const ingredientsListItems = ingredients.map(item => <li key={item}>{item}</li>)


    return (
        <main>
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}