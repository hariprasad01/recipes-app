import React from "react";
import Instruction from "./Instruction"

export default function Instructions({ steps, title }) {
    return (
        <>
            <h3>{title}</h3>
            <div>
                {
                    steps.map((step, index) => <Instruction key={index} instruction={step}></Instruction>)
                }
            </div>
        </>
    )
}