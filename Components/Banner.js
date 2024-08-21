import React from "react"


export default function Banner ({text, title, className}) {
    let titleStyle = ""
    let textStyle = ""
    if (className === className) {
        titleStyle =`${className}-title` 
        textStyle = `${className}-text` 
        }
    
    return (
        <main className={`banner ${className}`}>
            <h3 className={titleStyle}>{`${title}`}</h3>
            { text ? 
            <p className={textStyle}>{text}</p> 
            : ""}
        </main>
    )
}