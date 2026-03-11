import React from "react"



export default function Main() {
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients, ingredientsFunc] = React.useState([])

    const ingredientsListItems = ingredients.map(item => <li key={item}>{item}</li>)

    function addIngredient(event) {

        // console.log(event)
        // event.preventDefault()
        // const formData = new FormData(event.currentTarget)
        const newIngredient = event.get("ingredient")
        // console.log(newIngredient)
        ingredientsFunc(pre => [...pre, newIngredient])


    }
    


    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 && <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>}
        </main>
    )
}