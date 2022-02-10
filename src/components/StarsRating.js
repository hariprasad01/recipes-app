import React, { useState } from "react";
import { FaStar } from "react-icons/fa"

const Star = ({ selected = false, onSelect = f => f }) => <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />

const createArray = length => [...Array(length)]

export default function StarRating({ totalStars = 5, style = {}, ...props }) {
    const [selectedStars, setSelectedStars] = useState(3);
    const para = `${selectedStars} out of ${totalStars}`
    return (
        <div style={{ color: "white", ...style }} {...props}>
            {
                createArray(totalStars).map((element, index) =>
                    <Star key={index} selected={selectedStars > index} onSelect={() => setSelectedStars(index + 1)}></Star>)
            }
            <p>{para}</p>
        </div>
    )
}