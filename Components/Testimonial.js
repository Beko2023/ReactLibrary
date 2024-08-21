import React from "react"

export default function Testimonial ({logo, src, statement, name, title}) {
    if (src) {
    return (
        <div className="testimonial--wrapper">
                <img className="test--image" src={(src)} alt="referee photo"/>
                <div className="content">
                    <p className="statement">{statement}</p>
                    <div className="signature">
                        <p>{name}</p>
                        <p>{title}</p>
                    </div>
                </div>
        </div>
    )
        }
    else {
        return (
        <div className="testimonial--wrapper2">
                <div className="content2">
                {logo ? <img className="logo" src={logo}/> : null}
                    <p className="statement2">{statement}</p>
                    <div className="signature2">
                        <p>{name}</p>
                        <p>{title}</p>
                    </div>
                </div>
        </div>
        )
    }
}
