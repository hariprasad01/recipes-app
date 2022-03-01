import React, { useState } from "react";
import { FaStar } from "react-icons/fa"

const Star = ({ selected = false, onSelect = f => f, selectColor = "red", unSelectColor = "grey" }) => <FaStar color={selected ? selectColor : unSelectColor} onClick={onSelect} />

const createArray = length => [...Array(length)]

export default function StarRating({ totalStars = 5, style = {}, initialStars = 3, starColor, unStarColor, ...props }) {
    const [selectedStars, setSelectedStars] = useState(initialStars);
    const para = `${selectedStars} out of ${totalStars}`
    return (
        <div style={{ color: "black", ...style }} {...props}>
            {
                createArray(totalStars).map((element, index) =>
                    <Star key={index} selected={selectedStars > index} onSelect={() => setSelectedStars(index + 1)} selectColor={starColor} unSelectColor={unStarColor}></Star>)
            }
            < p > {para} </p >
        </div>
    )
}