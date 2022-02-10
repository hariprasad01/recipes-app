import React from "react";
import Recipe from "./Recipe";

function Menu({ recipes, style }) {
    return (
        <article style={{ ...style }}>
            <h1> Delicious Recipies</h1 >
            <div>
                {
                    recipes.map((recipe, index) => <Recipe style={{ padding: "16px" }} key={index} {...recipe}></Recipe>)
                }
            </div>
        </article >
    )
}

export default Menu;