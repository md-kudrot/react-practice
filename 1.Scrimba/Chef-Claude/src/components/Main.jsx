import React from "react"
import IngredientsList from "./IngredientsList"
import ClaudeRecipe from "./ClaudeRecipe"



export default function Main() {
    // const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const [ingredients, ingredientsFunc] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
    const [recipeShown, recipeShownFunc] = React.useState(false)

    // const ingredientsListItems = ingredients.map(item => <li key={item}>{item}</li>)

    function addIngredient(event) {


        // console.log(event)
        // event.preventDefault()
        // const formData = new FormData(event.currentTarget)
        const newIngredient = event.get("ingredient")
        console.log(newIngredient === "")

        if (newIngredient === "") {
            return
        }
        ingredientsFunc(pre => [...pre, newIngredient])


    }

    function toggleRecipeShown() {
        recipeShownFunc(pre => !pre)
        // console.log(recipeShown)
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

            {ingredients.length > 0 &&
                <IngredientsList
                 
                    ingredients={ingredients}
                    toggleRecipeShown={toggleRecipeShown}
                />}


            {recipeShown && <ClaudeRecipe />}

        </main>
    )
}

