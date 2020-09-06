import React from "react"
import "./card-list.styles.css"
export const CardList= props => {
    console.log("Printing Props >", props)
    console.log("Printing Props.Children", props.children)
    return <div className="card-list">{props.children}</div>
};