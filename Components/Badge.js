import React from "react"

export default function Badges({children, color, className, ...rest}) {
    
    let badgeColor = color ? `color-${color}` : ""
    let badgeShape = className === "pill" ? "pill" : "square" 

    return (
        <span className={`${badgeShape} ${badgeColor}`}>{children}</span>
    )
}