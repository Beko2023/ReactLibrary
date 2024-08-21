import React from 'react'

export default function Card ({title, text}) {

    return (
        <div className="card">
            <h2 className="card-title">{title}</h2>
            <p className="card-par">{text}</p>
        </div>
    )
}