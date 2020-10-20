import React from "react"
import "./Card.css"


export default props => {

    const CorCard = {
        backgroundColor:(props.color || "#f00"),
        borderColor:(props.color || "#f00"),
    }

    return (
        <div className="Card" style={CorCard}>
            <div className="Title"> {props.Titulo} </div>
            <div className="Content"> {props.children} </div>
        </div>
    )
}