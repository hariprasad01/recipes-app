import React from "react";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import StarRating from "./StarsRating";
function Recipe({ name, ingredients, steps, style }) {
    const instructionTitle = "Instructions";
    const ingredientTitle = "Ingredients"
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")} style={{ ...style }}>
            <h2>{name}</h2>
            <StarRating style={{ backgroundColor: "black", color: "red" }} totalStars={5}></StarRating>
            <Ingredients ingredients={ingredients} title={ingredientTitle}></Ingredients>
            <Instructions steps={steps} title={instructionTitle}></Instructions>
        </section>
    );
}

export default Recipe;