import React from "react";
import IngredientList from "./IngredientList";
export default function Ingredients({ title, ingredients }) {
    return (
        <>
            <h3>{title}</h3>
            <IngredientList ingredients={ingredients}></IngredientList>
        </>
    )
}