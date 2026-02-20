import React from "react"



export default function Main() {
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients , ingredientsFunc] = React.useState([])

    const ingredientsListItems = ingredients.map(item => <li key={item}>{item}</li>)

    /**
     * Challenge:
     * Add an `onSubmit` event listener on the form. Have the function
     * simply console.log("Form submitted!") for now
    */


    function handleSubmit(event) {

        // console.log(event)
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        // console.log(newIngredient)
        ingredientsFunc(pre => [...pre, newIngredient])
        

    }


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