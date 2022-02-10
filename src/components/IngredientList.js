import React from "react";
import Ingredient from "./Ingredient";

export default function IngredientList({ ingredients }) {
    return (
        <ul>
            {ingredients.map((ingredient, index) => <Ingredient key={index} {...ingredient}></Ingredient>)}
        </ul>
    )
}